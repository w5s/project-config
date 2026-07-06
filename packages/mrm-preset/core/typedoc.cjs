const { json, packageJson } = require('mrm-core');

const jsonFile = require('./jsonFile.cjs');
const npm = require('./npm.cjs');
const pkg = require('./pkg.cjs');

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
      /** @type {TypeDocConfig} */
      default: {},
      path: undefined,
      state,
      update: (config) => ({
        ...update(config),
        ...(hasWorkspaces
          ? {
              entryPoints: undefined,
              entryPointStrategy: 'packages',
            }
          : {
              entryPoints: ['src/index.ts'],
              entryPointStrategy: undefined,
            }),
      }),
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
