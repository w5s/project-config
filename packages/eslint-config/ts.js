// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('./rules/base'),
    require.resolve('./rules/filenames'),
    require.resolve('./rules/jsdoc'),
    require.resolve('./rules/import'),
    require.resolve('./rules/promise'),
    require.resolve('./rules/unicorn'),
    'plugin:import/typescript',
    require.resolve('./rules/typescript'),
    'prettier',
    require.resolve('./rules/prettier'),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
};
