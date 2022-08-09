const { packageJson } = require('mrm-core');
const pkg = require('../core/pkg.js');
const jsonFile = require('../core/jsonFile.js');

function task() {
  pkg.withPackageJson((packageFile) => {
    jsonFile.value(packageFile, {
      path: 'license',
      state: 'present',
      default: 'UNLICENSED',
    });
  });
  const license = packageJson().get('license');

  pkg.forEachWorkspace(({ packageFile }) => {
    jsonFile.value(packageFile, {
      path: 'license',
      state: 'present',
      default: license,
    });
  });
}

task.description = 'Setup License';
task.parameters = {};
module.exports = task;
