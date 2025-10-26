const path = require('node:path');
const { packageJson, template } = require('mrm-core');
const { fileSync } = require('@w5s/dev');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');
const { hasGit } = require('../core/git.js');
const { gitHook } = require('../core/githooks.js');
const { lintStaged } = require('../core/lintStaged.js');

function task() {
  const gitSupported = hasGit();
  const packageFile = packageJson();
  const hasESLint = pkg.hasDependency(packageFile, 'eslint', 'dev');

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
  pkg.withPackageJson((_packageFile) => {
    pkg.script(_packageFile, {
      name: `${project.prepare}:githooks`,
      state: gitSupported ? 'present' : 'absent',

      update: (_) => 'if [ -z "${CI:-}" ]; then git config core.hooksPath .githooks; fi',
    });
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

  fileSync({
    path: 'CODEOWNERS',
    state: gitSupported ? 'present' : 'absent',
    update: (content) =>
      content.length === 0
        ? template('', path.join(__dirname, 'templates', 'CODEOWNERS'))
            .apply()
            .get()
        : undefined,
  });
}

task.description = 'Setup Git hooks';
task.parameters = {};

module.exports = task;
