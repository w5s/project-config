// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('./rules/base'),
    require.resolve('./rules/promise'),
    require.resolve('./rules/jsdoc'),
    require.resolve('./rules/import'),
    require.resolve('./rules/unicorn'),
    require.resolve('./rules/prettier'),
  ],
};
