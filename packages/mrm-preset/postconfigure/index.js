const { spawnSync } = require('child_process');
const { packageJson } = require('mrm-core');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');

function task() {
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
