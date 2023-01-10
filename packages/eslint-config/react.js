// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [require.resolve('./lib/react.js'), 'prettier'],
  settings: {
    react: {
      flowVersion: '0.100',
      version: 'detect',
    },
  },
};
