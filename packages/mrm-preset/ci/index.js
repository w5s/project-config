const gitlabCI = require('../core/gitlabCI');
const githubCI = require('../core/githubCI');
const gitlab = require('./gitlab');
const github = require('./github');

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
