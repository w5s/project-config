const { error } = require('./_rule.js');

module.exports = {
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
