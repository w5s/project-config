const { packageJson } = require('mrm-core');
const jsonFile = require('./jsonFile.js');
/**
 * @typedef {import('eslint').Linter.Config} ESLintConfig
 */
/**
 * @param {{
 *   state: 'present'|'absent',
 *   update: (config: ESLintConfig) => ESLintConfig
 * }} config
 */
function eslintConfig({ state, update }) {
  const packageFile = packageJson();

  jsonFile.value(packageFile, {
    path: 'eslintConfig',
    state,
    // @ts-ignore
    update,
    /** @type {ESLintConfig} */
    // @ts-ignore
    default: {},
  });

  packageFile.save();
}

/**
 *
 * @param {Array<string>} ignorePatterns
 */
function eslintIgnore(ignorePatterns) {
  const packageFile = packageJson();
  packageFile.merge({ eslintIgnore: ignorePatterns });
  packageFile.save();
}

module.exports = {
  eslintConfig,
  eslintIgnore,
};
