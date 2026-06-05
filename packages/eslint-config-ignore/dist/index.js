import fs from "node:fs";
import nodePath from "node:path";
import process from "node:process";
import parseGitignore from "parse-gitignore";
import { findUp } from "find-up";
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/eslint-config-ignore",
	version: "1.1.0",
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
//#region src/internal/ignoreFileFind.ts
async function ignoreFileFind(cwd) {
	return (await Promise.all([
		findUp(nodePath.join("", ".gitignore"), { cwd }),
		findUp(nodePath.join("android", ".gitignore"), { cwd }),
		findUp(nodePath.join("ios", ".gitignore"), { cwd })
	])).filter((filePath) => filePath !== void 0).map((filePath) => nodePath.relative(cwd, filePath));
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