const { gitIgnore } = require('../core/git');

/**
 *
 * @param {string} templatePath
 * @param {Array<string>} flags
 */
function createGitIgnore(templatePath, flags) {
  function task() {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const templateMap = require(templatePath);

    flags.forEach((flag) => {
      if (templateMap[flag]) {
        gitIgnore(flag, templateMap[flag]);
      }
    });
  }

  task.description = 'Adds Gitignore file';

  return task;
}

module.exports = createGitIgnore(require.resolve('./template'), ['macOS', 'NodeJS', 'VisualStudioCode']);
