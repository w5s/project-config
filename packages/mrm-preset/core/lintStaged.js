const jsonFile = require('./jsonFile.js');
const pkg = require('./pkg.js');

/**
 * @typedef {Record<string, string|string[]>} LintStagedConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update?: ((config: LintStagedConfig) => LintStagedConfig) | undefined
 * }} options
 */
function lintStaged({ state, update }) {
  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      /** @type {LintStagedConfig} */
      default: {},
      path: 'lint-staged',
      state,
      update,
    });
  });

  // Dependencies
  // npm.dependency({
  //   dev: true,
  //   name: ['lint-staged'],
  //   state,
  // });
}

module.exports = {
  lintStaged,
};
