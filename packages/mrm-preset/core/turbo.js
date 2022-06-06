const { packageJson, json } = require('mrm-core');
const pkg = require('./pkg');
const npm = require('./npm');
const jsonFile = require('./jsonFile');

/**
 * @typedef {{
 *   $schema: string,
 *   pipeline?: Record<string, unknown>,
 *   globalDependencies?: Array<string>,
 * }} TurboConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update: (config: TurboConfig) => TurboConfig
 * }} options
 */
function turbo({ state, update }) {
  const packageFileDefault = packageJson();
  const hasWorkspaces = pkg.hasWorkspaces(packageFileDefault);
  const hasTurbo = state === 'present' && hasWorkspaces;

  const turboFile = json('turbo.json');

  if (hasTurbo) {
    jsonFile.value(turboFile, {
      path: undefined,
      state,
      update,
      /** @type {TurboConfig} */
      default: {
        $schema: 'https://turborepo.org/schema.json',
      },
    });

    /**
     * Otherwise save the file with content
     */
    turboFile.save();
  } else {
    turboFile.delete();
  }

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['turbo'],
    state: hasTurbo ? 'present' : 'absent',
  });
}

module.exports = {
  turbo,
};
