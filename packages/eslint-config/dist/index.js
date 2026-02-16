import globals from 'globals';
import { Project, interopDefault, ESLintConfig } from '@w5s/dev';
import fs from 'fs';
import nodePath from 'path';
import process from 'process';
import { findUp } from 'find-up';
import parseGitignore from 'parse-gitignore';
import prettierConfig from '@w5s/prettier-config';
import importPlugin from 'eslint-plugin-import';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../node_modules/@eslint/js/package.json
var require_package = __commonJS({
  "../../node_modules/@eslint/js/package.json"(exports$1, module) {
    module.exports = {
      name: "@eslint/js",
      version: "9.39.2",
      description: "ESLint JavaScript language implementation",
      funding: "https://eslint.org/donate",
      main: "./src/index.js",
      types: "./types/index.d.ts",
      scripts: {
        "test:types": "tsc -p tests/types/tsconfig.json"
      },
      files: [
        "LICENSE",
        "README.md",
        "src",
        "types"
      ],
      publishConfig: {
        access: "public"
      },
      repository: {
        type: "git",
        url: "https://github.com/eslint/eslint.git",
        directory: "packages/js"
      },
      homepage: "https://eslint.org",
      bugs: "https://github.com/eslint/eslint/issues/",
      keywords: [
        "javascript",
        "eslint-plugin",
        "eslint"
      ],
      license: "MIT",
      engines: {
        node: "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    };
  }
});

// ../../node_modules/@eslint/js/src/configs/eslint-all.js
var require_eslint_all = __commonJS({
  "../../node_modules/@eslint/js/src/configs/eslint-all.js"(exports$1, module) {
    module.exports = Object.freeze({
      rules: Object.freeze({
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
      })
    });
  }
});

// ../../node_modules/@eslint/js/src/configs/eslint-recommended.js
var require_eslint_recommended = __commonJS({
  "../../node_modules/@eslint/js/src/configs/eslint-recommended.js"(exports$1, module) {
    module.exports = Object.freeze({
      rules: Object.freeze({
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
      })
    });
  }
});

// ../../node_modules/@eslint/js/src/index.js
var require_src = __commonJS({
  "../../node_modules/@eslint/js/src/index.js"(exports$1, module) {
    var { name, version } = require_package();
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
  }
});

// src/config/es.ts
var import_js = __toESM(require_src());

// src/rules/esRules/bestPractices.ts
var bestPractices = () => ({
  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  "accessor-pairs": "off",
  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  "array-callback-return": ["error", { allowImplicit: true }],
  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  "block-scoped-var": "error",
  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  "complexity": ["off", 20],
  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  "class-methods-use-this": ["error", {
    exceptMethods: []
  }],
  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  "consistent-return": "error",
  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  "curly": ["error", "multi-line"],
  // multiline
  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  "default-case": ["error", { commentPattern: "^no default$" }],
  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  "default-case-last": "error",
  // https://eslint.org/docs/rules/default-param-last
  "default-param-last": "error",
  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  "dot-notation": ["error", { allowKeywords: true }],
  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  "dot-location": ["error", "property"],
  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  "eqeqeq": ["error", "always", { null: "ignore" }],
  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  "grouped-accessor-pairs": "error",
  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  "guard-for-in": "error",
  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  "max-classes-per-file": ["error", 1],
  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  // TODO: enable, semver-major
  "no-alert": "warn",
  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  "no-caller": "error",
  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  "no-case-declarations": "error",
  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  "no-constructor-return": "error",
  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  "no-div-regex": "off",
  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  "no-else-return": ["error", { allowElseIf: false }],
  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  "no-empty-function": ["error", {
    allow: [
      "arrowFunctions",
      "functions",
      "methods"
    ]
  }],
  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  "no-empty-pattern": "error",
  // Disallow empty static blocks
  // https://eslint.org/docs/latest/rules/no-empty-static-block
  // TODO: semver-major, enable
  "no-empty-static-block": "off",
  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  "no-eq-null": "off",
  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  "no-eval": "error",
  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  "no-extend-native": "error",
  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  "no-extra-bind": "error",
  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  "no-extra-label": "error",
  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  "no-fallthrough": "error",
  // disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  "no-floating-decimal": "error",
  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  "no-global-assign": ["error", { exceptions: [] }],
  // deprecated in favor of no-global-assign
  // https://eslint.org/docs/rules/no-native-reassign
  "no-native-reassign": "off",
  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  "no-implicit-coercion": ["off", {
    boolean: false,
    number: true,
    string: true,
    allow: []
  }],
  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  "no-implicit-globals": "off",
  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",
  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  "no-invalid-this": "off",
  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",
  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",
  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",
  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": ["off", {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false
  }],
  // disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  "no-multi-spaces": ["error", {
    ignoreEOLComments: false
  }],
  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  "no-multi-str": "error",
  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  "no-new": "error",
  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  "no-new-func": "error",
  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  "no-new-wrappers": "error",
  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  "no-nonoctal-decimal-escape": "error",
  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  // TODO: enable, semver-major
  "no-object-constructor": "off",
  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  "no-octal": "error",
  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  // https://eslint.org/docs/rules/no-octal-escape
  "no-octal-escape": "error",
  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  "no-param-reassign": ["error", {
    props: true,
    ignorePropertyModificationsFor: [
      "acc",
      // for reduce accumulators
      "accumulator",
      // for reduce accumulators
      "e",
      // for e.returnvalue
      "ctx",
      // for Koa routing
      "context",
      // for Koa routing
      "req",
      // for Express requests
      "request",
      // for Express requests
      "res",
      // for Express responses
      "response",
      // for Express responses
      "$scope",
      // for Angular 1 scopes
      "staticContext"
      // for ReactRouter context
    ]
  }],
  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  "no-proto": "error",
  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  "no-redeclare": "error",
  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  "no-restricted-properties": ["error", {
    object: "arguments",
    property: "callee",
    message: "arguments.callee is deprecated"
  }, {
    object: "global",
    property: "isFinite",
    message: "Please use Number.isFinite instead"
  }, {
    object: "self",
    property: "isFinite",
    message: "Please use Number.isFinite instead"
  }, {
    object: "window",
    property: "isFinite",
    message: "Please use Number.isFinite instead"
  }, {
    object: "global",
    property: "isNaN",
    message: "Please use Number.isNaN instead"
  }, {
    object: "self",
    property: "isNaN",
    message: "Please use Number.isNaN instead"
  }, {
    object: "window",
    property: "isNaN",
    message: "Please use Number.isNaN instead"
  }, {
    property: "__defineGetter__",
    message: "Please use Object.defineProperty instead."
  }, {
    property: "__defineSetter__",
    message: "Please use Object.defineProperty instead."
  }, {
    object: "Math",
    property: "pow",
    message: "Use the exponentiation operator (**) instead."
  }],
  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],
  // disallow redundant `return await`
  // https://eslint.org/docs/rules/no-return-await
  "no-return-await": "error",
  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",
  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  "no-self-assign": ["error", {
    props: true
  }],
  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  "no-self-compare": "error",
  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  "no-sequences": "error",
  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  "no-throw-literal": "error",
  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  "no-unmodified-loop-condition": "off",
  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  "no-unused-expressions": ["error", {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false
  }],
  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  "no-unused-labels": "error",
  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  "no-useless-call": "off",
  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  "no-useless-catch": "error",
  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  "no-useless-concat": "error",
  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  "no-useless-escape": "error",
  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",
  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  "no-void": "error",
  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  "no-warning-comments": ["off", { terms: ["todo", "fixme", "xxx"], location: "start" }],
  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  "no-with": "error",
  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  "prefer-named-capture-group": "off",
  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  // https://eslint.org/docs/rules/prefer-object-has-own
  // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
  "prefer-object-has-own": "off",
  // https://eslint.org/docs/rules/prefer-regex-literals
  "prefer-regex-literals": ["error", {
    disallowRedundantWrapping: true
  }],
  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  "radix": "error",
  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  "require-await": "off",
  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  "require-unicode-regexp": "off",
  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  "vars-on-top": "error",
  // require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  "yoda": "error"
});

// src/rules/esRules/errors.ts
var errors = () => ({
  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  "for-direction": "error",
  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  "getter-return": ["error", { allowImplicit: true }],
  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  "no-async-promise-executor": "error",
  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",
  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  "no-compare-neg-zero": "error",
  // disallow assignment in conditional expressions
  "no-cond-assign": ["error", "always"],
  // disallow use of console
  "no-console": "warn",
  // Disallows expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  // TODO: semver-major, enable
  "no-constant-binary-expression": "off",
  // disallow use of constant expressions in conditions
  "no-constant-condition": "warn",
  // disallow control characters in regular expressions
  "no-control-regex": "error",
  // disallow use of debugger
  "no-debugger": "error",
  // disallow duplicate arguments in functions
  "no-dupe-args": "error",
  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  "no-dupe-else-if": "error",
  // disallow duplicate keys when creating object literals
  "no-dupe-keys": "error",
  // disallow a duplicate case label.
  "no-duplicate-case": "error",
  // disallow empty statements
  "no-empty": "error",
  // disallow the use of empty character classes in regular expressions
  "no-empty-character-class": "error",
  // disallow assigning to the exception in a catch block
  "no-ex-assign": "error",
  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  "no-extra-boolean-cast": "error",
  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  "no-extra-parens": ["off", "all", {
    conditionalAssign: true,
    nestedBinaryExpressions: false,
    returnAssign: false,
    ignoreJSX: "all",
    // delegate to eslint-plugin-react
    enforceForArrowConditionals: false
  }],
  // disallow unnecessary semicolons
  "no-extra-semi": "error",
  // disallow overwriting functions written as function declarations
  "no-func-assign": "error",
  // https://eslint.org/docs/rules/no-import-assign
  "no-import-assign": "error",
  // disallow function or variable declarations in nested blocks
  "no-inner-declarations": "error",
  // disallow invalid regular expression strings in the RegExp constructor
  "no-invalid-regexp": "error",
  // disallow irregular whitespace outside of strings and comments
  "no-irregular-whitespace": "error",
  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  "no-loss-of-precision": "error",
  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  "no-misleading-character-class": "error",
  // disallow the use of object properties of the global object (Math and JSON) as functions
  "no-obj-calls": "error",
  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  // TODO: semver-major, enable
  "no-new-native-nonconstructor": "off",
  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",
  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  "no-prototype-builtins": "error",
  // disallow multiple spaces in a regular expression literal
  "no-regex-spaces": "error",
  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  "no-setter-return": "error",
  // disallow sparse arrays
  "no-sparse-arrays": "error",
  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",
  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  "no-unexpected-multiline": "error",
  // disallow unreachable statements after a return, throw, continue, or break statement
  "no-unreachable": "error",
  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": ["error", {
    ignore: []
    // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
  }],
  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  "no-unsafe-finally": "error",
  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  "no-unsafe-negation": "error",
  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  // TODO: enable once eslint 7 is dropped (which is semver-major)
  "no-unused-private-class-members": "off",
  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  "no-useless-backreference": "error",
  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  "no-negated-in-lhs": "off",
  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  "require-atomic-updates": "off",
  // disallow comparisons with the value NaN
  "use-isnan": "error",
  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  "valid-jsdoc": "off",
  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  "valid-typeof": ["error", { requireStringLiterals: true }]
});

// src/rules/esRules/es6.ts
var es6 = () => ({
  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  // TODO: enable requireReturnForObjectLiteral?
  "arrow-body-style": ["error", "as-needed", {
    requireReturnForObjectLiteral: false
  }],
  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  "arrow-parens": ["error", "always"],
  // require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  "arrow-spacing": ["error", { before: true, after: true }],
  // verify super() callings in constructors
  "constructor-super": "error",
  // enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  "generator-star-spacing": ["error", { before: false, after: true }],
  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  "no-class-assign": "error",
  // disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  "no-confusing-arrow": ["error", {
    allowParens: true
  }],
  // disallow modifying variables that are declared using const
  "no-const-assign": "error",
  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  "no-dupe-class-members": "error",
  // disallow importing from the same path more than once
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  "no-duplicate-imports": "off",
  // disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  "no-new-symbol": "error",
  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  "no-restricted-exports": ["error", {
    restrictedNamedExports: [
      "default",
      // use `export default` to provide a default export
      "then"
      // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
    ]
  }],
  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": ["off", {
    paths: [],
    patterns: []
  }],
  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  "no-this-before-super": "error",
  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  "no-useless-computed-key": "error",
  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  "no-useless-constructor": "error",
  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  "no-useless-rename": ["error", {
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false
  }],
  // require let or const instead of var
  "no-var": "error",
  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  "object-shorthand": ["error", "always", {
    ignoreConstructors: false,
    avoidQuotes: true
  }],
  // suggest using arrow functions as callbacks
  "prefer-arrow-callback": ["error", {
    allowNamedFunctions: false,
    allowUnboundThis: true
  }],
  // suggest using of const declaration for variables that are never modified after declared
  "prefer-const": ["error", {
    destructuring: "any",
    ignoreReadBeforeAssign: true
  }],
  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  "prefer-destructuring": ["error", {
    VariableDeclarator: {
      array: false,
      object: true
    },
    AssignmentExpression: {
      array: true,
      object: false
    }
  }, {
    enforceForRenamedProperties: false
  }],
  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  "prefer-numeric-literals": "error",
  // suggest using Reflect methods where applicable
  // https://eslint.org/docs/rules/prefer-reflect
  "prefer-reflect": "off",
  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  "prefer-rest-params": "error",
  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  "prefer-spread": "error",
  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  "prefer-template": "error",
  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  "require-yield": "error",
  // enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  "rest-spread-spacing": ["error", "never"],
  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  "sort-imports": ["off", {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
  }],
  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  "symbol-description": "error",
  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  "template-curly-spacing": "error",
  // enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  "yield-star-spacing": ["error", "after"]
});

// src/rules/esRules/overrides.ts
var overrides = () => ({
  // Too many errors in components
  "class-methods-use-this": "off",
  // Annoying because it is not always wanted
  "default-case": "off",
  // We do not want console.* in production. Disable this rule on a per line basis if needed
  "no-console": "error",
  // Often useful in jsx
  "no-nested-ternary": "off",
  // Too strict, for pure code prefer the functional plugin
  "no-param-reassign": ["error", { props: false }],
  // Allow for-of syntax
  // 'no-restricted-syntax': baseConfig.rules['no-restricted-syntax'].filter(
  //   // @ts-ignore No typing available
  //   ({ selector }) => selector !== 'ForOfStatement',
  // ),
  // underscore is often used (mongodb, etc)
  "no-underscore-dangle": "off",
  // Ignore underscore case arguments
  "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  // Allow in some cases https://github.com/airbnb/javascript/issues/1089#issuecomment-1024351821
  "no-use-before-define": ["error", "nofunc"],
  // Allow statements, to be compatible with '@typescript-eslint/no-floating-promises' fix
  "no-void": ["error", { allowAsStatement: true }],
  "unicode-bom": ["error", "never"]
});

// src/rules/esRules/strict.ts
var strict = () => ({
  // babel inserts `'use strict';` for us
  strict: ["error", "never"]
});

// src/rules/esRules/variables.ts
var variables = () => ({
  // enforce or disallow variable initializations at definition
  "init-declarations": "off",
  // disallow the catch clause parameter name being the same as a variable in the outer scope
  "no-catch-shadow": "off",
  // disallow deletion of variables
  "no-delete-var": "error",
  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",
  // disallow specific globals
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
    // ...confusingBrowserGlobals.map((g) => ({
    //   name: g,
    //   message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
    // })),
  ],
  // disallow declaration of variables already declared in the outer scope
  "no-shadow": "error",
  // disallow shadowing of names such as arguments
  "no-shadow-restricted-names": "error",
  // disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": "error",
  // disallow use of undefined when initializing variables
  "no-undef-init": "error",
  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  // TODO: enable?
  "no-undefined": "off",
  // disallow declaration of variables that are not used in the code
  "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
  // disallow use of variables before they are defined
  "no-use-before-define": ["error", { functions: true, classes: true, variables: true }]
});

// src/rules/esRules.ts
var esRules = () => ({
  ...bestPractices(),
  ...errors(),
  ...es6(),
  ...strict(),
  ...variables(),
  // Must be last
  ...overrides()
});

// src/config/es.ts
var defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(["javascript", "javascriptreact"]))}`];
async function es(options) {
  const { rules = {} } = options;
  return [
    {
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
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: Project.ecmaVersion(),
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      }
    },
    {
      name: "w5s/es/rules",
      files: defaultFiles,
      rules: {
        ...import_js.default.configs.recommended.rules,
        ...esRules(),
        ...rules
      }
    }
  ];
}
var getGitignore = async (cwd, prefix = "") => {
  const gitIgnoreFile = await findUp(nodePath.join(prefix, ".gitignore"), { cwd });
  if (gitIgnoreFile != null) {
    const { patterns } = parseGitignore.parse(await fs.promises.readFile(gitIgnoreFile));
    const returnValue = patterns.map((pattern) => nodePath.join(prefix, pattern));
    return returnValue;
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
  return [
    {
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
        // esbuild/vite temporary files
        ".modules/",
        ".go/",
        ".pnpm-store/",
        // '!.*',
        // '.venv/',
        // 'deprecated/',
        // 'test-output/',
        // 'venv/',
        // '_generated_/',
        ...ignoreRoot,
        ...ignoreAndroid,
        ...ignoreIOS,
        ...options.ignores ?? []
      ],
      name: "w5s/ignore"
    }
  ];
}
var defaultConfig = {
  enabled: true,
  indent: prettierConfig.tabWidth ?? 2,
  quotes: prettierConfig.singleQuote ? "single" : "double",
  jsx: true,
  semi: prettierConfig.semi ?? true
};
var StylisticConfig = {
  /**
   * Default config
   */
  default: defaultConfig,
  /**
   * Return a new StylisticConfig from input
   *
   * @param input
   */
  from(input) {
    return typeof input === "boolean" ? { ...defaultConfig, enabled: input } : { ...defaultConfig, ...input };
  }
};

// src/config/jsdoc.ts
async function jsdoc(options = {}) {
  const [jsdocPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-jsdoc'))
  ]);
  const { rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/jsdoc/setup",
      plugins: {
        jsdoc: jsdocPlugin
      }
    },
    {
      name: "w5s/jsdoc/rules",
      rules: {
        ...jsdocPlugin.configs["flat/recommended"].rules,
        "jsdoc/no-undefined-types": "off",
        // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
        "jsdoc/require-hyphen-before-param-description": ["warn", "always"],
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-returns": "off",
        "jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
        "jsdoc/valid-types": "off",
        // FIXME: reports lots of false positive
        // 'strict': ['error', 'safe'],
        ...stylisticEnabled ? {
          // ...(jsdocPlugin.configs['flat/stylistic'].rules),
          "jsdoc/check-alignment": "warn",
          "jsdoc/multiline-blocks": "warn"
        } : {},
        ...rules
      },
      settings: {
        jsdoc: {
          mode: "typescript"
        }
      }
    }
  ];
}
var defaultFiles2 = [`**/${Project.extensionsToGlob([".json", ".json5", ".jsonc"])}`];
async function jsonc(options = {}) {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser'))
  ]);
  const { files = defaultFiles2, rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/jsonc/setup",
      plugins: {
        jsonc: jsoncPlugin
      }
    },
    {
      files,
      languageOptions: {
        parser: jsoncParser
      },
      name: "w5s/jsonc/rules",
      rules: {
        ...jsoncPlugin.configs["flat/recommended-with-json"][0]?.rules,
        ...stylisticEnabled ? {
          "jsonc/array-bracket-spacing": ["error", "never"],
          "jsonc/comma-dangle": ["error", "never"],
          "jsonc/comma-style": ["error", "last"],
          "jsonc/indent": ["error", indent],
          "jsonc/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true }],
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
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          order: ["$schema", "display", "extends", "compilerOptions", "include", "exclude", "files", "references"],
          pathPattern: "^$"
        },
        {
          order: { type: "asc" },
          pathPattern: ".*"
        }
      ]
    }
  };
}
function sortPackageJson() {
  return {
    files: ["package.json"],
    rules: {
      "jsonc/sort-keys": [
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
            // Key order (per item): name, email, url
            "contributors",
            // Key order (per item): name, email, url
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
            // Key order: lib, bin, man, doc, example, test
            "files",
            // Unique items
            "workspaces",
            "binary",
            // Key order: module_name, module_path, remote_path, package_name, host
            "scripts",
            // Script sort
            "betterScripts",
            // Script sort
            "contributes",
            "activationEvents",
            // Unique items
            "husky",
            // Sorts the hooks field using git hook sort
            "simple-git-hooks",
            // Key sort using git hook sort
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
            // Prettier sort
            "eslintConfig",
            // ESLint sort
            "eslintIgnore",
            "npmpackagejsonlint",
            // Key sort (also recognizes: npmPackageJsonLintConfig, npmpkgjsonlint)
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
            // Key sort (deep)
            "peerDependencies",
            "peerDependenciesMeta",
            // Key sort (deep)
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
            // Key order: node, npm, yarn
            "languageName",
            "os",
            "cpu",
            "preferGlobal",
            "publishConfig",
            "icon",
            "badges",
            // Key order (per item): description, url, href
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
        ...["repository", "funding", "license", "author"].map((key) => ({
          order: ["type", "name", "email", "url"],
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
          order: ["types", "require", "import"],
          pathPattern: "^exports.*$"
        }
      ]
    }
  };
}
var importConfig = importPlugin.flatConfigs["recommended"];
async function imports(options = {}) {
  const { rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/import/rules",
      plugins: importConfig.plugins ?? {},
      rules: {
        ...importConfig?.rules,
        ...stylisticEnabled ? {
          // Stylistic rules
        } : {},
        ...rules
      }
    }
  ];
}
async function node(options = {}) {
  const [nodePlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-n'))
  ]);
  const { rules = {} } = options;
  return [
    {
      name: "w5s/node/setup",
      plugins: {
        node: nodePlugin
      }
    },
    {
      name: "w5s/node/rules",
      rules: {
        // 'node/handle-callback-err': ['error', '^(err|error|_error)$'],
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-sync": "error",
        "node/prefer-global/buffer": ["error", "never"],
        "node/prefer-global/console": ["error", "always"],
        // 'node/prefer-global/process': ['error', 'never'],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/process-exit-as-throw": "error",
        ...rules
      }
    }
  ];
}
async function stylistic(options = {}) {
  const [stylisticPlugin] = await Promise.all([
    interopDefault(import('@stylistic/eslint-plugin'))
  ]);
  const { rules = {} } = options;
  const { enabled: stylisticEnabled, indent, jsx, quotes, semi } = StylisticConfig.from(options);
  const config = stylisticEnabled ? stylisticPlugin.configs.customize({
    indent,
    jsx,
    pluginName: "style",
    quotes,
    semi
  }) : { rules: {} };
  return [
    {
      name: "w5s/style/setup",
      plugins: {
        style: stylisticPlugin
      }
    },
    {
      name: "w5s/style/rules",
      rules: {
        ...stylisticEnabled ? {
          ...config.rules,
          "style/arrow-parens": ["error", "always"],
          "style/brace-style": ["error", "1tbs"],
          "style/operator-linebreak": ["error", "after", { overrides: { ":": "before", "?": "before", "|>": "before", "|": "before" } }],
          "style/quotes": ["error", quotes ?? StylisticConfig.default.quotes, { avoidEscape: true, allowTemplateLiterals: "always" }]
        } : {},
        ...rules
      }
    }
  ];
}
var sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
var defaultFiles3 = [
  `**/__mocks__/**/${sourceGlob}`,
  `**/__tests__/**/${sourceGlob}`,
  `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`
];
async function test(options = {}) {
  const [vitestPlugin] = await Promise.all([
    interopDefault(import('@vitest/eslint-plugin'))
  ]);
  const { files = defaultFiles3, rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/test/setup",
      plugins: {
        test: vitestPlugin
      }
    },
    {
      files,
      name: "w5s/test/rules",
      rules: {
        ...vitestPlugin.configs.recommended.rules,
        ...stylisticEnabled ? {} : {},
        ...rules
      }
    }
  ];
}
var tsRules = () => {
  const baseRules = esRules();
  return ESLintConfig.renameRules(
    {
      // '@typescript-eslint/comma-dangle': [
      //   baseRules['comma-dangle'][0],
      //   {
      //     ...baseRules['comma-dangle'][1],
      //     enums: baseRules['comma-dangle'][1].arrays,
      //     generics: baseRules['comma-dangle'][1].arrays,
      //     tuples: baseRules['comma-dangle'][1].arrays,
      //   },
      // ],
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "minimumDescriptionLength": 3,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true
        }
      ],
      // '@typescript-eslint/brace-style': baseRules['brace-style'],
      // '@typescript-eslint/comma-dangle': [
      //   baseRules['comma-dangle'][0],
      //   {
      //     ...baseRules['comma-dangle'][1],
      //     enums: baseRules['comma-dangle'][1].arrays,
      //     generics: baseRules['comma-dangle'][1].arrays,
      //     tuples: baseRules['comma-dangle'][1].arrays,
      //   },
      // ],
      // '@typescript-eslint/comma-spacing': baseRules['comma-spacing'],
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "as", objectLiteralTypeAssertions: "never" }
      ],
      "@typescript-eslint/default-param-last": baseRules["default-param-last"],
      // '@typescript-eslint/dot-notation': baseRules['dot-notation'], // TODO: Stylistic typechecked
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // '@typescript-eslint/func-call-spacing': baseRules['func-call-spacing'],
      // '@typescript-eslint/indent': baseRules.indent,
      // '@typescript-eslint/keyword-spacing': baseRules['keyword-spacing'],
      // '@typescript-eslint/lines-between-class-members': baseRules['lines-between-class-members'],
      // '@typescript-eslint/member-delimiter-style': 'error', // TODO: @stylistic/member-delimiter-style
      "@typescript-eslint/naming-convention": [
        "error",
        // {
        //   format: ['PascalCase', 'camelCase'],
        //   leadingUnderscore: 'allow',
        //   selector: 'default',
        //   trailingUnderscore: 'allow',
        // },
        {
          format: ["PascalCase", "camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          selector: "variable",
          trailingUnderscore: "allow"
        },
        // {
        //   format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
        //   leadingUnderscore: 'allowSingleOrDouble',
        //   selector: 'memberLike',
        //   trailingUnderscore: 'allowDouble',
        // },
        {
          format: ["PascalCase"],
          selector: "typeLike"
        }
      ],
      // '@typescript-eslint/no-array-constructor': baseRules['no-array-constructor'],
      // '@typescript-eslint/no-base-to-string': 'error', // TODO: require type check
      "@typescript-eslint/no-dupe-class-members": baseRules["no-dupe-class-members"],
      "@typescript-eslint/no-empty-function": baseRules["no-empty-function"],
      "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      // if any is explicit then it's wanted
      "@typescript-eslint/no-extra-parens": baseRules["no-extra-parens"],
      // '@typescript-eslint/no-extra-semi': baseRules['no-extra-semi'], // TODO: @stylistic/no-extra-semi
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-loop-func": baseRules["no-loop-func"],
      "@typescript-eslint/no-loss-of-precision": baseRules["no-loss-of-precision"],
      "@typescript-eslint/no-magic-numbers": baseRules["no-magic-numbers"],
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "off",
      // We don't agree with community, namespaces are great and not deprecated
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-redeclare": ESLintConfig.fixme(baseRules["no-redeclare"]),
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-shadow": baseRules["no-shadow"],
      "@typescript-eslint/no-this-alias": "error",
      // '@typescript-eslint/no-unnecessary-condition': 'error',// TODO: require type check
      // '@typescript-eslint/no-unsafe-argument': 'error', // TODO: recommended type check
      "@typescript-eslint/no-unused-expressions": baseRules["no-unused-expressions"],
      "@typescript-eslint/no-unused-vars": baseRules["no-unused-vars"],
      "@typescript-eslint/no-use-before-define": baseRules["no-use-before-define"],
      "@typescript-eslint/no-useless-constructor": baseRules["no-useless-constructor"],
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      // '@typescript-eslint/object-curly-spacing': baseRules['object-curly-spacing'],
      // '@typescript-eslint/only-throw-error': baseRules['no-throw-literal'], //TODO: Recommended type check
      "@typescript-eslint/prefer-namespace-keyword": "error",
      // '@typescript-eslint/prefer-reduce-type-parameter': 'error', // TODO: strict type check
      // '@typescript-eslint/quotes': baseRules.quotes,
      "@typescript-eslint/require-await": baseRules["require-await"],
      // '@typescript-eslint/return-await': baseRules['no-return-await'], // TODO: strict type check
      // '@typescript-eslint/semi': baseRules.semi,
      // '@typescript-eslint/space-before-function-paren': baseRules['space-before-function-paren'],
      // '@typescript-eslint/space-infix-ops': baseRules['space-infix-ops'],
      // '@typescript-eslint/strict-boolean-expressions': [
      //   'error',
      //   {
      //     allowNullableObject: false,
      //     allowNumber: false,
      //     allowString: false,
      //   },
      // ], //TODO: require typing
      // '@typescript-eslint/switch-exhaustiveness-check': 'error',//TODO: require type check
      "@typescript-eslint/triple-slash-reference": "error"
      // '@typescript-eslint/type-annotation-spacing': 'error',// TODO: @stylistic/type-annotation-spacing
    },
    {
      "@typescript-eslint": "ts"
    }
  );
};

// src/config/ts.ts
var defaultFiles4 = [`**/${Project.extensionsToGlob(Project.queryExtensions(["typescript", "typescriptreact"]))}`];
async function ts(options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser'))
  ]);
  const tsRecommendedRules = tsPlugin.configs["eslint-recommended"].overrides[0].rules;
  const tsStrictRules = tsPlugin.configs["strict"].rules;
  const tsTypeCheckedRules = tsPlugin.configs["recommended-type-checked-only"].rules;
  const { files = defaultFiles4, rules = {}, stylistic: stylistic2 = true, typeChecked = false } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/ts/setup",
      plugins: {
        ts: tsPlugin
      }
    },
    {
      files,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: "module"
          // extraFileExtensions: componentExts.map(ext => `.${ext}`),
          // ...typeAware
          //   ? {
          //       projectService: {
          //         allowDefaultProject: ['./*.js'],
          //         defaultProject: tsconfigPath,
          //       },
          //       tsconfigRootDir: process.cwd(),
          //     }
          //   : {},
          // ...parserOptions as any,
        }
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
    ...typeChecked ? [
      {
        files: defaultFiles4,
        // ignores: ignoresTypeAware,
        name: "w5s/ts/rules-type-checked",
        rules: {
          ...ESLintConfig.renameRules(tsTypeCheckedRules, { "@typescript-eslint": "ts" })
        }
      }
    ] : []
  ];
}
async function unicorn(options = {}) {
  const [unicornPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-unicorn'))
  ]);
  const { rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/unicorn/setup",
      plugins: {
        unicorn: unicornPlugin
      }
    },
    {
      name: "w5s/unicorn/rules",
      rules: {
        ...unicornPlugin.configs.recommended?.rules,
        // Disabled for safety
        "unicorn/consistent-destructuring": "off",
        "unicorn/consistent-function-scoping": "off",
        // Too many false positive
        "unicorn/filename-case": "off",
        "unicorn/import-index": "off",
        // Not playing well with ES Module
        "unicorn/new-for-builtins": "off",
        // error, @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/122
        "unicorn/no-array-callback-reference": "off",
        // Many false positive reported
        "unicorn/no-array-for-each": "off",
        // This rule could change browser compatibility
        "unicorn/no-array-method-this-argument": "off",
        // Many false positive reported
        "unicorn/no-array-reduce": "off",
        // Array#reduce can be used
        "unicorn/no-console-spaces": "off",
        "unicorn/no-fn-reference-in-iterator": "off",
        // error ?
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-null": "off",
        // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/612
        "unicorn/no-object-as-default-parameter": "off",
        "unicorn/no-process-exit": "off",
        "unicorn/no-unreadable-array-destructuring": "off",
        "unicorn/no-unused-properties": "warn",
        "unicorn/no-useless-undefined": "off",
        "unicorn/prefer-add-event-listener": "off",
        "unicorn/prefer-default-parameters": "off",
        "unicorn/prefer-set-has": "off",
        "unicorn/prevent-abbreviations": "off",
        // This rule is so dangerous : it potentially break code while fixing in many cases !!
        "unicorn/throw-new-error": "off",
        // Creating errors with call signature is OK
        ...stylisticEnabled ? {} : {},
        ...rules
      }
    },
    // TODO: move to another file ?
    {
      name: "w5s/unicorn/overrides",
      files: ["**/*.config.cjs", "**/*.config.js"],
      rules: {
        "unicorn/prefer-module": "off"
      }
    }
  ];
}
var defaultFiles5 = [`**/${Project.extensionsToGlob(Project.queryExtensions(["yaml"]))}`];
async function yml(options = {}) {
  const [ymlPlugin, ymlParser] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ]);
  const { files = defaultFiles5, rules = {}, stylistic: stylistic2 = true } = options;
  const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic2);
  return [
    {
      name: "w5s/yml/setup",
      plugins: {
        yml: ymlPlugin
      }
    },
    {
      files,
      languageOptions: {
        parser: ymlParser
      },
      name: "w5s/yml/rules",
      rules: {
        ...ymlPlugin.configs["flat/recommended"][0].rules,
        ...ymlPlugin.configs["flat/recommended"][1].rules,
        ...ymlPlugin.configs["flat/recommended"][2].rules,
        ...stylisticEnabled ? {
          // ...(ymlPlugin.configs['flat/standard'][3]!.rules),
          // 'yml/array-bracket-spacing': ['error', 'never'],
          // 'yml/comma-dangle': ['error', 'never'],
          // 'yml/comma-style': ['error', 'last'],
          // 'yml/object-curly-newline': ['error', { consistent: true, multiline: true }],
          // 'yml/object-curly-spacing': ['error', 'always'],
          // 'yml/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
          // 'yml/quote-props': 'error',
          "style/spaced-comment": "off",
          // Fix
          "yml/block-mapping-question-indicator-newline": "error",
          "yml/block-sequence-hyphen-indicator-newline": "error",
          "yml/flow-mapping-curly-newline": "error",
          "yml/flow-mapping-curly-spacing": "error",
          "yml/flow-sequence-bracket-newline": "error",
          "yml/flow-sequence-bracket-spacing": "error",
          "yml/indent": ["error", indent === "tab" ? 2 : indent],
          "yml/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "yml/no-tab-indent": "error",
          "yml/quotes": ["error", { avoidEscape: true, prefer: quotes === "backtick" ? "single" : quotes }],
          "yml/spaced-comment": "error"
        } : {},
        ...rules
      }
    }
  ];
}

// src/defineConfig.ts
async function defineConfig(options = {}) {
  const stylisticOptions = typeof options.stylistic === "boolean" ? { enabled: options.stylistic } : { enabled: true, ...options.stylistic };
  const withDefaultStylistic = (_options) => ({ stylistic: stylisticOptions, ..._options });
  const toOption = (optionsOrBoolean) => withDefaultStylistic(
    typeof optionsOrBoolean === "boolean" ? { enabled: optionsOrBoolean } : { enabled: true, ...optionsOrBoolean }
  );
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
  if (jsoncOptions.enabled) {
    append(jsonc(jsoncOptions));
  }
  if (jsdocOptions.enabled) {
    append(jsdoc(jsdocOptions));
  }
  if (stylisticOptions.enabled) {
    append(stylistic(stylisticOptions));
  }
  if (importOptions.enabled) {
    append(imports(importOptions));
  }
  if (nodeOptions.enabled) {
    append(node(nodeOptions));
  }
  if (tsOptions.enabled) {
    append(ts(tsOptions));
  }
  if (ymlOptions.enabled) {
    append(yml(ymlOptions));
  }
  if (unicornOptions.enabled) {
    append(unicorn(unicornOptions));
  }
  const nested = await Promise.all(returnValue);
  return nested.reduce((acc, curr) => [...acc, ...curr], []);
}

export { StylisticConfig, defineConfig as default, defineConfig, es, ignores, imports, jsdoc, jsonc, node, stylistic, test, ts, unicorn, yml };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map