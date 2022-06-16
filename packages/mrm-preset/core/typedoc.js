const { packageJson, json } = require('mrm-core');
const pkg = require('./pkg.js');
const npm = require('./npm.js');
const jsonFile = require('./jsonFile.js');

/**
 * @typedef {{
 *  out?: string,
 *  tsconfig?: string,
 *  exclude?: Array<string>,
 *  excludePrivate?: boolean,
 *  excludeExternals?: boolean,
 *  readme?: string,
 *  theme?: string,
 * }} TypeDocConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update: (config: TypeDocConfig) => TypeDocConfig
 * }} options
 */
function typedoc({ state, update }) {
  const packageFileDefault = packageJson();
  const hasWorkspaces = pkg.hasWorkspaces(packageFileDefault);
  const hasTypedoc = state === 'present';

  const typedocFile = json('typedoc.json');

  if (hasTypedoc) {
    jsonFile.value(typedocFile, {
      path: undefined,
      state,
      update: (config) => ({
        ...update(config),
        ...(hasWorkspaces
          ? {
              entryPointStrategy: 'packages',
              entryPoints: undefined,
            }
          : {
              entryPointStrategy: undefined,
              entryPoints: ['src/index.ts'],
            }),
      }),
      /** @type {TypeDocConfig} */
      default: {},
    });

    /**
     * Otherwise save the file with content
     */
    typedocFile.save();
  } else {
    typedocFile.delete();
  }

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['typedoc'],
    state: hasTypedoc ? 'present' : 'absent',
  });
}

module.exports = {
  typedoc,
};
