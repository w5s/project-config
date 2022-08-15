const { json } = require('mrm-core');
const npm = require('./npm.js');
const jsonFile = require('./jsonFile.js');

/**
 * @typedef {{
 *   $schema: string,
 *   changelog?: false | string | [changelogPath: string, changelogOptions: unknown],
 *   fixed?: Array<Array<string>>,
 *   linked?: Array<Array<string>>,
 *   commit?: boolean|string|[commitGeneratorPath: string, commitGeneratorOptions: unknown],
 *   access?: 'restricted'|'public',
 *   baseBranch?: string,
 *   ignore?: string[],
 *   updateInternalDependencies?: 'patch'|'minor',
 *   bumpVersionsWithWorkspaceProtocolOnly?: boolean,
 *   snapshot?: {
 *     useCalculatedVersion?: boolean,
 *     prereleaseTemplate?: string,
 *   }
 * }} ChangeSetsConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update: (config: ChangeSetsConfig) => ChangeSetsConfig
 * }} options
 */
function changesets({ state, update }) {
  const hasChangesets = state === 'present';
  const changesetFile = json('.changeset/config.json');

  if (hasChangesets) {
    jsonFile.value(changesetFile, {
      path: undefined,
      state,
      update,
      /** @type {ChangeSetsConfig} */
      default: {
        $schema: 'https://unpkg.com/@changesets/config@2.1.1/schema.json',
        changelog: '@changesets/cli/changelog',
        commit: false,
        fixed: [],
        linked: [],
        access: 'restricted',
        baseBranch: 'main',
        updateInternalDependencies: 'patch',
        ignore: [],
      },
    });

    /**
     * Otherwise save the file with content
     */
    changesetFile.save();
  } else {
    changesetFile.delete();
  }

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['@changesets/cli'],
    state: hasChangesets ? 'present' : 'absent',
  });
}

module.exports = {
  changesets,
};
