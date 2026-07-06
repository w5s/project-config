const githubCI = require('../core/githubCI.cjs');
const gitlabCI = require('../core/gitlabCI.cjs');
const github = require('./github.cjs');
const gitlab = require('./gitlab.cjs');

function task() {
  // check gitlab support
  if (gitlabCI.isSupported()) {
    gitlab();
  }
  if (githubCI.isSupported()) {
    github();
  }
}

task.description = 'Setup Continuous Integration';
task.parameters = {};

module.exports = task;
