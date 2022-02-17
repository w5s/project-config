const { gitIgnoreTemplate } = require('../core/git');

function task() {
  gitIgnoreTemplate(['macOS', 'NodeJS', 'VisualStudioCode']);
}
task.description = 'Adds Gitignore file';
