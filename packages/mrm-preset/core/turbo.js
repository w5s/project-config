const { json } = require('mrm-core');
const npm = require('./npm.js');
const jsonFile = require('./jsonFile.js');

/**
 * @typedef {{
 *   $schema?: string,
 *   tasks?: Record<string, unknown>,
 *   globalEnv?: Array<string>,
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
  const hasTurbo = state === 'present';
  const turboFile = json('turbo.json');

  if (hasTurbo) {
    jsonFile.value(turboFile, {
      path: undefined,
      state,
      update: (previousValue) => ({
        $schema: 'https://turborepo.org/schema.json',
        ...update(previousValue),
      }),
      /** @type {TurboConfig} */
      default: {},
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
