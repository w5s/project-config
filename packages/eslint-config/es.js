// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('./lib/base.js'),
    require.resolve('./lib/promise.js'),
    require.resolve('./lib/jsdoc.js'),
    require.resolve('./lib/import.js'),
    require.resolve('./lib/unicorn.js'),
    require.resolve('./lib/prettier.js'),
  ],
};
