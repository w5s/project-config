/* eslint-disable sort-keys-fix/sort-keys-fix */
const path = require('path');
const { packageJson, file } = require('mrm-core');
const npm = require('../core/npm');
const pkg = require('../core/pkg');

/**
 * @param {{
 *   mrmPreset: string,
 *   mrmTask: string,
 *   packageArchetype: 'application'|'library'|'workspace',
 *   packageManager: 'npm'|'yarn'
 * }} config
 * @returns {void}
 */
function task({ mrmPreset, mrmTask, packageArchetype, packageManager }) {
  /**
   * setup package.json from following object
   */

  const packageFile = packageJson({
    name: path.basename(process.cwd()),
    version: '1.0.0-alpha.0',
    private: true,
    license: 'PRIVATE',
    description: '',
  });

  packageFile.merge({
    scripts: {
      configure: `npm run mrm -- ${mrmTask}`,
      mrm: `mrm --preset ${mrmPreset}`,
    },
  });
  pkg.value(packageFile, {
    path: 'packageManager',
    state: 'present',
    update: packageManager,
    default: () => {
      if (file('yarn.lock').exists()) {
        return 'yarn';
      }

      // return 'npm';
      return undefined;
    },
  });
  pkg.value(packageFile, {
    path: 'mrmConfig.packageArchetype',
    state: 'present',
    update: packageArchetype,
    default: () => {
      if (file('lerna.json').exists() || Boolean(packageFile.get('workspaces'))) {
        return 'workspace';
      }

      return 'library';
    },
  });
  packageFile.save();

  npm.dependency({
    dev: true,
    name: ['mrm', mrmPreset],
    yarn: packageManager === 'yarn',
    state: 'present',
  });
}

task.description = 'Bootstrap a new project.';
// TODO: parameters to improve with strict choices and description (see Inquirer.js)
task.parameters = {
  mrmPreset: {
    default: '@w5s/mrm-preset',
    message: 'Default MRM preset name ?',
    type: 'input',
  },
  mrmTask: {
    default: 'configure',
    message: 'Default MRM task name ?',
    type: 'input',
  },
  packageArchetype: {
    choices: ['library', 'application', 'workspace'],
    message: 'What Archetype of package ?',
    name: 'packageArchetype',
    type: 'input',
  },
  packageManager: {
    default: 'yarn',
    choices: ['yarn', 'npm'],
    message: 'Which default package manager ?',
    name: 'packageManager',
    type: 'input',
  },
};
module.exports = task;
