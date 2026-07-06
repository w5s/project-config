const githubCI = require('../core/githubCI.js');
const gitlabCI = require('../core/gitlabCI.js');
const github = require('./github.js');
const gitlab = require('./gitlab.js');

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
