// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [
        require.resolve('./lib/es.js'),
        require.resolve('./lib/typescript.js'),
        require.resolve('./lib/prettier.js'),
      ],
      files: ['*.+(ts|tsx)'],
    },
  ],
};
