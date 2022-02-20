const { concatESConfig, off, error } = require('./_rule');

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
    rules: {
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
    },
  }
);
