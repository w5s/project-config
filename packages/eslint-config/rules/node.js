const { off, error } = require('./_rule');

// @see https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0#deprecating-node-js-commonjs-specific-rules
module.exports = {
  env: {
    node: true,
  },
  rules: {
    'callback-return': off,
    'global-require': error,
    'handle-callback-err': off,
    'no-buffer-constructor': error,
    'no-mixed-requires': [off, false],
    'no-new-require': error,
    'no-path-concat': error,
    'no-process-env': off,
    'no-process-exit': off,
    'no-restricted-modules': off,
    'no-sync': off,
  },
};
