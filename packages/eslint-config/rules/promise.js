const { concatESConfig, error, fixme } = require('./_rule');

module.exports = concatESConfig({
  extends: ['plugin:promise/recommended'],
  plugins: ['promise'],
  rules: {
    // https://github.com/xjamundx/eslint-plugin-promise/issues/212
    'promise/prefer-await-to-callbacks': fixme(error),
    'promise/prefer-await-to-then': error,
  },
});
