const pkg = require('./pkg');
const npm = require('./npm');
const jsonFile = require('./jsonFile');

/**
 * @typedef {Record<string, string|string[]>} LintStagedConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update?: (config: LintStagedConfig) => LintStagedConfig
 * }} options
 */
function lintStaged({ state, update }) {
  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      path: 'lint-staged',
      state,
      update,
      /** @type {LintStagedConfig} */
      default: {},
    });
  });

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['lint-staged'],
    state,
  });
}

module.exports = {
  lintStaged,
};
