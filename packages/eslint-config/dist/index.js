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
  "../../node_modules/@eslint/js/package.json"(exports, module) {
    module.exports = {
      name: "@eslint/js",
      version: "9.38.0",
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
  "../../node_modules/@eslint/js/src/configs/eslint-all.js"(exports, module) {
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
  "../../node_modules/@eslint/js/src/configs/eslint-recommended.js"(exports, module) {
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
  "../../node_modules/@eslint/js/src/index.js"(exports, module) {
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
function createRules(prefix) {
  return ESLintConfig.renameRules({
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
  }, {
    "": prefix
  });
}

// src/config/es.ts
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
      plugins: {},
      rules: {
        ...import_js.default.configs.recommended.rules,
        ...createRules(""),
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
var defaultFiles = [`**/${Project.extensionsToGlob([".json", ".json5", ".jsonc"])}`];
async function jsonc(options = {}) {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser'))
  ]);
  const { files = defaultFiles, rules = {}, stylistic: stylistic2 = true } = options;
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
          "style/quotes": ["error", quotes ?? StylisticConfig.default.quotes, { avoidEscape: true, allowTemplateLiterals: true }]
        } : {},
        ...rules
      }
    }
  ];
}
var sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
var defaultFiles2 = [
  `**/__mocks__/**/${sourceGlob}`,
  `**/__tests__/**/${sourceGlob}`,
  `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`
];
async function test(options = {}) {
  const [vitestPlugin] = await Promise.all([
    interopDefault(import('@vitest/eslint-plugin'))
  ]);
  const { files = defaultFiles2, rules = {}, stylistic: stylistic2 = true } = options;
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
var defaultFiles3 = [`**/${Project.extensionsToGlob(Project.queryExtensions(["typescript", "typescriptreact"]))}`];
async function ts(options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser'))
  ]);
  const tsRecommendedRules = tsPlugin.configs["eslint-recommended"].overrides[0].rules;
  const tsStrictRules = tsPlugin.configs["strict"].rules;
  const tsTypeCheckedRules = tsPlugin.configs["recommended-type-checked-only"].rules;
  const { files = defaultFiles3, rules = {}, stylistic: stylistic2 = true, typeChecked = false } = options;
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
        ...ESLintConfig.renameRules(
          tsRecommendedRules,
          { "@typescript-eslint": "ts" }
        ),
        ...ESLintConfig.renameRules(
          tsStrictRules,
          { "@typescript-eslint": "ts" }
        ),
        "ts/ban-ts-comment": [
          "warn",
          {
            "minimumDescriptionLength": 3,
            "ts-check": false,
            "ts-expect-error": "allow-with-description",
            "ts-ignore": "allow-with-description",
            "ts-nocheck": true
          }
        ],
        "ts/no-empty-object-type": "off",
        "ts/no-explicit-any": "off",
        // if any is explicit then it's wanted
        "ts/no-namespace": "off",
        // We don't agree with community, namespaces are great and not deprecated
        ...createRules("ts/"),
        ...stylisticEnabled ? {} : {},
        ...rules
      }
    },
    ...typeChecked ? [{
      files: defaultFiles3,
      // ignores: ignoresTypeAware,
      name: "w5s/ts/rules-type-checked",
      rules: {
        ...ESLintConfig.renameRules(
          tsTypeCheckedRules,
          { "@typescript-eslint": "ts" }
        )
      }
    }] : []
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
var defaultFiles4 = [`**/${Project.extensionsToGlob(Project.queryExtensions(["yaml"]))}`];
async function yml(options = {}) {
  const [ymlPlugin, ymlParser] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ]);
  const { files = defaultFiles4, rules = {}, stylistic: stylistic2 = true } = options;
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
  const withDefaultStylistic = (options2) => ({ stylistic: stylisticOptions, ...options2 });
  const toOption = (optionsOrBoolean) => withDefaultStylistic(typeof optionsOrBoolean === "boolean" ? { enabled: optionsOrBoolean } : { enabled: true, ...optionsOrBoolean });
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