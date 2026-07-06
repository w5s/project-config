const jsonFile = require('./jsonFile.cjs');
const pkg = require('./pkg.cjs');

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
