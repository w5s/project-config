const { gitIgnoreTemplate } = require('../core/git.js');

function task() {
  gitIgnoreTemplate(['macOS', 'NodeJS', 'VisualStudioCode']);
}
task.description = 'Adds Gitignore file';

module.exports = task;
