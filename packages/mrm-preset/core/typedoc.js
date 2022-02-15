const { packageJson, json } = require('mrm-core');
const pkg = require('./pkg');
const npm = require('./npm');
const jsonFile = require('./jsonFile');

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

  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: 'typedoc',
      script: 'typedoc',
      state: !hasTypedoc || hasWorkspaces ? 'absent' : 'present',
    });
  });

  const typedocFile = json('typedoc.json');

  if (hasTypedoc) {
    jsonFile.value(typedocFile, {
      path: undefined,
      state,
      update: (config) => ({
        ...update(config),
        ...(hasWorkspaces
          ? {
              'external-modulemap': '.*packages/([^/]+)/.*',
              entryPoints: ['packages/'],
            }
          : {
              'external-modulemap': undefined,
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
  npm.dependency({
    dev: true,
    name: ['@strictsoftware/typedoc-plugin-monorepo'],
    state: hasTypedoc && hasWorkspaces ? 'present' : 'absent',
  });
}

module.exports = {
  typedoc,
};
