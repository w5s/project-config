import { Project, interopDefault, ESLintConfig } from '@w5s/dev';
import importPlugin from 'eslint-plugin-import';
import { configs } from 'eslint-plugin-yml';

// src/config/jsonc.ts

// src/type/StylisticConfig.ts
var defaultConfig = {
  enabled: true,
  indent: 2,
  quotes: "single",
  jsx: true,
  semi: true
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

// src/config/jsonc.ts
var defaultFiles = [Project.extensionsToGlob([".json", ".json5", ".jsonc"])];
async function jsonc(options = {}) {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    import('eslint-plugin-jsonc'),
    interopDefault(import('jsonc-eslint-parser'))
  ]);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic);
  return [
    {
      name: "w5s/jsonc/setup",
      plugins: {
        jsonc: await interopDefault(jsoncPlugin)
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
    }
  ];
}
var importConfig = importPlugin.flatConfigs["recommended"];
async function imports(options = {}) {
  const { rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  return [
    {
      name: "w5s/import/rules",
      plugins: importConfig.plugins,
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
    import('eslint-plugin-n')
  ]);
  const { rules = {}, stylistic = true } = options;
  return [
    {
      name: "w5s/node/setup",
      plugins: {
        node: await interopDefault(nodePlugin)
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
        // ...(stylisticEnabled
        //   ? {}
        //   : {}),
        ...rules
      }
    }
  ];
}
var defaultFiles2 = [Project.extensionsToGlob(Project.queryExtensions(["typescript", "typescriptreact"]))];
async function ts(options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    import('@typescript-eslint/eslint-plugin'),
    interopDefault(import('@typescript-eslint/parser'))
  ]);
  const tsRecommendedRules = tsPlugin.configs["eslint-recommended"].overrides[0].rules;
  const tsStrictRules = tsPlugin.configs["strict"].rules;
  const { files = defaultFiles2, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled} = StylisticConfig.from(stylistic);
  return [
    {
      name: "w5s/ts/setup",
      plugins: {
        ts: await interopDefault(tsPlugin)
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
        ...stylisticEnabled ? {} : {},
        ...rules
      }
    }
  ];
}
var defaultFiles3 = [Project.extensionsToGlob(Project.queryExtensions(["yaml"]))];
async function yml(options = {}) {
  const [ymlPlugin, ymlParser] = await Promise.all([
    import('eslint-plugin-yml'),
    interopDefault(import('yaml-eslint-parser'))
  ]);
  const { files = defaultFiles3, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic);
  return [
    {
      name: "w5s/yml/setup",
      plugins: {
        yml: await interopDefault(ymlPlugin)
      }
    },
    {
      files,
      languageOptions: {
        parser: ymlParser
      },
      name: "w5s/yml/rules",
      rules: {
        ...configs["flat/recommended"][0].rules,
        ...configs["flat/recommended"][1].rules,
        ...configs["flat/recommended"][2].rules,
        ...stylisticEnabled ? {
          ...configs["flat/standard"][3].rules,
          "yml/array-bracket-spacing": ["error", "never"],
          "yml/comma-dangle": ["error", "never"],
          "yml/comma-style": ["error", "last"],
          "yml/object-curly-newline": ["error", { consistent: true, multiline: true }],
          "yml/object-curly-spacing": ["error", "always"],
          "yml/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
          "yml/quote-props": "error",
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
  const importOptions = typeof options.import === "boolean" ? { enabled: options.import } : { enabled: true, ...options.import };
  const jsoncOptions = typeof options.jsonc === "boolean" ? { enabled: options.jsonc } : { enabled: true, ...options.jsonc };
  const nodeOptions = typeof options.node === "boolean" ? { enabled: options.node } : { enabled: true, ...options.node };
  const tsOptions = typeof options.ts === "boolean" ? { enabled: options.ts } : { enabled: true, ...options.ts };
  const ymlOptions = typeof options.yml === "boolean" ? { enabled: options.yml } : { enabled: false, ...options.yml };
  let returnValue = [];
  const append = async (config) => {
    returnValue = [...returnValue, ...config];
  };
  if (jsoncOptions.enabled) {
    append(await jsonc(jsoncOptions));
  }
  if (importOptions.enabled) {
    append(await imports(importOptions));
  }
  if (nodeOptions.enabled) {
    append(await node(nodeOptions));
  }
  if (tsOptions.enabled) {
    append(await ts(tsOptions));
  }
  if (ymlOptions.enabled) {
    append(await yml(ymlOptions));
  }
  return returnValue;
}

// src/index.ts
var index_default = defineConfig;

export { index_default as default, defineConfig, imports, jsonc, node, ts, yml };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map