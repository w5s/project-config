// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [require.resolve('./es'), require.resolve('./react'), require.resolve('./json')],
  overrides: [
    {
      extends: [require.resolve('./ts')],
      files: ['*.+(ts|tsx)'],
    },
    {
      extends: [require.resolve('./jest')],
      files: [
        '**/__mocks__/**/*.+(ts|tsx|js|jsx)',
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
      ],
    },
  ],
  root: true,
};
