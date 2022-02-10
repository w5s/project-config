const gitlabCI = require('../core/gitlabCI');
const gitlab = require('./gitlab');

function task() {
  // check gitlab support
  if (gitlabCI.isSupported()) {
    gitlab();
  }
}

task.description = 'Setup Continuous Integration';
task.parameters = {};

module.exports = task;
