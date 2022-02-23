const path = require('path');
const { packageJson, template } = require('mrm-core');
const project = require('../core/project');
const pkg = require('../core/pkg');
const { hasGit } = require('../core/git');
const { gitHook, husky } = require('../core/githooks');
const { lintStaged } = require('../core/lintStaged');
const { file } = require('../core/file');

function createGitHooks() {
  function task() {
    const gitSupported = hasGit();
    const packageFile = packageJson();
    const hasESLint = pkg.hasDependency(packageFile, 'eslint', 'dev');
    const hasTsc = pkg.hasDependency(packageFile, 'typescript', 'dev');

    husky({
      state: gitSupported ? 'present' : 'absent',
    });
    lintStaged({
      state: gitSupported ? 'present' : 'absent',
      update: (config) => ({
        ...config,
        '*.json': [...(hasESLint ? ['eslint'] : [])],
        '*.js?(x)': [...(hasTsc ? ["bash -c 'tsc --noEmit'"] : []), ...(hasESLint ? ['eslint'] : [])],
        '*.ts?(x)': [...(hasTsc ? ["bash -c 'tsc --noEmit'"] : []), ...(hasESLint ? ['eslint'] : [])],
      }),
    });
    gitHook({
      name: 'pre-commit',
      content: `npm exec --no -- lint-staged`,
      state: gitSupported ? 'present' : 'absent',
    });
    gitHook({
      name: 'pre-push',
      content: `npm run ${project.validate}`,
      state: gitSupported ? 'present' : 'absent',
    });

    file({
      path: 'CODEOWNERS',
      state: gitSupported ? 'file' : 'absent',
      update: (content) =>
        content.length === 0 ? template('', path.join(__dirname, 'templates', 'CODEOWNERS')).apply().get() : undefined,
    });
  }

  task.description = 'Setup Git hooks';
  task.parameters = {};

  return task;
}

module.exports = createGitHooks();
