const { off, error } = require('./_rule');

module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/no-undefined-types': off, // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
    'jsdoc/require-jsdoc': off,
    'jsdoc/require-param-description': off,
    'jsdoc/require-returns': off,
    'jsdoc/valid-types': off, // FIXME: reports lots of false positive
    strict: [error, 'safe'],
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
