const { off, warn, error, concatESConfig, fixme } = require('./_rule');

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
 * @param {string} _status
 */
// eslint-disable-next-line no-unused-vars
const performanceIssue = (_status) => off;

module.exports = concatESConfig(
  // @ts-ignore
  require('eslint-config-airbnb-base/rules/imports'),
  // Overrides
  {
    rules: {
      'import/no-deprecated': performanceIssue(warn),
      'import/no-named-as-default': performanceIssue(error),
      'import/no-unused-modules': performanceIssue(error),
      'import/prefer-default-export': off, // Not aligned, default export does not bring sufficient semantic
      'import/unambiguous': fixme(off), // Disable because proposal still in progress
    },
  }
);
