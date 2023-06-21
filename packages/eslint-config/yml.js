/* cspell:disable */
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./dist/yml.js')],
      files: ['*.yml', '*.yaml'],
    },
  ],
};
