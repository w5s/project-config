import { Project, interopDefault } from '@w5s/dev';
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
    import('jsonc-eslint-parser')
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
var defaultFiles2 = [Project.extensionsToGlob(Project.queryExtensions(["yaml"]))];
async function yml(options = {}) {
  const [ymlPlugin, ymlParser] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ]);
  const { files = defaultFiles2, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic);
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
  if (ymlOptions.enabled) {
    append(await yml(ymlOptions));
  }
  return returnValue;
}

// src/index.ts
var index_default = defineConfig;

export { index_default as default, defineConfig, imports, jsonc, yml };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map