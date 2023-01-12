"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const _rule_js_1 = require("../_rule.js");
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
// @ts-ignore No typing available
require("@rushstack/eslint-patch/modern-module-resolution.js");
// @ts-ignore No typing available
const best_practices_1 = __importDefault(require("eslint-config-airbnb-base/rules/best-practices"));
// @ts-ignore No typing available
const errors_1 = __importDefault(require("eslint-config-airbnb-base/rules/errors"));
// @ts-ignore No typing available
const es6_1 = __importDefault(require("eslint-config-airbnb-base/rules/es6"));
// @ts-ignore No typing available
const node_1 = __importDefault(require("eslint-config-airbnb-base/rules/node"));
// @ts-ignore No typing available
const strict_1 = __importDefault(require("eslint-config-airbnb-base/rules/strict"));
// @ts-ignore No typing available
const style_1 = __importDefault(require("eslint-config-airbnb-base/rules/style"));
// @ts-ignore No typing available
const variables_1 = __importDefault(require("eslint-config-airbnb-base/rules/variables"));
const baseConfig = (0, _rule_js_1.concatESConfig)(best_practices_1.default, errors_1.default, es6_1.default, node_1.default, strict_1.default, style_1.default, variables_1.default);
const config = (0, _rule_js_1.concatESConfig)(baseConfig, 
// overrides
{
    env: {
        [`es${dev_1.ECMA_VERSION}`]: true,
    },
    globals: {
        __DEV__: 'readonly',
        __PROD__: 'readonly',
        __TEST__: 'readonly',
    },
    parser: 'espree',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: dev_1.ECMA_VERSION,
        sourceType: 'module',
    },
    reportUnusedDisableDirectives: true,
    rules: {
        // Annoying because it is not always wanted
        'default-case': 'off',
        // We do not want console.* in production. Disable this rule on a per line basis if needed
        'no-console': 'error',
        // Often useful in jsx
        'no-nested-ternary': 'off',
        // Too strict, for pure code prefer the functional plugin
        'no-param-reassign': ['error', { props: false }],
        // Allow for-of syntax
        // @ts-ignore No typing available
        'no-restricted-syntax': baseConfig.rules['no-restricted-syntax'].filter(
        // @ts-ignore No typing available
        ({ selector }) => selector !== 'ForOfStatement'),
        // underscore is often used (mongodb, etc)
        'no-underscore-dangle': 'off',
        // Ignore underscore case arguments
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        // Allow in some cases https://github.com/airbnb/javascript/issues/1089#issuecomment-1024351821
        'no-use-before-define': ['error', 'nofunc'],
    },
});
module.exports = config;
//# sourceMappingURL=base.js.map