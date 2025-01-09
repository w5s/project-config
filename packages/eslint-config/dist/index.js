import { Project, interopDefault } from '@w5s/dev';
import { configs } from 'eslint-plugin-jsonc';
import importPlugin from 'eslint-plugin-import';

// src/config/jsonc.ts
var defaultFiles = [Project.extensionsToGlob([".json", ".json5", ".jsonc"])];
var defaultStylistic = { indent: 2 };
async function jsonc(options = {}) {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser'))
  ]);
  const { files = defaultFiles, rules = {}, rulesStylistic = true } = options;
  const { indent } = {
    ...defaultStylistic,
    ...typeof rulesStylistic === "boolean" ? {} : rulesStylistic
  };
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
        ...configs["flat/recommended-with-json"][0]?.rules,
        ...rulesStylistic ? {
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
var defaultStylistic2 = { indent: 2 };
async function imports(options = {}) {
  const { rules = {}, rulesStylistic = true } = options;
  ({
    ...defaultStylistic2,
    ...typeof rulesStylistic === "boolean" ? {} : rulesStylistic
  });
  return [
    {
      name: "w5s/import/rules",
      plugins: importConfig.plugins,
      rules: {
        ...importConfig?.rules,
        ...rulesStylistic ? {
          // Stylistic rules
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
  return returnValue;
}

// src/index.ts
var index_default = defineConfig;

export { index_default as default, defineConfig, imports, jsonc };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map