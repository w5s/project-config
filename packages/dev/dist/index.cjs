Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/ESLintConfig.ts
/**
* Return a new merged flat configuration
*
* @param configs
*/
function merge(...configs) {
	const keys = new Set(configs.flatMap((i) => Object.keys(i)));
	const merged = configs.reduce((acc, cur) => {
		return {
			...acc,
			...cur,
			files: [...acc.files ?? [], ...cur.files ?? []],
			ignores: [...acc.ignores ?? [], ...cur.ignores ?? []],
			plugins: {
				...acc.plugins,
				...cur.plugins
			},
			rules: {
				...acc.rules,
				...cur.rules
			},
			languageOptions: {
				...acc.languageOptions,
				...cur.languageOptions
			},
			linterOptions: {
				...acc.linterOptions,
				...cur.linterOptions
			}
		};
	}, {});
	for (const key of Object.keys(merged)) if (!keys.has(key)) delete merged[key];
	return merged;
}
/**
* Concat multiple flat configs into a single flat config array.
*
* It also resolves promises and flattens the result.
*
* @example
*
* ```ts
* import eslint from '@eslint/js'
*
* export default ESLintConfig.concat(
*   {
*     plugins: {},
*     rules: {},
*   },
*   // It can also takes a array of configs:
*   [
*     {
*       plugins: {},
*       rules: {},
*     }
*    // ...
*   ],
*   // Or promises:
*   Promise.resolve({
*     files: ['*.ts'],
*     rules: {},
*   })
* );
* ```
* @param configs
*/
async function concat(...configs) {
	return (await Promise.all(configs)).flat();
}
/**
* Always return 'off'. `_status` is the previous rule value.
*
* @param _status
*/
function fixme(_status) {
	return "off";
}
/**
* Renames rules in the given object according to the given map.
*
* Given a map `{ 'old-prefix': 'new-prefix' }`, and a rule object
* `{ 'old-prefix/rule-name': 'error' }`, this function will return
* `{ 'new-prefix/rule-name': 'error' }`.
*
* @param rules The object containing the rules to rename.
* @param map The object containing the rename map.
*/
function renameRules(rules, map) {
	return Object.fromEntries(Object.entries(rules).map(([key, value]) => {
		for (const [from, to] of Object.entries(map)) if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
		else if (from === "" && !key.includes("/") && to !== "") return [to + key, value];
		return [key, value];
	}));
}
/**
* @namespace
*/
const ESLintConfig = Object.freeze({
	merge,
	concat,
	fixme,
	renameRules
});
//#endregion
//#region src/interopDefault.ts
const getDefaultOrElse = (_) => _?.default ?? _;
function interopDefault(m) {
	return m != null && typeof m.then === "function" ? Promise.resolve(m).then(getDefaultOrElse) : getDefaultOrElse(m);
}
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/dev",
	version: "3.4.7",
	buildNumber: 1
});
//#endregion
//#region src/Project.ts
function escapeRegExp(value) {
	return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}
/**
* Supported ECMA version
*
* @example
* ```ts
* Project.ecmaVersion() // 2022
* ```
*/
function ecmaVersion() {
	return 2022;
}
const registry = {
	css: [".css"],
	graphql: [".gql", ".graphql"],
	javascript: [
		".js",
		".cjs",
		".mjs"
	],
	javascriptreact: [".jsx"],
	jpeg: [".jpg", ".jpeg"],
	json: [".json"],
	jsonc: [".jsonc"],
	less: [".less"],
	markdown: [
		".markdown",
		".mdown",
		".mkd",
		".md"
	],
	sass: [".sass"],
	scss: [".scss"],
	typescript: [
		".ts",
		".cts",
		".mts"
	],
	typescriptreact: [".tsx"],
	vue: [".vue"],
	yaml: [".yaml", ".yml"]
};
/**
* Return a list of extensions
*
* @example
* ```ts
* Project.queryExtensions(['javascript']); // ['.js', '.cjs', ...]
* Project.queryExtensions(['typescript', 'typescriptreact']); // ['.ts', '.mts', ..., '.tsx']
* ```
*
* @param languages
*/
function queryExtensions(languages) {
	return languages.reduce((previousValue, currentValue) => previousValue.concat(registry[currentValue] ?? []), []).sort((left, right) => left.localeCompare(right));
}
/**
* Supported file extensions
*
* @example
* ```ts
* Project.sourceExtensions() // ['.ts', '.js', ...]
* ```
*/
function sourceExtensions() {
	return queryExtensions([
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact"
	]);
}
const RESOURCE_EXTENSIONS = Object.freeze([
	".gif",
	".png",
	".svg",
	...queryExtensions([
		"css",
		"graphql",
		"jpeg",
		"less",
		"sass",
		"sass",
		"yaml"
	])
]);
/**
* Resource file extensions
*
* @example
* ```ts
* Project.resourceExtensions() // ['.css', '.sass', ...]
* ```
*/
function resourceExtensions() {
	return RESOURCE_EXTENSIONS;
}
const IGNORED = Object.freeze([
	"node_modules/",
	"build/",
	"cjs/",
	"coverage/",
	"dist/",
	"dts/",
	"esm/",
	"lib/",
	"mjs/",
	"umd/"
]);
/**
* Files and folders to always ignore
*
* @example
* ```ts
* IGNORED // ['node_modules/', 'build/', ...]
* ```
*/
function ignored() {
	return IGNORED;
}
/**
* Return a RegExp that will match any list of extensions
*
* @param extensions
* @example
* ```ts
* Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
* ```
*/
function extensionsToMatcher(extensions) {
	return new RegExp(`(${extensions.map(escapeRegExp).join("|")})$`);
}
const reExtension = /^\./;
/**
* Return a glob matcher that will match any list of extensions
*
* @param extensions
* @example
* ```ts
* Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
* ```
*/
function extensionsToGlob(extensions) {
	return `*.+(${extensions.map((_) => _.replace(reExtension, "")).join("|")})`;
}
const Project = Object.freeze({
	ecmaVersion,
	extensionsToGlob,
	extensionsToMatcher,
	ignored,
	queryExtensions,
	resourceExtensions,
	sourceExtensions
});
//#endregion
//#region src/ProjectScript.ts
/**
* Project common scripts
*/
const ProjectScript = {
	Build: "build",
	Clean: "clean",
	CodeAnalysis: "code-analysis",
	Coverage: "coverage",
	Develop: "develop",
	Docs: "docs",
	Format: "format",
	Install: "install",
	Lint: "lint",
	Prepare: "prepare",
	Release: "release",
	Rescue: "rescue",
	Spellcheck: "spellcheck",
	Test: "test",
	Typecheck: "typecheck",
	Validate: "validate"
};
//#endregion
exports.ESLintConfig = ESLintConfig;
exports.Project = Project;
exports.ProjectScript = ProjectScript;
exports.interopDefault = interopDefault;
exports.meta = meta;

//# sourceMappingURL=index.cjs.map