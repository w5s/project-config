import fs from "node:fs";
import nodePath from "node:path";
import process from "node:process";
import { findUp } from "find-up";
import parseGitignore from "parse-gitignore";
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/eslint-config-ignore",
	version: "1.0.0",
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
//#region src/internal/includeIgnoreFileContent.ts
const includeIgnoreFileContent = parseGitignore.parse;
//#endregion
//#region src/eslintIgnores.ts
const getGitignore = async (cwd, prefix = "") => {
	const gitIgnoreFile = await findUp(nodePath.join(prefix, ".gitignore"), { cwd });
	if (gitIgnoreFile != null) {
		const { patterns } = includeIgnoreFileContent(await fs.promises.readFile(gitIgnoreFile));
		return patterns.map((pattern) => nodePath.join(prefix, pattern));
	}
	return [];
};
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
	const [ignoreRoot, ignoreAndroid, ignoreIOS] = await Promise.all([
		getGitignore(cwd),
		getGitignore(cwd, "android"),
		getGitignore(cwd, "ios")
	]);
	const mergedIgnores = [
		...recommended ? defaultIgnores : [],
		...ignoreRoot,
		...ignoreAndroid,
		...ignoreIOS
	];
	const ignores = typeof options.ignores === "function" ? options.ignores(mergedIgnores) : options.ignores ? [...mergedIgnores, ...options.ignores] : mergedIgnores;
	return {
		name: options.name ?? "w5s/eslint-ignore",
		ignores
	};
}
//#endregion
export { eslintIgnores as default, eslintIgnores, meta };

//# sourceMappingURL=index.js.map