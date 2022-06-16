const npm = require('./npm.js');
const pkg = require('./pkg.js');
const jsonFile = require('./jsonFile.js');

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
