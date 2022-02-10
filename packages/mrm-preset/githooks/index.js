const path = require('path');
const { packageJson, template } = require('mrm-core');
const project = require('../core/project');
const { hasGit } = require('../core/git');
const { gitHook, husky } = require('../core/githooks');
const { lintStaged } = require('../core/lintStaged');
const { file } = require('../core/file');

function createGitHooks() {
  function task() {
    const gitSupported = hasGit();
    const packageFile = packageJson();
    const hasESLint = Boolean(packageFile.get('devDependencies.eslint'));
    const hasJest = Boolean(packageFile.get('devDependencies.jest'));
    const hasTsc = Boolean(packageFile.get('devDependencies.typescript'));

    husky({
      state: gitSupported ? 'present' : 'absent',
    });
    lintStaged({
      state: gitSupported ? 'present' : 'absent',
      update: (config) => ({
        ...config,
        '*.json': [...(hasESLint ? ['eslint'] : [])],
        '*.js?(x)': [
          ...(hasTsc ? ["bash -c 'tsc --noEmit'"] : []),
          ...(hasESLint ? ['eslint'] : []),
          ...(hasJest ? ['jest --ci --bail --findRelatedTests'] : []),
        ],
        '*.ts?(x)': [
          ...(hasTsc ? ["bash -c 'tsc --noEmit'"] : []),
          ...(hasESLint ? ['eslint'] : []),
          ...(hasJest ? ['jest --ci --bail --findRelatedTests'] : []),
        ],
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
