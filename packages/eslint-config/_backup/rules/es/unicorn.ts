import { ESLintConfig } from '@w5s/dev';
import type eslint from 'eslint';
// @ts-ignore unicorn config is not typed
import unicornConfig from 'eslint-plugin-unicorn';

const config: eslint.Linter.Config = ESLintConfig.concat(
  unicornConfig.configs.recommended,
  {
    // extends: ['plugin:unicorn/recommended'],
    plugins: ['unicorn'],
    rules: {

    },
  },
  {
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
  },
);
export = config;
