const { gitIgnore } = require('../core/git.cjs');

function task() {
  gitIgnore(['macOS', 'NodeJS', 'VisualStudioCode', 'Git']);
}
task.description = 'Adds Gitignore file';

module.exports = task;
