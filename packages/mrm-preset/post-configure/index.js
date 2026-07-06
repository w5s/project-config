const { packageJson } = require('mrm-core');
const { spawnSync } = require('node:child_process');

const npm = require('../core/npm.js');
const pkg = require('../core/pkg.js');
const project = require('../core/project.js');

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
