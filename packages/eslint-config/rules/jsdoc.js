const { off } = require('./_rule');

module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/require-jsdoc': off,
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
