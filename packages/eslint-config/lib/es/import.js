"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
// @ts-ignore
const imports_1 = __importDefault(require("eslint-config-airbnb-base/rules/imports"));
const _rule_js_1 = require("../_rule.js");
// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
const config = (0, _rule_js_1.concatESConfig)(
// @ts-ignore
imports_1.default, 
// Overrides
{
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
            // js: 'never',
            // jsx: 'never',
            // mjs: 'never',
            },
        ],
        'import/no-deprecated': (0, _rule_js_1.disable)('warn', 'performance'),
        'import/no-named-as-default': (0, _rule_js_1.disable)('warn', 'performance'),
        'import/no-unused-modules': (0, _rule_js_1.disable)('warn', 'performance'),
        'import/prefer-default-export': 'off',
        'import/unambiguous': (0, _rule_js_1.fixme)('off'), // Disable because proposal still in progress
    },
    settings: {
        'import/extensions': dev_1.EXTENSIONS,
        // Resolve type definition packages
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/ignore': [...dev_1.IGNORE_LIST, dev_1.EXTENSIONS_RESOURCES_REGEX],
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': dev_1.EXTENSIONS.filter((ext) => !ext.includes('js')),
        },
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [...dev_1.EXTENSIONS, '.json'],
            },
        },
    },
});
module.exports = config;
