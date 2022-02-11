// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('./rules/base'),
    require.resolve('./rules/jsdoc'),
    require.resolve('./rules/import'),
    require.resolve('./rules/unicorn'),
    'prettier',
    require.resolve('./rules/prettier'),
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      plugins: ['@babel/plugin-syntax-class-properties', '@babel/plugin-syntax-jsx'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: 'module',
  },
};
