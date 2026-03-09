import globals from "globals";
import eslintConfig from "@eslint/js";
import { ESLintConfig, Project, interopDefault } from "@w5s/dev";
import fs from "node:fs";
import nodePath from "node:path";
import process from "node:process";
import { findUp } from "find-up";
import parseGitignore from "parse-gitignore";
import prettierConfig from "@w5s/prettier-config";
import { mergeProcessors, processorPassThrough } from "eslint-merge-processors";
//#region src/rules/esRules/bestPractices.ts
const bestPractices = () => ({
	"accessor-pairs": "off",
	"array-callback-return": ["error", { allowImplicit: true }],
	"block-scoped-var": "error",
	"complexity": ["off", 20],
	"class-methods-use-this": ["error", { exceptMethods: [] }],
	"consistent-return": "error",
	"curly": ["error", "multi-line"],
	"default-case": ["error", { commentPattern: "^no default$" }],
	"default-case-last": "error",
	"default-param-last": "error",
	"dot-notation": ["error", { allowKeywords: true }],
	"dot-location": ["error", "property"],
	"eqeqeq": [
		"error",
		"always",
		{ null: "ignore" }
	],
	"grouped-accessor-pairs": "error",
	"guard-for-in": "error",
	"max-classes-per-file": ["error", 1],
	"no-alert": "warn",
	"no-caller": "error",
	"no-case-declarations": "error",
	"no-constructor-return": "error",
	"no-div-regex": "off",
	"no-else-return": ["error", { allowElseIf: false }],
	"no-empty-function": ["error", { allow: [
		"arrowFunctions",
		"functions",
		"methods"
	] }],
	"no-empty-pattern": "error",
	"no-empty-static-block": "off",
	"no-eq-null": "off",
	"no-eval": "error",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-label": "error",
	"no-fallthrough": "error",
	"no-floating-decimal": "error",
	"no-global-assign": ["error", { exceptions: [] }],
	"no-native-reassign": "off",
	"no-implicit-coercion": ["off", {
		boolean: false,
		number: true,
		string: true,
		allow: []
	}],
	"no-implicit-globals": "off",
	"no-implied-eval": "error",
	"no-invalid-this": "off",
	"no-iterator": "error",
	"no-labels": ["error", {
		allowLoop: false,
		allowSwitch: false
	}],
	"no-lone-blocks": "error",
	"no-loop-func": "error",
	"no-magic-numbers": ["off", {
		ignore: [],
		ignoreArrayIndexes: true,
		enforceConst: true,
		detectObjects: false
	}],
	"no-multi-spaces": ["error", { ignoreEOLComments: false }],
	"no-multi-str": "error",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "error",
	"no-object-constructor": "off",
	"no-octal": "error",
	"no-octal-escape": "error",
	"no-param-reassign": ["error", {
		props: true,
		ignorePropertyModificationsFor: [
			"acc",
			"accumulator",
			"e",
			"ctx",
			"context",
			"req",
			"request",
			"res",
			"response",
			"$scope",
			"staticContext"
		]
	}],
	"no-proto": "error",
	"no-redeclare": "error",
	"no-restricted-properties": [
		"error",
		{
			object: "arguments",
			property: "callee",
			message: "arguments.callee is deprecated"
		},
		{
			object: "global",
			property: "isFinite",
			message: "Please use Number.isFinite instead"
		},
		{
			object: "self",
			property: "isFinite",
			message: "Please use Number.isFinite instead"
		},
		{
			object: "window",
			property: "isFinite",
			message: "Please use Number.isFinite instead"
		},
		{
			object: "global",
			property: "isNaN",
			message: "Please use Number.isNaN instead"
		},
		{
			object: "self",
			property: "isNaN",
			message: "Please use Number.isNaN instead"
		},
		{
			object: "window",
			property: "isNaN",
			message: "Please use Number.isNaN instead"
		},
		{
			property: "__defineGetter__",
			message: "Please use Object.defineProperty instead."
		},
		{
			property: "__defineSetter__",
			message: "Please use Object.defineProperty instead."
		},
		{
			object: "Math",
			property: "pow",
			message: "Use the exponentiation operator (**) instead."
		}
	],
	"no-return-assign": ["error", "always"],
	"no-return-await": "error",
	"no-script-url": "error",
	"no-self-assign": ["error", { props: true }],
	"no-self-compare": "error",
	"no-sequences": "error",
	"no-throw-literal": "error",
	"no-unmodified-loop-condition": "off",
	"no-unused-expressions": ["error", {
		allowShortCircuit: false,
		allowTernary: false,
		allowTaggedTemplates: false
	}],
	"no-unused-labels": "error",
	"no-useless-call": "off",
	"no-useless-catch": "error",
	"no-useless-concat": "error",
	"no-useless-escape": "error",
	"no-useless-return": "error",
	"no-void": "error",
	"no-warning-comments": ["off", {
		terms: [
			"todo",
			"fixme",
			"xxx"
		],
		location: "start"
	}],
	"no-with": "error",
	"prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
	"prefer-named-capture-group": "off",
	"prefer-object-has-own": "off",
	"prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
	"radix": "error",
	"require-await": "off",
	"require-unicode-regexp": "off",
	"vars-on-top": "error",
	"wrap-iife": [
		"error",
		"outside",
		{ functionPrototypeMethods: false }
	],
	"yoda": "error"
});
//#endregion
//#region src/rules/esRules/errors.ts
const errors = () => ({
	"for-direction": "error",
	"getter-return": ["error", { allowImplicit: true }],
	"no-async-promise-executor": "error",
	"no-await-in-loop": "error",
	"no-compare-neg-zero": "error",
	"no-cond-assign": ["error", "always"],
	"no-console": "warn",
	"no-constant-binary-expression": "off",
	"no-constant-condition": "warn",
	"no-control-regex": "error",
	"no-debugger": "error",
	"no-dupe-args": "error",
	"no-dupe-else-if": "error",
	"no-dupe-keys": "error",
	"no-duplicate-case": "error",
	"no-empty": "error",
	"no-empty-character-class": "error",
	"no-ex-assign": "error",
	"no-extra-boolean-cast": "error",
	"no-extra-parens": [
		"off",
		"all",
		{
			conditionalAssign: true,
			nestedBinaryExpressions: false,
			returnAssign: false,
			ignoreJSX: "all",
			enforceForArrowConditionals: false
		}
	],
	"no-extra-semi": "error",
	"no-func-assign": "error",
	"no-import-assign": "error",
	"no-inner-declarations": "error",
	"no-invalid-regexp": "error",
	"no-irregular-whitespace": "error",
	"no-loss-of-precision": "error",
	"no-misleading-character-class": "error",
	"no-obj-calls": "error",
	"no-new-native-nonconstructor": "off",
	"no-promise-executor-return": "error",
	"no-prototype-builtins": "error",
	"no-regex-spaces": "error",
	"no-setter-return": "error",
	"no-sparse-arrays": "error",
	"no-template-curly-in-string": "error",
	"no-unexpected-multiline": "error",
	"no-unreachable": "error",
	"no-unreachable-loop": ["error", { ignore: [] }],
	"no-unsafe-finally": "error",
	"no-unsafe-negation": "error",
	"no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
	"no-unused-private-class-members": "off",
	"no-useless-backreference": "error",
	"no-negated-in-lhs": "off",
	"require-atomic-updates": "off",
	"use-isnan": "error",
	"valid-jsdoc": "off",
	"valid-typeof": ["error", { requireStringLiterals: true }]
});
//#endregion
//#region src/rules/esRules/es6.ts
const es6 = () => ({
	"arrow-body-style": [
		"error",
		"as-needed",
		{ requireReturnForObjectLiteral: false }
	],
	"arrow-parens": ["error", "always"],
	"arrow-spacing": ["error", {
		before: true,
		after: true
	}],
	"constructor-super": "error",
	"generator-star-spacing": ["error", {
		before: false,
		after: true
	}],
	"no-class-assign": "error",
	"no-confusing-arrow": ["error", { allowParens: true }],
	"no-const-assign": "error",
	"no-dupe-class-members": "error",
	"no-duplicate-imports": "off",
	"no-new-symbol": "error",
	"no-restricted-exports": ["error", { restrictedNamedExports: ["default", "then"] }],
	"no-restricted-imports": ["off", {
		paths: [],
		patterns: []
	}],
	"no-this-before-super": "error",
	"no-useless-computed-key": "error",
	"no-useless-constructor": "error",
	"no-useless-rename": ["error", {
		ignoreDestructuring: false,
		ignoreImport: false,
		ignoreExport: false
	}],
	"no-var": "error",
	"object-shorthand": [
		"error",
		"always",
		{
			ignoreConstructors: false,
			avoidQuotes: true
		}
	],
	"prefer-arrow-callback": ["error", {
		allowNamedFunctions: false,
		allowUnboundThis: true
	}],
	"prefer-const": ["error", {
		destructuring: "any",
		ignoreReadBeforeAssign: true
	}],
	"prefer-destructuring": [
		"error",
		{
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: true,
				object: false
			}
		},
		{ enforceForRenamedProperties: false }
	],
	"prefer-numeric-literals": "error",
	"prefer-reflect": "off",
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	"require-yield": "error",
	"rest-spread-spacing": ["error", "never"],
	"sort-imports": ["off", {
		ignoreCase: false,
		ignoreDeclarationSort: false,
		ignoreMemberSort: false,
		memberSyntaxSortOrder: [
			"none",
			"all",
			"multiple",
			"single"
		]
	}],
	"symbol-description": "error",
	"template-curly-spacing": "error",
	"yield-star-spacing": ["error", "after"]
});
//#endregion
//#region src/rules/esRules/overrides.ts
const overrides = () => ({
	"class-methods-use-this": "off",
	"default-case": "off",
	"no-console": "error",
	"no-nested-ternary": "off",
	"no-param-reassign": ["error", { props: false }],
	"no-underscore-dangle": "off",
	"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
	"no-use-before-define": ["error", "nofunc"],
	"no-void": ["error", { allowAsStatement: true }],
	"unicode-bom": ["error", "never"]
});
//#endregion
//#region src/rules/esRules/strict.ts
const strict = () => ({ strict: ["error", "never"] });
//#endregion
//#region src/rules/esRules/variables.ts
const variables = () => ({
	"init-declarations": "off",
	"no-catch-shadow": "off",
	"no-delete-var": "error",
	"no-label-var": "error",
	"no-restricted-globals": [
		"error",
		{
			name: "isFinite",
			message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
		},
		{
			name: "isNaN",
			message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
		}
	],
	"no-shadow": "error",
	"no-shadow-restricted-names": "error",
	"no-undef": "error",
	"no-undef-init": "error",
	"no-undefined": "off",
	"no-unused-vars": ["error", {
		vars: "all",
		args: "after-used",
		ignoreRestSiblings: true
	}],
	"no-use-before-define": ["error", {
		functions: true,
		classes: true,
		variables: true
	}]
});
//#endregion
//#region src/rules/esRules.ts
const esRules = () => ({
	...bestPractices(),
	...errors(),
	...es6(),
	...strict(),
	...variables(),
	...overrides()
});
//#endregion
//#region src/glob.ts
const sourceGlob$1 = `**/${Project.extensionsToGlob(Project.sourceExtensions())}`;
const esSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(["javascript", "javascriptreact"]))}`;
const jsonSourceGlob = `**/${Project.extensionsToGlob([
	".json",
	".json5",
	".jsonc"
])}`;
const tsSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(["typescript", "typescriptreact"]))}`;
const ymlSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(["yaml"]))}`;
//#endregion
//#region src/config/es.ts
const defaultFiles$7 = [esSourceGlob];
async function es(options) {
	const { rules = {} } = options;
	return [{
		name: "w5s/es/setup",
		languageOptions: {
			ecmaVersion: Project.ecmaVersion(),
			globals: {
				...globals.browser,
				...globals[`es${Project.ecmaVersion()}`],
				...globals.node,
				__DEV__: "readonly",
				__PROD__: "readonly",
				__TEST__: "readonly",
				document: "readonly",
				navigator: "readonly",
				window: "readonly"
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: Project.ecmaVersion(),
				sourceType: "module"
			},
			sourceType: "module"
		},
		linterOptions: { reportUnusedDisableDirectives: true }
	}, {
		name: "w5s/es/rules",
		files: defaultFiles$7,
		rules: {
			...eslintConfig.configs.recommended.rules,
			...esRules(),
			...rules
		}
	}];
}
//#endregion
//#region src/config/ignores.ts
const getGitignore = async (cwd, prefix = "") => {
	const gitIgnoreFile = await findUp(nodePath.join(prefix, ".gitignore"), { cwd });
	if (gitIgnoreFile != null) {
		const { patterns } = parseGitignore.parse(await fs.promises.readFile(gitIgnoreFile));
		return patterns.map((pattern) => nodePath.join(prefix, pattern));
	}
	return [];
};
async function ignores(options = {}) {
	const cwd = process.cwd();
	const [ignoreRoot, ignoreAndroid, ignoreIOS] = await Promise.all([
		getGitignore(cwd),
		getGitignore(cwd, "android"),
		getGitignore(cwd, "ios")
	]);
	return [{
		ignores: [
			"**/node_modules",
			"**/dist",
			"**/package-lock.json",
			"**/yarn.lock",
			"**/pnpm-lock.yaml",
			"**/bun.lockb",
			"**/.docusaurus",
			"**/output",
			"**/coverage",
			"**/temp",
			"**/.temp",
			"**/tmp",
			"**/.tmp",
			"**/.history",
			"**/.vitepress/cache",
			"**/.nuxt",
			"**/.next",
			"**/.svelte-kit",
			"**/.vercel",
			"**/.changeset",
			"**/.idea",
			"**/.cache",
			"**/.output",
			"**/.vite-inspect",
			"**/.yarn",
			"**/vendor",
			"**/vendors",
			"**/*.min.*",
			"**/*.timestamp-*.mjs",
			".modules/",
			".go/",
			".pnpm-store/",
			...ignoreRoot,
			...ignoreAndroid,
			...ignoreIOS,
			...options.ignores ?? []
		],
		name: "w5s/ignore"
	}];
}
//#endregion
//#region src/type/StylisticConfig.ts
const defaultConfig = {
	enabled: true,
	indent: prettierConfig.tabWidth ?? 2,
	quotes: prettierConfig.singleQuote ? "single" : "double",
	jsx: true,
	semi: prettierConfig.semi ?? true
};
/**
* @namespace
*/
const StylisticConfig = {
	default: defaultConfig,
	from(input) {
		return typeof input === "boolean" ? {
			...defaultConfig,
			enabled: input
		} : {
			...defaultConfig,
			...input
		};
	}
};
//#endregion
//#region src/config/jsdoc.ts
const defaultFiles$6 = [sourceGlob$1];
async function jsdoc(options = {}) {
	const [jsdocPlugin] = await Promise.all([interopDefault(import("eslint-plugin-jsdoc"))]);
	const { files = defaultFiles$6, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	return [{
		name: "w5s/jsdoc/setup",
		plugins: { jsdoc: jsdocPlugin }
	}, {
		name: "w5s/jsdoc/rules",
		files,
		rules: {
			...jsdocPlugin.configs["flat/recommended-typescript-flavor"].rules,
			"jsdoc/no-undefined-types": "off",
			"jsdoc/require-hyphen-before-param-description": ["warn", "always"],
			"jsdoc/require-jsdoc": "off",
			"jsdoc/require-param-description": "off",
			"jsdoc/require-param-type": "off",
			"jsdoc/require-returns": "off",
			"jsdoc/valid-types": "off",
			...stylisticEnabled ? {
				...jsdocPlugin.configs["flat/stylistic-typescript"].rules,
				"jsdoc/check-alignment": "warn",
				"jsdoc/multiline-blocks": "warn",
				"jsdoc/tag-lines": [
					"warn",
					"any",
					{ startLines: 1 }
				]
			} : {},
			...rules
		},
		settings: { jsdoc: { mode: "typescript" } }
	}];
}
//#endregion
//#region src/config/jsonc.ts
const defaultFiles$5 = [jsonSourceGlob];
async function jsonc(options = {}) {
	const [jsoncPlugin, jsoncParser] = await Promise.all([interopDefault(import("eslint-plugin-jsonc")), interopDefault(import("jsonc-eslint-parser"))]);
	const { files = defaultFiles$5, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic);
	return [
		{
			name: "w5s/jsonc/setup",
			plugins: { jsonc: jsoncPlugin }
		},
		{
			files,
			languageOptions: { parser: jsoncParser },
			name: "w5s/jsonc/rules",
			rules: {
				...jsoncPlugin.configs["flat/recommended-with-json"][0]?.rules,
				...stylisticEnabled ? {
					"jsonc/array-bracket-spacing": ["error", "never"],
					"jsonc/comma-dangle": ["error", "never"],
					"jsonc/comma-style": ["error", "last"],
					"jsonc/indent": ["error", indent],
					"jsonc/key-spacing": ["error", {
						afterColon: true,
						beforeColon: false
					}],
					"jsonc/object-curly-newline": ["error", {
						consistent: true,
						multiline: true
					}],
					"jsonc/object-curly-spacing": ["error", "always"],
					"jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
					"jsonc/quote-props": "error",
					"jsonc/quotes": "error"
				} : {},
				...rules
			}
		},
		stylisticEnabled ? sortPackageJson() : {},
		stylisticEnabled ? sortTsconfigJson() : {}
	];
}
function sortTsconfigJson() {
	return {
		files: ["tsconfig*.json"],
		rules: { "jsonc/sort-keys": [
			"error",
			{
				order: [
					"$schema",
					"display",
					"extends",
					"compilerOptions",
					"include",
					"exclude",
					"files",
					"references"
				],
				pathPattern: "^$"
			},
			{
				order: { type: "asc" },
				pathPattern: ".*"
			}
		] }
	};
}
function sortPackageJson() {
	return {
		files: ["package.json"],
		rules: { "jsonc/sort-keys": [
			"error",
			{
				order: [
					"$schema",
					"name",
					"displayName",
					"version",
					"private",
					"description",
					"categories",
					"keywords",
					"homepage",
					"bugs",
					"repository",
					"funding",
					"license",
					"qna",
					"author",
					"maintainers",
					"contributors",
					"publisher",
					"sideEffects",
					"type",
					"imports",
					"exports",
					"main",
					"svelte",
					"umd:main",
					"jsdelivr",
					"unpkg",
					"module",
					"source",
					"jsnext:main",
					"browser",
					"react-native",
					"types",
					"typesVersions",
					"typings",
					"style",
					"example",
					"examplestyle",
					"assets",
					"bin",
					"man",
					"directories",
					"files",
					"workspaces",
					"binary",
					"scripts",
					"betterScripts",
					"contributes",
					"activationEvents",
					"husky",
					"simple-git-hooks",
					"pre-commit",
					"commitlint",
					"lint-staged",
					"config",
					"nodemonConfig",
					"browserify",
					"babel",
					"browserslist",
					"xo",
					"prettier",
					"eslintConfig",
					"eslintIgnore",
					"npmpackagejsonlint",
					"release",
					"remarkConfig",
					"stylelint",
					"ava",
					"jest",
					"mocha",
					"nyc",
					"tap",
					"resolutions",
					"dependencies",
					"devDependencies",
					"dependenciesMeta",
					"peerDependencies",
					"peerDependenciesMeta",
					"optionalDependencies",
					"bundledDependencies",
					"bundleDependencies",
					"extensionPack",
					"extensionDependencies",
					"flat",
					"packageManager",
					"engines",
					"engineStrict",
					"volta",
					"languageName",
					"os",
					"cpu",
					"preferGlobal",
					"publishConfig",
					"icon",
					"badges",
					"galleryBanner",
					"preview",
					"markdown"
				],
				pathPattern: "^$"
			},
			{
				order: ["url", "email"],
				pathPattern: `^bugs$`
			},
			...[
				"repository",
				"funding",
				"license",
				"author"
			].map((key) => ({
				order: [
					"type",
					"name",
					"email",
					"url"
				],
				pathPattern: `^${key}$`
			})),
			...["scripts", "betterScripts"].map((key) => ({
				order: { type: "asc" },
				pathPattern: `^${key}$`
			})),
			...[
				"bin",
				"contributes",
				"commitlint",
				"config",
				"nodemonConfig",
				"browserify",
				"babel",
				"xo",
				"release",
				"remarkConfig",
				"ava",
				"jest",
				"mocha",
				"nyc",
				"tap",
				"resolutions",
				"engines",
				"engineStrict",
				"preferGlobal",
				"publishConfig",
				"galleryBanner"
			].map((key) => ({
				order: { type: "asc" },
				pathPattern: `^${key}$`
			})),
			{
				order: { type: "asc" },
				pathPattern: "^(?:dev|peer|optional|bundled|extension)?[Dd]ependencies$"
			},
			{
				order: [
					"types",
					"require",
					"import"
				],
				pathPattern: "^exports.*$"
			}
		] }
	};
}
//#endregion
//#region src/config/imports.ts
async function imports(options = {}) {
	const { rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	const [importPlugin] = await Promise.all([interopDefault(import("eslint-plugin-import"))]);
	return [{
		name: "w5s/import/rules",
		plugins: { import: importPlugin },
		rules: {
			"import/first": "error",
			"import/no-duplicates": "error",
			"import/no-mutable-exports": "error",
			"import/no-named-default": "error",
			...stylisticEnabled ? { "import/newline-after-import": ["error", { count: 1 }] } : {},
			...rules
		}
	}];
}
//#endregion
//#region src/config/markdown.ts
const defaultFiles$4 = [`**/${Project.extensionsToGlob(Project.queryExtensions(["markdown"]))}`];
async function markdown(options = {}) {
	const [markdownPlugin] = await Promise.all([interopDefault(import("@eslint/markdown"))]);
	const { language = "markdown/gfm", files = defaultFiles$4, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	return [{
		name: "w5s/markdown/setup",
		plugins: { markdown: markdownPlugin }
	}, {
		files,
		language,
		name: "w5s/markdown/rules",
		processor: mergeProcessors([markdownPlugin.processors.markdown, processorPassThrough]),
		rules: {
			...markdownPlugin.configs.recommended.at(0)?.rules,
			...stylisticEnabled ? {} : {},
			...rules
		}
	}];
}
//#endregion
//#region src/config/node.ts
async function node(options = {}) {
	const [nodePlugin] = await Promise.all([interopDefault(import("eslint-plugin-n"))]);
	const { rules = {} } = options;
	return [{
		name: "w5s/node/setup",
		plugins: { node: nodePlugin }
	}, {
		name: "w5s/node/rules",
		rules: {
			"node/no-deprecated-api": "error",
			"node/no-exports-assign": "error",
			"node/no-new-require": "error",
			"node/no-path-concat": "error",
			"node/no-sync": "error",
			"node/prefer-global/buffer": ["error", "never"],
			"node/prefer-global/console": ["error", "always"],
			"node/prefer-global/url": ["error", "always"],
			"node/prefer-global/url-search-params": ["error", "always"],
			"node/process-exit-as-throw": "error",
			...rules
		}
	}];
}
//#endregion
//#region src/config/stylistic.ts
async function stylistic(options = {}) {
	const [stylisticPlugin] = await Promise.all([interopDefault(import("@stylistic/eslint-plugin"))]);
	const { rules = {} } = options;
	const { enabled: stylisticEnabled, indent, jsx, quotes, semi } = StylisticConfig.from(options);
	const config = stylisticEnabled ? stylisticPlugin.configs.customize({
		indent,
		jsx,
		pluginName: "style",
		quotes,
		semi
	}) : { rules: {} };
	return [{
		name: "w5s/style/setup",
		plugins: { style: stylisticPlugin }
	}, {
		name: "w5s/style/rules",
		rules: {
			...stylisticEnabled ? {
				...config.rules,
				"style/arrow-parens": ["error", "always"],
				"style/brace-style": ["error", "1tbs"],
				"style/operator-linebreak": [
					"error",
					"after",
					{ overrides: {
						":": "before",
						"?": "before",
						"|>": "before",
						"|": "before"
					} }
				],
				"style/quotes": [
					"error",
					quotes ?? StylisticConfig.default.quotes,
					{
						avoidEscape: true,
						allowTemplateLiterals: "always"
					}
				]
			} : {},
			...rules
		}
	}];
}
//#endregion
//#region src/config/test.ts
const sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
const defaultFiles$3 = [
	`**/__mocks__/**/${sourceGlob}`,
	`**/__tests__/**/${sourceGlob}`,
	`**/?(*.)+(spec|test)${sourceGlob.slice(1)}`
];
async function test(options = {}) {
	const [vitestPlugin] = await Promise.all([interopDefault(import("@vitest/eslint-plugin"))]);
	const { files = defaultFiles$3, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	return [{
		name: "w5s/test/setup",
		plugins: { test: vitestPlugin }
	}, {
		files,
		name: "w5s/test/rules",
		rules: {
			...vitestPlugin.configs.recommended.rules,
			...stylisticEnabled ? {} : {},
			...rules
		}
	}];
}
//#endregion
//#region src/rules/tsRules.ts
const tsRules = () => {
	const baseRules = esRules();
	return ESLintConfig.renameRules({
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/ban-ts-comment": ["warn", {
			"minimumDescriptionLength": 3,
			"ts-check": false,
			"ts-expect-error": "allow-with-description",
			"ts-ignore": "allow-with-description",
			"ts-nocheck": true
		}],
		"@typescript-eslint/consistent-type-assertions": ["error", {
			assertionStyle: "as",
			objectLiteralTypeAssertions: "never"
		}],
		"@typescript-eslint/default-param-last": baseRules["default-param-last"],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				format: [
					"PascalCase",
					"camelCase",
					"UPPER_CASE"
				],
				leadingUnderscore: "allow",
				selector: "variable",
				trailingUnderscore: "allow"
			},
			{
				format: ["PascalCase"],
				selector: "typeLike"
			}
		],
		"@typescript-eslint/no-dupe-class-members": baseRules["no-dupe-class-members"],
		"@typescript-eslint/no-empty-function": baseRules["no-empty-function"],
		"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
		"@typescript-eslint/no-empty-object-type": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extra-parens": baseRules["no-extra-parens"],
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-loop-func": baseRules["no-loop-func"],
		"@typescript-eslint/no-loss-of-precision": baseRules["no-loss-of-precision"],
		"@typescript-eslint/no-magic-numbers": baseRules["no-magic-numbers"],
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-redeclare": ESLintConfig.fixme(baseRules["no-redeclare"]),
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-shadow": baseRules["no-shadow"],
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unused-expressions": baseRules["no-unused-expressions"],
		"@typescript-eslint/no-unused-vars": baseRules["no-unused-vars"],
		"@typescript-eslint/no-use-before-define": baseRules["no-use-before-define"],
		"@typescript-eslint/no-useless-constructor": baseRules["no-useless-constructor"],
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/no-wrapper-object-types": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/require-await": baseRules["require-await"],
		"@typescript-eslint/triple-slash-reference": "error"
	}, { "@typescript-eslint": "ts" });
};
//#endregion
//#region src/config/ts.ts
const defaultFiles$2 = [tsSourceGlob];
async function ts(options = {}) {
	const [tsPlugin, tsParser] = await Promise.all([interopDefault(import("@typescript-eslint/eslint-plugin")), interopDefault(import("@typescript-eslint/parser"))]);
	const tsRecommendedRules = tsPlugin.configs["eslint-recommended"].overrides[0].rules;
	const tsStrictRules = tsPlugin.configs["strict"].rules;
	const tsTypeCheckedRules = tsPlugin.configs["recommended-type-checked-only"].rules;
	const { files = defaultFiles$2, rules = {}, stylistic = true, typeChecked = false } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	return [
		{
			name: "w5s/ts/setup",
			plugins: { ts: tsPlugin }
		},
		{
			files,
			languageOptions: {
				parser: tsParser,
				parserOptions: { sourceType: "module" }
			},
			name: "w5s/ts/rules",
			rules: {
				...ESLintConfig.renameRules(tsRecommendedRules, { "@typescript-eslint": "ts" }),
				...ESLintConfig.renameRules(tsStrictRules, { "@typescript-eslint": "ts" }),
				...tsRules(),
				...stylisticEnabled ? {} : {},
				...rules
			}
		},
		...typeChecked ? [{
			files: defaultFiles$2,
			name: "w5s/ts/rules-type-checked",
			rules: { ...ESLintConfig.renameRules(tsTypeCheckedRules, { "@typescript-eslint": "ts" }) }
		}] : []
	];
}
//#endregion
//#region src/config/unicorn.ts
const defaultFiles$1 = [sourceGlob$1];
async function unicorn(options = {}) {
	const [unicornPlugin] = await Promise.all([interopDefault(import("eslint-plugin-unicorn"))]);
	const { files = defaultFiles$1, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
	return [
		{
			name: "w5s/unicorn/setup",
			plugins: { unicorn: unicornPlugin }
		},
		{
			name: "w5s/unicorn/rules",
			files,
			rules: {
				...unicornPlugin.configs.recommended?.rules,
				"unicorn/consistent-destructuring": "off",
				"unicorn/consistent-function-scoping": "off",
				"unicorn/filename-case": "off",
				"unicorn/import-index": "off",
				"unicorn/new-for-builtins": "off",
				"unicorn/no-array-callback-reference": "off",
				"unicorn/no-array-for-each": "off",
				"unicorn/no-array-method-this-argument": "off",
				"unicorn/no-array-reduce": "off",
				"unicorn/no-console-spaces": "off",
				"unicorn/no-fn-reference-in-iterator": "off",
				"unicorn/no-nested-ternary": "off",
				"unicorn/no-null": "off",
				"unicorn/no-object-as-default-parameter": "off",
				"unicorn/no-process-exit": "off",
				"unicorn/no-unreadable-array-destructuring": "off",
				"unicorn/no-unused-properties": "warn",
				"unicorn/no-useless-undefined": "off",
				"unicorn/prefer-add-event-listener": "off",
				"unicorn/prefer-default-parameters": "off",
				"unicorn/prefer-set-has": "off",
				"unicorn/prevent-abbreviations": "off",
				"unicorn/throw-new-error": "off",
				...stylisticEnabled ? {} : {},
				...rules
			}
		},
		{
			name: "w5s/unicorn/overrides",
			files: ["**/*.config.cjs", "**/*.config.js"],
			rules: { "unicorn/prefer-module": "off" }
		}
	];
}
//#endregion
//#region src/config/yml.ts
const defaultFiles = [ymlSourceGlob];
async function yml(options = {}) {
	const [ymlPlugin] = await Promise.all([interopDefault(import("eslint-plugin-yml"))]);
	const { files = defaultFiles, rules = {}, stylistic = true } = options;
	const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic);
	return [{
		name: "w5s/yml/setup",
		plugins: { yml: ymlPlugin }
	}, {
		files,
		language: "yml/yaml",
		name: "w5s/yml/rules",
		rules: {
			...ymlPlugin.configs["recommended"].reduce((acc, config) => ({
				...acc,
				...config.rules
			}), {}),
			...stylisticEnabled ? {
				"style/spaced-comment": "off",
				"yml/block-mapping-question-indicator-newline": "error",
				"yml/block-sequence-hyphen-indicator-newline": "error",
				"yml/flow-mapping-curly-newline": "error",
				"yml/flow-mapping-curly-spacing": "error",
				"yml/flow-sequence-bracket-newline": "error",
				"yml/flow-sequence-bracket-spacing": "error",
				"yml/indent": ["error", indent === "tab" ? 2 : indent],
				"yml/key-spacing": ["error", {
					afterColon: true,
					beforeColon: false
				}],
				"yml/no-tab-indent": "error",
				"yml/quotes": ["error", {
					avoidEscape: true,
					prefer: quotes === "backtick" ? "single" : quotes
				}],
				"yml/spaced-comment": "error"
			} : {},
			...rules
		}
	}];
}
//#endregion
//#region src/defineConfig.ts
async function defineConfig(options = {}) {
	const stylisticOptions = typeof options.stylistic === "boolean" ? { enabled: options.stylistic } : {
		enabled: true,
		...options.stylistic
	};
	const withDefaultStylistic = (_options) => ({
		stylistic: stylisticOptions,
		..._options
	});
	const toOption = (optionsOrBoolean) => withDefaultStylistic(typeof optionsOrBoolean === "boolean" ? { enabled: optionsOrBoolean } : {
		enabled: true,
		...optionsOrBoolean
	});
	const esOptions = toOption(options.es);
	const importOptions = toOption(options.import);
	const jsdocOptions = toOption(options.jsdoc);
	const jsoncOptions = toOption(options.jsonc);
	const markdownOptions = toOption(options.markdown);
	const nodeOptions = toOption(options.node);
	const tsOptions = toOption(options.ts);
	const unicornOptions = toOption(options.unicorn);
	const ymlOptions = toOption(options.yml);
	const returnValue = [];
	const append = (config) => {
		returnValue.push(config);
	};
	append(es(esOptions));
	append(ignores(options));
	if (jsoncOptions.enabled) append(jsonc(jsoncOptions));
	if (jsdocOptions.enabled) append(jsdoc(jsdocOptions));
	if (stylisticOptions.enabled) append(stylistic(stylisticOptions));
	if (importOptions.enabled) append(imports(importOptions));
	if (markdownOptions.enabled) append(markdown(markdownOptions));
	if (nodeOptions.enabled) append(node(nodeOptions));
	if (tsOptions.enabled) append(ts(tsOptions));
	if (ymlOptions.enabled) append(yml(ymlOptions));
	if (unicornOptions.enabled) append(unicorn(unicornOptions));
	return (await Promise.all(returnValue)).reduce((acc, curr) => [...acc, ...curr], []);
}
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/eslint-config",
	version: "3.5.3",
	buildNumber: 1
});
//#endregion
export { StylisticConfig, defineConfig as default, defineConfig, es, ignores, imports, jsdoc, jsonc, markdown, meta, node, stylistic, test, ts, unicorn, yml };

//# sourceMappingURL=index.js.map