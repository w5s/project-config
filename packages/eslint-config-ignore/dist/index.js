import fs from "node:fs";
import nodePath from "node:path";
import process from "node:process";
import parseGitignore from "parse-gitignore";
import fs$1 from "node:fs/promises";
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/eslint-config-ignore",
	version: "1.2.0",
	buildNumber: 1
});
//#endregion
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
	"**/.svelte-kit",
	"**/.vercel",
	"**/.idea",
	"**/.yarn",
	"**/__snapshots__/**",
	".modules/",
	"**/.context",
	"**/.claude",
	"**/.agents",
	"**/.*/skills"
];
//#endregion
//#region src/internal/ignoreFileParse.ts
function ignoreFileParse(input) {
	return parseGitignore.parse(input).patterns;
}
//#endregion
//#region src/internal/ignoreRuleResolve.ts
/**
* Resolve a raw ignore rule from a `.gitignore` file into a path
* relative to the configured working directory.
*
* @example
* ```ts
* import { ignoreRuleResolve } from './internal/ignoreRuleResolve.js';
*
* ignoreRuleResolve('.', 'dist'); // 'dist'
* ignoreRuleResolve('.', '/dist'); // 'dist'
* ignoreRuleResolve('android', 'android-build'); // 'android/android-build'
* ignoreRuleResolve('android', '!android-build'); // '!android/android-build'
* ```
*
* @internal
* @param prefix A path prefix that points to the directory containing the `.gitignore` file.
* @param rule The raw ignore rule parsed from `.gitignore`.
* @returns A normalized ignore pattern relative to the root `cwd`.
*/
function ignoreRuleResolve(prefix, rule) {
	const negated = rule.startsWith("!");
	const normalizedPattern = negated ? rule.slice(1) : rule;
	const trimmedPattern = normalizedPattern.startsWith("/") ? normalizedPattern.slice(1) : normalizedPattern;
	const relativeIgnorePath = nodePath.join(prefix, trimmedPattern);
	return negated ? `!${relativeIgnorePath}` : relativeIgnorePath;
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
	const excludeDirs = new Set(options?.excludeDirs ?? [
		"node_modules",
		".git",
		"dist",
		"build",
		"out"
	]);
	const maxDepth = options?.maxDepth ?? 8;
	const stopAtGitRoot = options?.stopAtGitRoot ?? true;
	const absoluteRootDir = nodePath.resolve(rootDir);
	const found = /* @__PURE__ */ new Set();
	const normalize = (p) => p.replaceAll("\\", "/");
	function lastMatchWins(patterns, candidateRel) {
		const normCandidate = normalize(candidateRel);
		let lastMatch = null;
		for (const p of patterns) {
			const patNorm = normalize(p.startsWith("!") ? p.slice(1) : p);
			if (!patNorm) continue;
			if (normCandidate === patNorm || normCandidate.startsWith(patNorm + "/")) lastMatch = p;
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
		dir: absoluteRootDir,
		depth: 0,
		patterns: [...initialPatterns]
	}];
	while (queue.length > 0) {
		const { dir: currentDir, depth, patterns } = queue.shift();
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
				dir: subdir,
				depth: depth + 1,
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
	const ignores = typeof options.ignores === "function" ? options.ignores(mergedIgnores) : options.ignores ? [...mergedIgnores, ...options.ignores] : mergedIgnores;
	return {
		name: options.name ?? "w5s/eslint-ignore",
		ignores
	};
}
//#endregion
export { eslintIgnores as default, eslintIgnores, meta };

//# sourceMappingURL=index.js.map