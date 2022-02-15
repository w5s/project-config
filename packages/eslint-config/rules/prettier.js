const { error } = require('./_rule');

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
