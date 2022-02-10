const { off, error } = require('./_rule');

// @see https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0#deprecating-node-js-commonjs-specific-rules
module.exports = {
  env: {
    node: true,
  },
  rules: {
    'callback-return': [error, ['callback', 'cb']],
    'global-require': error,
    'handle-callback-err': error,
    'no-buffer-constructor': error,
    'no-mixed-requires': off,
    'no-new-require': error,
    'no-path-concat': error,
    'no-process-env': error,
    'no-process-exit': error,
    'no-restricted-modules': off,
    'no-sync': off,
  },
};
