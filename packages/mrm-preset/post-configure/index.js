const { spawnSync } = require('node:child_process');
const { packageJson } = require('mrm-core');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');
const npm = require('../core/npm.js');

function task() {
  // Remove old deps
  npm.dependency({
    dev: true,
    name: ['is-ci', '@commitlint/cli', 'lint-staged', 'mrm'],
    state: 'absent',
  });

  const packageFile = packageJson();
  const packageManager = pkg.manager(packageFile);
  const formatResult = spawnSync(packageManager, ['run', project.format]);
  if (formatResult.status !== 0) {
    // eslint-disable-next-line no-console
    console.error('Error: to format code\n', formatResult.output.join(''));
  }
}
task.description = 'Sort scripts';

module.exports = task;
