/* eslint-env node */

module.exports = {
  root: true,
  extends: [require.resolve('../../index')],
  parserOptions: {
    project: require.resolve('../../tsconfig.json'),
  },
};
