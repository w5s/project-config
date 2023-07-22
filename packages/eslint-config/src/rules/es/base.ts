import type eslint from 'eslint';
import { ECMA_VERSION, ESLintConfig } from '@w5s/dev';

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
// @ts-ignore No typing available
import '@rushstack/eslint-patch/modern-module-resolution.js';
// @ts-ignore No typing available
import bestPracticesConfig from 'eslint-config-airbnb-base/rules/best-practices';
// @ts-ignore No typing available
import errorsConfig from 'eslint-config-airbnb-base/rules/errors';
// @ts-ignore No typing available
import es6Config from 'eslint-config-airbnb-base/rules/es6';
// @ts-ignore No typing available
import nodeConfig from 'eslint-config-airbnb-base/rules/node';
// @ts-ignore No typing available
import strictConfig from 'eslint-config-airbnb-base/rules/strict';
// @ts-ignore No typing available
import styleConfig from 'eslint-config-airbnb-base/rules/style';
// @ts-ignore No typing available
import variablesConfig from 'eslint-config-airbnb-base/rules/variables';

const baseConfig = ESLintConfig.concat(
  bestPracticesConfig,
  errorsConfig,
  es6Config,
  nodeConfig,
  strictConfig,
  styleConfig,
  variablesConfig
);

const config: eslint.Linter.Config = ESLintConfig.concat(
  baseConfig,
  // overrides
  {
    env: {
      [`es${ECMA_VERSION}`]: true,
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
      ecmaVersion: ECMA_VERSION,
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
        ({ selector }) => selector !== 'ForOfStatement'
      ),
      // underscore is often used (mongodb, etc)
      'no-underscore-dangle': 'off',
      // Ignore underscore case arguments
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Allow in some cases https://github.com/airbnb/javascript/issues/1089#issuecomment-1024351821
      'no-use-before-define': ['error', 'nofunc'],
      // Allow statements, to be compatible with '@typescript-eslint/no-floating-promises' fix
      'no-void': ['error', { allowAsStatement: true }],
    },
  }
);

export = config;
