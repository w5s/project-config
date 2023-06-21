// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [require.resolve('./dist/es.js'), require.resolve('./dist/prettier.js')],
};
