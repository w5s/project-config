// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('./lib/es/base.js'),
    require.resolve('./lib/es/promise.js'),
    require.resolve('./lib/es/jsdoc.js'),
    require.resolve('./lib/es/import.js'),
    require.resolve('./lib/es/unicorn.js'),
    require.resolve('./lib/prettier.js'),
  ],
};
