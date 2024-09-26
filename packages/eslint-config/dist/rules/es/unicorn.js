"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
// @ts-ignore unicorn config is not typed
const eslint_plugin_unicorn_1 = __importDefault(require("eslint-plugin-unicorn"));
const config = dev_1.ESLintConfig.concat(eslint_plugin_unicorn_1.default.configs.recommended, {
    // extends: ['plugin:unicorn/recommended'],
    plugins: ['unicorn'],
    rules: {
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': ['error', { name: 'error' }],
        'unicorn/custom-error-definition': 'error',
        'unicorn/error-message': 'error',
        'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'off', // Not playing well with ES Module
        'unicorn/new-for-builtins': 'off', // error, @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/122
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-console-spaces': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off', // error ?
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-null': 'off', // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/612
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
        'unicorn/throw-new-error': 'off', // Creating errors with call signature is OK
    },
}, {
    overrides: [
        {
            files: ['**/*.config.cjs', '**/*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
            },
        },
    ],
    rules: {
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off', // Too many false positive
        'unicorn/no-array-callback-reference': 'off', // Many false positive reported
        'unicorn/no-array-for-each': 'off', // This rule could change browser compatibility
        'unicorn/no-array-method-this-argument': 'off', // Many false positive reported
        'unicorn/no-array-reduce': 'off', // Array#reduce can be used
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/prefer-default-parameters': 'off',
        'unicorn/prevent-abbreviations': 'off', // This rule is so dangerous : it potentially break code while fixing in many cases !!
    },
});
module.exports = config;
