const { concatESConfig, error } = require('./_rule');

module.exports = concatESConfig({
  extends: ['plugin:promise/recommended'],
  plugins: ['promise'],
  rules: {
    'promise/prefer-await-to-callbacks': error,
    'promise/prefer-await-to-then': error,
  },
});
