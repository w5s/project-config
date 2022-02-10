// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [require.resolve('./rules/react'), 'prettier'],
  settings: {
    react: {
      flowVersion: '0.100',
      version: 'detect',
    },
  },
};
