const gitlabCI = require('../core/gitlabCI.js');
const githubCI = require('../core/githubCI.js');
const gitlab = require('./gitlab.js');
const github = require('./github.js');

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
