const { error } = require('./_rule.js');

// Try require '@w5s/prettier-config'
const prettierConfig = (() => {
  try {
    // eslint-disable-next-line global-require
    return require('@w5s/prettier-config');
  } catch (error_) {
    // eslint-disable-next-line no-console
    console.warn(error_);
    /** @type {import('@w5s/prettier-config')} */
    const defaultConfig = {
      trailingComma: 'es5',
    };
    return defaultConfig;
  }
})();

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [error, prettierConfig],
  },
};
