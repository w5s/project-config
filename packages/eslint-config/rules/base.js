const { concatESConfig, off } = require('./_rule');

module.exports = concatESConfig(
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/best-practices'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/errors'),
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/es6'),
  // we use our own import configuration
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
    },
  }
);
