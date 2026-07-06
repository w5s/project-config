const { packageJson } = require('mrm-core');
const path = require('node:path');
const process = require('node:process');

const { gitIgnore } = require('../core/git.js');
const npm = require('../core/npm.js');
const pkg = require('../core/pkg.js');

/**
 * @param {{
 *   mrmPreset: string,
 *   mrmTask: string,
 *   packageArchetype: 'application'|'library'|'workspace',
 *   packageManager: 'npm'|'pnpm'|'yarn@classic'|'yarn@berry'
 * }} config
 * @returns {Promise<void>}
 */
async function task({ mrmPreset, mrmTask, packageManager }) {
  /**
   * setup package.json from following object
   */

  packageJson({
    description: '',
    license: 'UNLICENSED',
    name: path.basename(process.cwd()),
    private: true,
    version: '1.0.0-alpha.0',
  }).save();
  gitIgnore(['macOS', 'NodeJS', 'VisualStudioCode']);

  await npm.bootstrap(packageManager);

  // npm.dependency({
  //   dev: true,
  //   name: ['mrm', mrmPreset],
  //   state: 'present',
  // });

  pkg.withPackageJson((packageFile) => {
    // Add MRM default scripts
    pkg.script(packageFile, {
      default: `npm run mrm -- ${mrmTask}`,
      name: 'configure',
      state: 'present',
    });
    pkg.script(packageFile, {
      default: `npm exec --package=mrm --package=${mrmPreset}@latest -- mrm --preset ${mrmPreset}`,
      name: 'mrm',
      state: 'present',
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
    choices: ['pnpm', 'yarn@berry', 'yarn@classic', 'npm'],
    default: 'pnpm',
    message: 'Which default package manager ?',
    name: 'packageManager',
    type: 'input',
  },
};
module.exports = task;
