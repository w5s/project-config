const { off, error } = require('./_rule');

module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': error,
    'filenames/match-regex': off,
    'filenames/no-index': off,
  },
};
