const { concatESConfig, off, error } = require('./_rule.js');

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
// @ts-ignore
require('@rushstack/eslint-patch/modern-module-resolution.js');

const baseConfig = concatESConfig(
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/best-practices'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/errors'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/es6'),
  /** {@link ./import.js} */
  // require('eslint-config-airbnb-base/rules/imports'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/node'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/strict'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/style'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/variables')
);

module.exports = concatESConfig(
  baseConfig,
  // overrides
  {
    parser: 'espree',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // Annoying because it is not always wanted
      'default-case': off,
      // We do not want console.* in production. Disable this rule on a per line basis if needed
      'no-console': error,
      // Often useful in jsx
      'no-nested-ternary': off,
      // Too strict, for pure code prefer the functional plugin
      'no-param-reassign': [error, { props: false }],
      // Allow for-of syntax
      // @ts-ignore
      'no-restricted-syntax': baseConfig.rules['no-restricted-syntax'].filter(
        // @ts-ignore
        ({ selector }) => selector !== 'ForOfStatement'
      ),
      // underscore is often used (mongodb, etc)
      'no-underscore-dangle': off,
      // Ignore underscore case arguments
      'no-unused-vars': [error, { argsIgnorePattern: '^_' }],
      // Allow in some cases https://github.com/airbnb/javascript/issues/1089#issuecomment-1024351821
      'no-use-before-define': [error, 'nofunc'],
    },
  }
);
