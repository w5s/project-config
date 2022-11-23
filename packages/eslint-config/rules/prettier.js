const { error } = require('./_rule.js');

const getPackageScope = () => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { name } = require('../package.json');
    const prefixMatch = (name || '').match(/(@\w+)\//);
    const packageScope = prefixMatch ? prefixMatch[1] : undefined;
    return packageScope;
  } catch (error_) {
    // eslint-disable-next-line no-console
    console.warn(error_);

    return undefined;
  }
};
const getPrettierConfig = (/** @type {string} */ moduleName) => {
  try {
    /** @type {import('prettier').Config} */
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const moduleConfig = require(moduleName);
    return moduleConfig;
  } catch {
    return undefined;
  }
};

// Try require '@my-organization/prettier-config'
const getPrettierConfigDefault = () => {
  /** @type {import('prettier').Config} */
  const defaultConfig = {
    trailingComma: 'es5',
  };
  const packageScope = getPackageScope();
  return getPrettierConfig(`${packageScope}/prettier-config`) || defaultConfig;
};

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [error, getPrettierConfigDefault()],
  },
};
