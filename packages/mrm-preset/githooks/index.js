const { fileSync } = require('@w5s/configurator-core');
const { packageJson, template } = require('mrm-core');
const path = require('node:path');

const { hasGit } = require('../core/git.js');
const { gitHook } = require('../core/githooks.js');
const { lintStaged } = require('../core/lintStaged.js');
const pkg = require('../core/pkg.js');
const project = require('../core/project.js');

function task() {
  const gitSupported = hasGit();
  const packageFile = packageJson();
  const hasESLint = pkg.hasDependency(packageFile, 'eslint', 'dev');

  lintStaged({
    state: gitSupported ? 'present' : 'absent',
    update: (config) => ({
      ...config,
      '*.js?(x)': [...(hasESLint ? ['eslint'] : [])],
      '*.ts?(x)': [
        // TODO: https://github.com/okonet/lint-staged/issues/825
        // ...(hasTsc ? ["tsc --noEmit --skipLibCheck"] : []),
        ...(hasESLint ? ['eslint'] : []),
      ],
      '*.{json,jsonc,json5}': [...(hasESLint ? ['eslint'] : [])],
      '*.{yml,yaml}': [...(hasESLint ? ['eslint'] : [])],
    }),
  });
  pkg.withPackageJson((_packageFile) => {
    pkg.script(_packageFile, {
      name: `${project.prepare}:githooks`,
      state: gitSupported ? 'present' : 'absent',

      // eslint-disable-next-line no-template-curly-in-string
      update: (_) => 'if [ -z "${CI:-}" ]; then git config core.hooksPath .githooks; fi',
    });
  });

  gitHook({
    content: `npm exec -- lint-staged`,
    name: 'pre-commit',
    state: gitSupported ? 'present' : 'absent',
  });
  gitHook({
    content: `npm run ${project.validate}`,
    name: 'pre-push',
    state: gitSupported ? 'present' : 'absent',
  });

  fileSync({
    path: 'CODEOWNERS',
    state: gitSupported ? 'present' : 'absent',
    update: (content) =>
      (content.length === 0
        ? template('', path.join(__dirname, 'templates', 'CODEOWNERS'))
            .apply()
            .get()
        : undefined),
  });
}

task.description = 'Setup Git hooks';
task.parameters = {};

module.exports = task;
