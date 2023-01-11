import type eslint from 'eslint';
// @ts-ignore
import importConfig from 'eslint-config-airbnb-base/rules/imports';
import { concatESConfig, fixme, disable } from '../_rule.js';

// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import

const config: eslint.Linter.Config = concatESConfig(
  // @ts-ignore
  importConfig,
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
      'import/no-deprecated': disable('warn', 'performance'),
      'import/no-named-as-default': disable('warn', 'performance'),
      'import/no-unused-modules': disable('warn', 'performance'),
      'import/prefer-default-export': 'off', // Not aligned, default export does not bring sufficient semantic
      'import/unambiguous': fixme('off'), // Disable because proposal still in progress
    },
  }
);

export = config;
