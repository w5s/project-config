/** @type {import('prettier').Config} */
const prettierConfig = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

module.exports = prettierConfig;
