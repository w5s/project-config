const path = require('node:path');
const { packageJson } = require('mrm-core');
const npm = require('../core/npm.js');
const pkg = require('../core/pkg.js');
const { gitIgnoreTemplate } = require('../core/git.js');

/**
 * @param {{
 *   mrmPreset: string,
 *   mrmTask: string,
 *   packageArchetype: 'application'|'library'|'workspace',
 *   packageManager: 'npm'|'yarn@classic'|'yarn@berry'
 * }} config
 * @returns {void}
 */
function task({ mrmPreset, mrmTask, packageManager }) {
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

  npm.bootstrap(packageManager);

  npm.dependency({
    dev: true,
    name: ['mrm', mrmPreset],
    state: 'present',
  });

  pkg.withPackageJson((packageFile) => {
    const currentPackageManager = pkg.manager(packageFile);

    // Add MRM default scripts
    pkg.script(packageFile, {
      name: 'configure',
      state: 'present',
      default: currentPackageManager === 'npm' ? `npm run mrm -- ${mrmTask}` : `yarn mrm ${mrmTask}`,
    });
    pkg.script(packageFile, {
      name: 'mrm',
      state: 'present',
      default: `mrm --preset ${mrmPreset}`,
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
  packageManager: {
    default: 'yarn@berry',
    choices: ['yarn@berry', 'yarn@classic', 'npm'],
    message: 'Which default package manager ?',
    name: 'packageManager',
    type: 'input',
  },
};
module.exports = task;
