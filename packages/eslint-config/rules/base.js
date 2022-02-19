const { concatESConfig, off, error } = require('./_rule');

module.exports = concatESConfig(
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
  require('eslint-config-airbnb-base/rules/variables'),

  // overrides
  {
    rules: {
      // Often useful in jsx
      'no-nested-ternary': off,
      // Too strict, for pure code prefer the functional plugin
      'no-param-reassign': [error, { props: false }],
    },
  }
);
