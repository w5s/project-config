const { json } = require('mrm-core');

const jsonFile = require('./jsonFile.cjs');
const npm = require('./npm.cjs');

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
      /** @type {TurboConfig} */
      default: {},
      path: undefined,
      state,
      update: (previousValue) => ({
        $schema: 'https://turbo.build/schema.json',
        ...update(previousValue),
      }),
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
