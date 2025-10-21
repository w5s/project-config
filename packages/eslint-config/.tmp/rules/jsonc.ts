/* cspell:disable */
import type eslint from 'eslint';

// https://github.com/keithamus/sort-package-json/blob/master/defaultRules.md

const config: eslint.Linter.Config = {
  extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
  overrides: [
    {
      files: ['tsconfig*.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: ['$schema', 'display', 'extends', 'compilerOptions', 'include', 'exclude', 'files', 'references'],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '.*',
          },
        ],
      },
    },
    {

    },
  ],
  parser: 'jsonc-eslint-parser',
  plugins: ['jsonc'],
};

export = config;
