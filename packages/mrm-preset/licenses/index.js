const { packageJson } = require('mrm-core');

const jsonFile = require('../core/jsonFile.js');
const pkg = require('../core/pkg.js');

function task() {
  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      default: 'UNLICENSED',
      path: 'license',
      state: 'present',
    });
  });
  const license = packageJson().get('license');

  pkg.forEachWorkspace(({ packageFile }) => {
    jsonFile.value(packageFile, {
      default: license,
      path: 'license',
      state: 'present',
    });
  });
}

task.description = 'Setup License';
task.parameters = {};
module.exports = task;
