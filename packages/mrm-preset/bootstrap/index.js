/* eslint-disable sort-keys-fix/sort-keys-fix */
const path = require('path');
const { packageJson, file, yaml } = require('mrm-core');
// @ts-ignore
const execCommand = require('mrm-core/src/util/execCommand');
const npm = require('../core/npm');
const pkg = require('../core/pkg');
const { gitIgnoreTemplate } = require('../core/git');

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
  const isYarn = file('package-lock.json').exists()
    ? false
    : file('yarn.lock').exists()
    ? true
    : packageManager === 'yarn';
  const isYarnBerry = false;
  /**
   * setup package.json from following object
   */

  packageJson({
    name: path.basename(process.cwd()),
    version: '1.0.0-alpha.0',
    private: true,
    license: 'UNLICENSED',
    description: '',
  }).save();
  gitIgnoreTemplate(['macOS', 'NodeJS', 'VisualStudioCode']);
  if (isYarn && isYarnBerry) {
    execCommand(undefined, 'yarn', ['set', 'version', 'berry']);
    yaml('.yarnrc.yml').set('nodeLinker', 'node-modules').save();
    execCommand(undefined, 'yarn', ['install']);
  }
  npm.dependency({
    dev: true,
    name: ['mrm', mrmPreset],
    yarn: isYarn,
    state: 'present',
  });

  pkg.withPackageJson((packageFile) => {
    // Add MRM default scripts
    pkg.script(packageFile, {
      name: 'configure',
      state: 'default',
      script: `${packageManager} run mrm -- ${mrmTask}`,
    });
    pkg.script(packageFile, {
      name: 'mrm',
      state: 'default',
      script: `${packageManager} --preset ${mrmPreset}`,
    });
  });

  pkg.withPackageJson((packageFile) => {
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
