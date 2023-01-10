// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/jest.js')],
      files: [
        '**/__mocks__/**/*.+(ts|tsx|js|jsx)',
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
      ],
    },
  ],
};
