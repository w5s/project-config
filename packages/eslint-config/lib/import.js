"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// @ts-ignore
const imports_1 = __importDefault(require("eslint-config-airbnb-base/rules/imports"));
const _rule_js_1 = require("./_rule.js");
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
});
module.exports = config;
//# sourceMappingURL=import.js.map