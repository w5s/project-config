const { off, warn, error } = require('./_rule');

module.exports = {
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/check-param-names': warn,
    'jsdoc/check-tag-names': warn,
    'jsdoc/check-types': warn,
    'jsdoc/newline-after-description': [warn, 'always'],
    'jsdoc/require-description': off,
    'jsdoc/require-description-complete-sentence': off,
    'jsdoc/require-hyphen-before-param-description': off,
    'jsdoc/require-param': off,
    'jsdoc/require-param-description': off,
    'jsdoc/require-param-name': error,
    'jsdoc/require-param-type': off,
    'jsdoc/require-returns-description': off,
    'jsdoc/require-returns-type': off,
  },
};
