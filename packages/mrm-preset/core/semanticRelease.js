const npm = require('./npm');
const pkg = require('./pkg');
const jsonFile = require('./jsonFile');

/**
 * @typedef {{
 *  extends: string|string[]
 * }} SemanticReleaseConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   preset?: string,
 *   update?: (config: SemanticReleaseConfig) => SemanticReleaseConfig
 * }} options
 */
function semanticRelease({ state, update, preset }) {
  npm.dependency({
    dev: true,
    name: ['semantic-release', ...(preset ? [preset] : [])],
    state,
  });

  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      path: 'release',
      state,
      update,
      /** @type {SemanticReleaseConfig} */
      default: {
        extends: preset ? [preset] : [],
      },
    });
  });
}
semanticRelease.command = function command() {
  return 'semantic-release';
};

module.exports = {
  semanticRelease,
};
