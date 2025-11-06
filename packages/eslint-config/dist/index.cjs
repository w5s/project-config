Object.defineProperty(exports, '__esModule', { value: true });
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let globals = require("globals");
globals = __toESM(globals);
let __w5s_dev = require("@w5s/dev");
__w5s_dev = __toESM(__w5s_dev);
let node_fs = require("node:fs");
node_fs = __toESM(node_fs);
let node_path = require("node:path");
node_path = __toESM(node_path);
let node_process = require("node:process");
node_process = __toESM(node_process);
let find_up = require("find-up");
find_up = __toESM(find_up);
let parse_gitignore = require("parse-gitignore");
parse_gitignore = __toESM(parse_gitignore);
let __w5s_prettier_config = require("@w5s/prettier-config");
__w5s_prettier_config = __toESM(__w5s_prettier_config);
let eslint_plugin_import = require("eslint-plugin-import");
eslint_plugin_import = __toESM(eslint_plugin_import);

//#region ../../node_modules/@eslint/js/package.json
var require_package = /* @__PURE__ */ __commonJS({ "../../node_modules/@eslint/js/package.json": ((exports, module) => {
	module.exports = {
		"name": "@eslint/js",
		"version": "9.38.0",
		"description": "ESLint JavaScript language implementation",
		"funding": "https://eslint.org/donate",
		"main": "./src/index.js",
		"types": "./types/index.d.ts",
		"scripts": { "test:types": "tsc -p tests/types/tsconfig.json" },
		"files": [
			"LICENSE",
			"README.md",
			"src",
			"types"
		],
		"publishConfig": { "access": "public" },
		"repository": {
			"type": "git",
			"url": "https://github.com/eslint/eslint.git",
			"directory": "packages/js"
		},
		"homepage": "https://eslint.org",
		"bugs": "https://github.com/eslint/eslint/issues/",
		"keywords": [
			"javascript",
			"eslint-plugin",
			"eslint"
		],
		"license": "MIT",
		"engines": { "node": "^18.18.0 || ^20.9.0 || >=21.1.0" }
	};
}) });

//#endregion
//#region ../../node_modules/@eslint/js/src/configs/eslint-all.js
var require_eslint_all = /* @__PURE__ */ __commonJS({ "../../node_modules/@eslint/js/src/configs/eslint-all.js": ((exports, module) => {
	module.exports = Object.freeze({ rules: Object.freeze({
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"arrow-body-style": "error",
		"block-scoped-var": "error",
		"camelcase": "error",
		"capitalized-comments": "error",
		"class-methods-use-this": "error",
		"complexity": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"constructor-super": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"for-direction": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": "error",
		"getter-return": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		"id-denylist": "error",
		"id-length": "error",
		"id-match": "error",
		"init-declarations": "error",
		"logical-assignment-operators": "error",
		"max-classes-per-file": "error",
		"max-depth": "error",
		"max-lines": "error",
		"max-lines-per-function": "error",
		"max-nested-callbacks": "error",
		"max-params": "error",
		"max-statements": "error",
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-inline-comments": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "error",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-native-nonconstructor": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-object-constructor": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": "error",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-exports": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-setter-return": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-ternary": "error",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"no-unassigned-vars": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-underscore-dangle": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "error",
		"no-useless-assignment": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"object-shorthand": "error",
		"one-var": "error",
		"operator-assignment": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"preserve-caught-error": "error",
		"radix": "error",
		"require-atomic-updates": "error",
		"require-await": "error",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"sort-imports": "error",
		"sort-keys": "error",
		"sort-vars": "error",
		"strict": "error",
		"symbol-description": "error",
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"vars-on-top": "error",
		"yoda": "error"
	}) });
}) });

//#endregion
//#region ../../node_modules/@eslint/js/src/configs/eslint-recommended.js
var require_eslint_recommended = /* @__PURE__ */ __commonJS({ "../../node_modules/@eslint/js/src/configs/eslint-recommended.js": ((exports, module) => {
	module.exports = Object.freeze({ rules: Object.freeze({
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-import-assign": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-native-nonconstructor": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-self-assign": "error",
		"no-setter-return": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-useless-backreference": "error",
		"no-useless-catch": "error",
		"no-useless-escape": "error",
		"no-with": "error",
		"require-yield": "error",
		"use-isnan": "error",
		"valid-typeof": "error"
	}) });
}) });

//#endregion
//#region ../../node_modules/@eslint/js/src/index.js
var require_src = /* @__PURE__ */ __commonJS({ "../../node_modules/@eslint/js/src/index.js": ((exports, module) => {
	const { name, version } = require_package();
	module.exports = {
		meta: {
			name,
			version
		},
		configs: {
			all: require_eslint_all(),
			recommended: require_eslint_recommended()
		}
	};
}) });

//#endregion
//#region src/config/createRules.ts
var import_src = /* @__PURE__ */ __toESM(require_src(), 1);
function createRules(prefix) {
	return __w5s_dev.ESLintConfig.renameRules({ "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] }, { "": prefix });
}

//#endregion
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
//#region src/config/es.ts
const defaultFiles$4 = [`**/${__w5s_dev.Project.extensionsToGlob(__w5s_dev.Project.queryExtensions(["javascript", "javascriptreact"]))}`];
async function es(options) {
	const { rules = {} } = options;
	return [{
		name: "w5s/es/setup",
		languageOptions: {
			ecmaVersion: __w5s_dev.Project.ecmaVersion(),
			globals: {
				...globals.default.browser,
				...globals.default[`es${__w5s_dev.Project.ecmaVersion()}`],
				...globals.default.node,
				__DEV__: "readonly",
				__PROD__: "readonly",
				__TEST__: "readonly",
				document: "readonly",
				navigator: "readonly",
				window: "readonly"
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: __w5s_dev.Project.ecmaVersion(),
				sourceType: "module"
			},
			sourceType: "module"
		},
		linterOptions: { reportUnusedDisableDirectives: true }
	}, {
		name: "w5s/es/rules",
		files: defaultFiles$4,
		rules: {
			...import_src.default.configs.recommended.rules,
			...createRules(""),
			...esRules(),
			...rules
		}
	}];
}

//#endregion
//#region src/config/ignores.ts
const getGitignore = async (cwd, prefix = "") => {
	const gitIgnoreFile = await (0, find_up.findUp)(node_path.default.join(prefix, ".gitignore"), { cwd });
	if (gitIgnoreFile != null) {
		const { patterns } = parse_gitignore.default.parse(await node_fs.default.promises.readFile(gitIgnoreFile));
		return patterns.map((pattern) => node_path.default.join(prefix, pattern));
	}
	return [];
};
async function ignores(options = {}) {
	const cwd = node_process.default.cwd();
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
	indent: __w5s_prettier_config.default.tabWidth ?? 2,
	quotes: __w5s_prettier_config.default.singleQuote ? "single" : "double",
	jsx: true,
	semi: __w5s_prettier_config.default.semi ?? true
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
async function jsdoc(options = {}) {
	const [jsdocPlugin] = await Promise.all([(0, __w5s_dev.interopDefault)(import("eslint-plugin-jsdoc"))]);
	const { rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic$1);
	return [{
		name: "w5s/jsdoc/setup",
		plugins: { jsdoc: jsdocPlugin }
	}, {
		name: "w5s/jsdoc/rules",
		rules: {
			...jsdocPlugin.configs["flat/recommended"].rules,
			"jsdoc/no-undefined-types": "off",
			"jsdoc/require-hyphen-before-param-description": ["warn", "always"],
			"jsdoc/require-jsdoc": "off",
			"jsdoc/require-param-description": "off",
			"jsdoc/require-returns": "off",
			"jsdoc/tag-lines": [
				"warn",
				"any",
				{ startLines: 1 }
			],
			"jsdoc/valid-types": "off",
			...stylisticEnabled ? {
				"jsdoc/check-alignment": "warn",
				"jsdoc/multiline-blocks": "warn"
			} : {},
			...rules
		},
		settings: { jsdoc: { mode: "typescript" } }
	}];
}

//#endregion
//#region src/config/jsonc.ts
const defaultFiles$3 = [`**/${__w5s_dev.Project.extensionsToGlob([
	".json",
	".json5",
	".jsonc"
])}`];
async function jsonc(options = {}) {
	const [jsoncPlugin, jsoncParser] = await Promise.all([(0, __w5s_dev.interopDefault)(import("eslint-plugin-jsonc")), (0, __w5s_dev.interopDefault)(import("jsonc-eslint-parser"))]);
	const { files = defaultFiles$3, rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic$1);
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
const importConfig = eslint_plugin_import.default.flatConfigs["recommended"];
async function imports(options = {}) {
	const { rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic$1);
	return [{
		name: "w5s/import/rules",
		plugins: importConfig.plugins ?? {},
		rules: {
			...importConfig?.rules,
			...stylisticEnabled ? {} : {},
			...rules
		}
	}];
}

//#endregion
//#region src/config/node.ts
async function node(options = {}) {
	const [nodePlugin] = await Promise.all([(0, __w5s_dev.interopDefault)(import("eslint-plugin-n"))]);
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
	const [stylisticPlugin] = await Promise.all([(0, __w5s_dev.interopDefault)(import("@stylistic/eslint-plugin"))]);
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
const sourceGlob = __w5s_dev.Project.extensionsToGlob(__w5s_dev.Project.sourceExtensions());
const defaultFiles$2 = [
	`**/__mocks__/**/${sourceGlob}`,
	`**/__tests__/**/${sourceGlob}`,
	`**/?(*.)+(spec|test)${sourceGlob.slice(1)}`
];
async function test(options = {}) {
	const [vitestPlugin] = await Promise.all([(0, __w5s_dev.interopDefault)(import("@vitest/eslint-plugin"))]);
	const { files = defaultFiles$2, rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic$1);
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
//#region src/config/ts.ts
const defaultFiles$1 = [`**/${__w5s_dev.Project.extensionsToGlob(__w5s_dev.Project.queryExtensions(["typescript", "typescriptreact"]))}`];
async function ts(options = {}) {
	const [tsPlugin, tsParser] = await Promise.all([(0, __w5s_dev.interopDefault)(import("@typescript-eslint/eslint-plugin")), (0, __w5s_dev.interopDefault)(import("@typescript-eslint/parser"))]);
	const tsRecommendedRules = tsPlugin.configs["eslint-recommended"].overrides[0].rules;
	const tsStrictRules = tsPlugin.configs["strict"].rules;
	const tsTypeCheckedRules = tsPlugin.configs["recommended-type-checked-only"].rules;
	const { files = defaultFiles$1, rules = {}, stylistic: stylistic$1 = true, typeChecked = false } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic$1);
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
				...__w5s_dev.ESLintConfig.renameRules(tsRecommendedRules, { "@typescript-eslint": "ts" }),
				...__w5s_dev.ESLintConfig.renameRules(tsStrictRules, { "@typescript-eslint": "ts" }),
				"ts/ban-ts-comment": ["warn", {
					"minimumDescriptionLength": 3,
					"ts-check": false,
					"ts-expect-error": "allow-with-description",
					"ts-ignore": "allow-with-description",
					"ts-nocheck": true
				}],
				"ts/no-empty-object-type": "off",
				"ts/no-explicit-any": "off",
				"ts/no-namespace": "off",
				...createRules("ts/"),
				...stylisticEnabled ? {} : {},
				...rules
			}
		},
		...typeChecked ? [{
			files: defaultFiles$1,
			name: "w5s/ts/rules-type-checked",
			rules: { ...__w5s_dev.ESLintConfig.renameRules(tsTypeCheckedRules, { "@typescript-eslint": "ts" }) }
		}] : []
	];
}

//#endregion
//#region src/config/unicorn.ts
async function unicorn(options = {}) {
	const [unicornPlugin] = await Promise.all([(0, __w5s_dev.interopDefault)(import("eslint-plugin-unicorn"))]);
	const { rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic$1);
	return [
		{
			name: "w5s/unicorn/setup",
			plugins: { unicorn: unicornPlugin }
		},
		{
			name: "w5s/unicorn/rules",
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
const defaultFiles = [`**/${__w5s_dev.Project.extensionsToGlob(__w5s_dev.Project.queryExtensions(["yaml"]))}`];
async function yml(options = {}) {
	const [ymlPlugin, ymlParser] = await Promise.all([(0, __w5s_dev.interopDefault)(import("eslint-plugin-yml")), (0, __w5s_dev.interopDefault)(import("yaml-eslint-parser"))]);
	const { files = defaultFiles, rules = {}, stylistic: stylistic$1 = true } = options;
	const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic$1);
	return [{
		name: "w5s/yml/setup",
		plugins: { yml: ymlPlugin }
	}, {
		files,
		languageOptions: { parser: ymlParser },
		name: "w5s/yml/rules",
		rules: {
			...ymlPlugin.configs["flat/recommended"][0].rules,
			...ymlPlugin.configs["flat/recommended"][1].rules,
			...ymlPlugin.configs["flat/recommended"][2].rules,
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
	const withDefaultStylistic = (options$1) => ({
		stylistic: stylisticOptions,
		...options$1
	});
	const toOption = (optionsOrBoolean) => withDefaultStylistic(typeof optionsOrBoolean === "boolean" ? { enabled: optionsOrBoolean } : {
		enabled: true,
		...optionsOrBoolean
	});
	const esOptions = toOption(options.es);
	const importOptions = toOption(options.import);
	const jsdocOptions = toOption(options.jsdoc);
	const jsoncOptions = toOption(options.jsonc);
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
	if (nodeOptions.enabled) append(node(nodeOptions));
	if (tsOptions.enabled) append(ts(tsOptions));
	if (ymlOptions.enabled) append(yml(ymlOptions));
	if (unicornOptions.enabled) append(unicorn(unicornOptions));
	return (await Promise.all(returnValue)).reduce((acc, curr) => [...acc, ...curr], []);
}

//#endregion
exports.StylisticConfig = StylisticConfig;
exports.default = defineConfig;
exports.defineConfig = defineConfig;
exports.es = es;
exports.ignores = ignores;
exports.imports = imports;
exports.jsdoc = jsdoc;
exports.jsonc = jsonc;
exports.node = node;
exports.stylistic = stylistic;
exports.test = test;
exports.ts = ts;
exports.unicorn = unicorn;
exports.yml = yml;
//# sourceMappingURL=index.cjs.map