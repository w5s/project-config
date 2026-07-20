import fs from "node:fs";
import nodePath from "node:path";
import process from "node:process";
import { minimatch } from "minimatch";
import fs$1 from "node:fs/promises";
import parseGitignore from "parse-gitignore";
//#region src/defaultIgnores.ts
const defaultIgnores = [
	"**/package-lock.json",
	"**/yarn.lock",
	"**/pnpm-lock.yaml",
	"**/bun.lockb",
	"**/output",
	"**/.output",
	"**/coverage",
	"**/temp",
	"**/.temp",
	"**/tmp",
	"**/.tmp",
	"**/.cache",
	"**/*.min.*",
	"**/*.timestamp-*.mjs",
	".go/",
	".pnpm-store/",
	"**/.vitepress/cache",
	"**/.vite-inspect",
	"**/.history",
	"**/.nuxt",
	"**/.next",
	"**/next-env.d.ts",
	"**/.svelte-kit",
	"**/.vercel",
	"**/.idea",
	"**/.yarn",
	"**/__snapshots__/**",
	"**/CHANGELOG.md",
	".modules/",
	"**/.context",
	"**/.claude",
	"**/.agents",
	"**/.*/skills"
];
//#endregion
//#region src/internal/gitModulesIgnore.ts
const SUBMODULE_PATH_RE = /path\s*=\s*(.+)/g;
/**
* Read `cwd/.gitmodules` and return ESLint ignore glob patterns for every
* listed submodule.  Returns an empty array when no `.gitmodules` file exists.
*
* @param cwd
* @example
* ```ts
* await gitModulesIgnore('/path/to/project');
* // ['**\/packages/foo\/**', '**\/packages/bar\/**']
* ```
*/
async function gitModulesIgnore(cwd) {
	const gmPath = nodePath.join(cwd, ".gitmodules");
	try {
		let stat = null;
		try {
			stat = await fs.promises.stat(gmPath);
		} catch {
			stat = null;
		}
		if (!stat?.isFile()) return [];
		return gitModulesParse(String(await fs.promises.readFile(gmPath, "utf8"))).map((p) => `${p.replaceAll("\\", "/")}/**`);
	} catch {
		return [];
	}
}
/**
* Parse the content of a `.gitmodules` file and return the list of submodule paths.
*
* @param content
* @example
* ```ts
* gitModulesParse('[submodule "foo"]\n\tpath = packages/foo\n');
* // ['packages/foo']
* ```
*/
function gitModulesParse(content) {
	const paths = [];
	SUBMODULE_PATH_RE.lastIndex = 0;
	for (;;) {
		const matches = SUBMODULE_PATH_RE.exec(content);
		if (!matches) break;
		const captured = matches[1];
		if (captured) paths.push(captured.trim());
	}
	return paths;
}
//#endregion
//#region src/internal/ignoreFileParse.ts
function ignoreFileParse(input) {
	return parseGitignore.parse(input).patterns;
}
//#endregion
//#region src/internal/convertIgnorePatternToMinimatch.ts
/**
* Converts a gitignore-style pattern to an ESLint-compatible minimatch pattern.
*
* Ported from `@eslint/config-helpers` (eslint/rewrite).
*
* @see https://github.com/eslint/rewrite/blob/main/packages/config-helpers/src/ignore-file.js
* @param pattern The .eslintignore or .gitignore pattern to convert.
* @returns The converted minimatch pattern.
*/
function convertIgnorePatternToMinimatch(pattern) {
	const isNegated = pattern.startsWith("!");
	const negatedPrefix = isNegated ? "!" : "";
	const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd();
	if ([
		"",
		"**",
		"**/",
		"/**"
	].includes(patternToTest)) return `${negatedPrefix}${patternToTest}`;
	const firstIndexOfSlash = patternToTest.indexOf("/");
	return `${negatedPrefix}${firstIndexOfSlash === -1 || firstIndexOfSlash === patternToTest.length - 1 ? "**/" : ""}${(firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest).replaceAll(/(?=((?:\\.|[^{(])*))\1([{(])/guy, String.raw`$1\$2`)}${patternToTest.endsWith("/**") ? "/*" : ""}`;
}
//#endregion
//#region src/internal/ignoreRuleResolve.ts
const ROOT_PREFIX_PATTERN = /^\.\/?/;
const normalizePath = (p) => p.replaceAll("\\", "/").replace(ROOT_PREFIX_PATTERN, "");
/**
* Resolve a raw ignore rule from a `.gitignore` file into a flat ESLint
* minimatch glob relative to the configured working directory.
*
* @example
* ```ts
* import { ignoreRuleResolve } from './internal/ignoreRuleResolve.js';
*
* ignoreRuleResolve('.', 'out'); // '**\/out'
* ignoreRuleResolve('.', '/dist'); // 'dist'
* ignoreRuleResolve('android', 'build'); // 'android/**\/build'
* ignoreRuleResolve('android', '/build'); // 'android/build'
* ignoreRuleResolve('android', '!build'); // '!android/**\/build'
* ```
*
* @internal
* @param prefix A path prefix that points to the directory containing the `.gitignore` file.
* @param rule The raw ignore rule parsed from `.gitignore`.
* @returns A normalized ignore pattern relative to the root `cwd`.
*/
function ignoreRuleResolve(prefix, rule) {
	const negated = rule.startsWith("!");
	const raw = negated ? rule.slice(1) : rule;
	const normalizedPrefix = prefix === "." || prefix === "" ? "" : normalizePath(prefix);
	let converted;
	if (raw.startsWith("/")) converted = convertIgnorePatternToMinimatch(`/${normalizedPrefix ? `${normalizedPrefix}/${raw.slice(1)}` : raw.slice(1)}`);
	else converted = (normalizedPrefix ? `${normalizedPrefix}/` : "") + convertIgnorePatternToMinimatch(raw);
	return negated ? `!${converted}` : converted;
}
//#endregion
//#region src/internal/ignoreFileFind.ts
const GITIGNORE_FILE = ".gitignore";
/**
* Find `.gitignore` files relevant to `rootDir`.
*
* Behavior:
* - Searches downwards from `rootDir` (BFS) for `.gitignore` files, skipping `excludeDirs`.
* - Walks ancestors from `rootDir` up to the filesystem root (and stops at a `.git` folder when `stopAtGitRoot` is true).
* - Returns relative paths to `rootDir`.
*
* @param rootDir
* @param options
*/
async function ignoreFileFind(rootDir, options) {
	const excludeDirs = new Set(options?.excludeDirs ?? ["node_modules", ".git"]);
	const maxDepth = options?.maxDepth ?? 8;
	const stopAtGitRoot = options?.stopAtGitRoot ?? true;
	const absoluteRootDir = nodePath.resolve(rootDir);
	const found = /* @__PURE__ */ new Set();
	const normalize = (p) => p.replaceAll("\\", "/");
	function patternMatchesPath(pattern, candidateRel) {
		const normCandidate = normalize(candidateRel);
		const normPattern = normalize(pattern);
		if (minimatch(normCandidate, normPattern, { dot: true })) return true;
		if (minimatch(normCandidate, `${normPattern}/**`, { dot: true })) return true;
		if (normPattern.endsWith("/")) {
			const withoutTrailing = normPattern.slice(0, -1);
			if (minimatch(normCandidate, withoutTrailing, { dot: true })) return true;
			if (minimatch(normCandidate, `${withoutTrailing}/**`, { dot: true })) return true;
		}
		return false;
	}
	function lastMatchWins(patterns, candidateRel) {
		let lastMatch = null;
		for (const p of patterns) {
			const pat = p.startsWith("!") ? p.slice(1) : p;
			if (!pat) continue;
			if (patternMatchesPath(pat, candidateRel)) lastMatch = p;
		}
		return lastMatch;
	}
	function isIgnored(patterns, candidateRel) {
		const m = lastMatchWins(patterns, candidateRel);
		if (!m) return false;
		return !m.startsWith("!");
	}
	async function collectAncestorGitignores(startDir) {
		const files = [];
		let dir = startDir;
		while (true) {
			const gi = nodePath.join(dir, GITIGNORE_FILE);
			try {
				const stat = await fs$1.stat(gi).catch(() => null);
				if (stat && stat.isFile()) files.push(gi);
			} catch {}
			if (stopAtGitRoot) try {
				const gitStat = await fs$1.stat(nodePath.join(dir, ".git")).catch(() => null);
				if (gitStat && gitStat.isDirectory()) break;
			} catch {}
			const parent = nodePath.dirname(dir);
			if (parent === dir) break;
			dir = parent;
		}
		return files.reverse();
	}
	async function parseAndResolve(giPath) {
		try {
			const parsed = ignoreFileParse(String(await fs$1.readFile(giPath, "utf8")));
			const prefixRel = nodePath.relative(rootDir, nodePath.dirname(giPath));
			return parsed.map((p) => ignoreRuleResolve(prefixRel, p));
		} catch {
			return [];
		}
	}
	const ancestorFiles = await collectAncestorGitignores(absoluteRootDir);
	const initialPatterns = [];
	for (const gi of ancestorFiles) {
		const parsed = await parseAndResolve(gi);
		if (parsed.length > 0) initialPatterns.push(...parsed);
		found.add(gi);
	}
	const queue = [{
		depth: 0,
		dir: absoluteRootDir,
		patterns: [...initialPatterns]
	}];
	while (queue.length > 0) {
		const { depth, dir: currentDir, patterns } = queue.shift();
		if (depth > maxDepth) continue;
		let entries;
		try {
			entries = await fs$1.readdir(currentDir, { withFileTypes: true });
		} catch {
			continue;
		}
		const local = entries.find((e) => e.isFile() && e.name === GITIGNORE_FILE);
		const combinedPatterns = local ? [...patterns, ...await parseAndResolve(nodePath.join(currentDir, GITIGNORE_FILE))] : patterns;
		if (local) found.add(nodePath.join(currentDir, GITIGNORE_FILE));
		for (const ent of entries) {
			if (!ent.isDirectory()) continue;
			if (excludeDirs.has(ent.name)) continue;
			const subdir = nodePath.join(currentDir, ent.name);
			if (isIgnored(combinedPatterns, nodePath.relative(rootDir, subdir))) continue;
			queue.push({
				depth: depth + 1,
				dir: subdir,
				patterns: combinedPatterns
			});
		}
	}
	return [...found].map((p) => nodePath.relative(rootDir, p));
}
//#endregion
//#region src/eslintIgnores.ts
/**
* Create a new eslint configuration object
*
* @example
* ```ts
* // eslint.config.js
* export default [
*   await eslintIgnores({
*     ignores: [
*       // Add custom paths here
*     ]
*   })
* ];
* ```
*
* @param options
*/
async function eslintIgnores(options = {}) {
	const cwd = options.cwd ?? process.cwd();
	const recommended = options.recommended ?? true;
	const ignoreFilePaths = await ignoreFileFind(cwd);
	const ignoreGlobs = await Promise.all(ignoreFilePaths.map(async (ignoreFilePathRelative) => {
		const ignoreFilePath = nodePath.join(cwd, ignoreFilePathRelative);
		const patterns = ignoreFileParse(String(await fs.promises.readFile(ignoreFilePath)));
		const ignoreDirectoryRelative = nodePath.dirname(ignoreFilePathRelative);
		return patterns.map((pattern) => ignoreRuleResolve(ignoreDirectoryRelative, pattern));
	}));
	const mergedIgnores = [...recommended ? defaultIgnores : [], ...ignoreGlobs.flat()];
	if (options.ignoreGitModules ?? true) mergedIgnores.push(...await gitModulesIgnore(cwd));
	return {
		ignores: typeof options.ignores === "function" ? options.ignores(mergedIgnores) : options.ignores ? [...mergedIgnores, ...options.ignores] : mergedIgnores,
		name: options.name ?? "w5s/eslint-ignore"
	};
}
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 1,
	name: "@w5s/eslint-config-ignore",
	version: "1.7.0"
});
//#endregion
export { eslintIgnores as default, eslintIgnores, meta };

//# sourceMappingURL=index.js.map