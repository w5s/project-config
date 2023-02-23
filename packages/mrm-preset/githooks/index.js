const path = require('node:path');
const { packageJson, template } = require('mrm-core');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');
const { hasGit } = require('../core/git.js');
const { gitHook, husky } = require('../core/githooks.js');
const { lintStaged } = require('../core/lintStaged.js');
const { file } = require('../core/file.js');

function task() {
  const gitSupported = hasGit();
  const packageFile = packageJson();
  const hasESLint = pkg.hasDependency(packageFile, 'eslint', 'dev');

  husky({
    state: gitSupported ? 'present' : 'absent',
  });
  lintStaged({
    state: gitSupported ? 'present' : 'absent',
    update: (config) => ({
      ...config,
      '*.{json,jsonc,json5}': [...(hasESLint ? ['eslint'] : [])],
      '*.{yml,yaml}': [...(hasESLint ? ['eslint'] : [])],
      '*.js?(x)': [...(hasESLint ? ['eslint'] : [])],
      '*.ts?(x)': [
        // TODO: https://github.com/okonet/lint-staged/issues/825
        // ...(hasTsc ? ["tsc --noEmit --skipLibCheck"] : []),
        ...(hasESLint ? ['eslint'] : []),
      ],
    }),
  });
  gitHook({
    name: 'pre-commit',
    content: `npm exec -- lint-staged`,
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

module.exports = task;
