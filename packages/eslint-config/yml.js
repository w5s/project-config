/* cspell:disable */
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./rules/yml')],
      files: ['*.yml', '*.yaml'],
    },
  ],
};
