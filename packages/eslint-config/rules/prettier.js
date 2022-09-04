const { error } = require('./_rule.js');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      error,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
