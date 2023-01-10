/* cspell:disable */
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/yml.js')],
      files: ['*.yml', '*.yaml'],
    },
  ],
};
