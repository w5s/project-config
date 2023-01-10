"use strict";
const _rule_js_1 = require("./_rule.js");
const config = (0, _rule_js_1.concatESConfig)({
    extends: ['plugin:unicorn/recommended'],
    plugins: ['unicorn'],
    rules: {
        'unicode-bom': ['error', 'never'],
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': ['error', { name: 'error' }],
        'unicorn/custom-error-definition': 'error',
        'unicorn/error-message': 'error',
        'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-console-spaces': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-unreadable-array-destructuring': 'off',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'warn',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-add-event-listener': 'off',
        'unicorn/prefer-event-key': 'error',
        'unicorn/prefer-exponentiation-operator': 'error',
        'unicorn/prefer-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-append': 'error',
        'unicorn/prefer-node-remove': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
    },
}, {
    overrides: [
        {
            files: ['**/+(babel|jest|next|vue).config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
            },
        },
    ],
    rules: {
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-method-this-argument': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/prefer-default-parameters': 'off',
        'unicorn/prevent-abbreviations': 'off', // This rule is so dangerous : it potentially break code while fixing in many cases !!
    },
});
module.exports = config;
//# sourceMappingURL=unicorn.js.map