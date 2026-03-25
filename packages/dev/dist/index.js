//#region src/ESLintConfig.ts
function toArray(value) {
	if (value == null) return [];
	if (Array.isArray(value)) return value;
	return [value];
}
function concatArray(left, right) {
	return [...toArray(left), ...toArray(right)];
}
let ESLintConfig;
(function(_ESLintConfig) {
	function concat(...configs) {
		return configs.reduce((returnValue, config) => ({
			...returnValue,
			...config,
			env: {
				...returnValue.env,
				...config.env
			},
			extends: concatArray(returnValue.extends, config.extends),
			globals: {
				...returnValue.globals,
				...config.globals
			},
			overrides: concatArray(returnValue.overrides, config.overrides),
			parserOptions: {
				...returnValue.parserOptions,
				...config.parserOptions
			},
			plugins: concatArray(returnValue.plugins, config.plugins),
			rules: {
				...returnValue.rules,
				...config.rules
			},
			settings: {
				...returnValue.settings,
				...config.settings
			}
		}), {
			env: {},
			extends: [],
			globals: {},
			overrides: [],
			parserOptions: {},
			plugins: [],
			rules: {},
			settings: {}
		});
	}
	_ESLintConfig.concat = concat;
	function fixme(_status) {
		return "off";
	}
	_ESLintConfig.fixme = fixme;
	function renameRules(rules, map) {
		return Object.fromEntries(Object.entries(rules).map(([key, value]) => {
			for (const [from, to] of Object.entries(map)) if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
			else if (from === "" && !key.includes("/") && to !== "") return [to + key, value];
			return [key, value];
		}));
	}
	_ESLintConfig.renameRules = renameRules;
})(ESLintConfig || (ESLintConfig = {}));
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
	version: "3.2.3",
	buildNumber: 1
});
//#endregion
//#region src/Project.ts
function escapeRegExp(value) {
	return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}
let Project;
(function(_Project) {
	function ecmaVersion() {
		return 2022;
	}
	_Project.ecmaVersion = ecmaVersion;
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
	function queryExtensions(languages) {
		return languages.reduce((previousValue, currentValue) => previousValue.concat(registry[currentValue] ?? []), []).sort();
	}
	_Project.queryExtensions = queryExtensions;
	function sourceExtensions() {
		return queryExtensions([
			"javascript",
			"javascriptreact",
			"typescript",
			"typescriptreact"
		]);
	}
	_Project.sourceExtensions = sourceExtensions;
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
	function resourceExtensions() {
		return RESOURCE_EXTENSIONS;
	}
	_Project.resourceExtensions = resourceExtensions;
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
	function ignored() {
		return IGNORED;
	}
	_Project.ignored = ignored;
	function extensionsToMatcher(extensions) {
		return new RegExp(`(${extensions.map(escapeRegExp).join("|")})$`);
	}
	_Project.extensionsToMatcher = extensionsToMatcher;
	function extensionsToGlob(extensions) {
		return `*.+(${extensions.map((_) => _.replace(/^\./, "")).join("|")})`;
	}
	_Project.extensionsToGlob = extensionsToGlob;
})(Project || (Project = {}));
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
	Validate: "validate"
};
//#endregion
export { ESLintConfig, Project, ProjectScript, interopDefault, meta };

//# sourceMappingURL=index.js.map