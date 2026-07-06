const jsonFile = require('./jsonFile.js');
const npm = require('./npm.js');
const pkg = require('./pkg.js');

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
function semanticRelease({ preset, state, update }) {
  npm.dependency({
    dev: true,
    name: ['semantic-release', ...(preset ? [preset] : [])],
    state,
  });

  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      /** @type {SemanticReleaseConfig} */
      default: {
        extends: preset ? [preset] : [],
      },
      path: 'release',
      state,
      update,
    });
  });
}
semanticRelease.command = function command() {
  return 'semantic-release';
};

module.exports = {
  semanticRelease,
};
