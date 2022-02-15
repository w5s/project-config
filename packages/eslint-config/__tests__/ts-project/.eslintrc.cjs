/* eslint-env node */

module.exports = {
  root: true,
  extends: [require.resolve('../../index'), require.resolve('../testRules')],
  parserOptions: {
    project: require.resolve('../../tsconfig.json'),
  },
};
