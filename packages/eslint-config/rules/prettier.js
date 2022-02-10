const { error, off } = require('./_rule');

module.exports = {
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': off,
    'prefer-arrow-callback': off,
    'prettier/prettier': [
      error,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
