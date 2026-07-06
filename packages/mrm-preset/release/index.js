const { packageJson } = require('mrm-core');

const pkg = require('../core/pkg.js');
const project = require('../core/project.js');
const { semanticRelease } = require('../core/semanticRelease.js');

function task() {
  const useWorkspace = pkg.hasWorkspaces(packageJson());
  // release
  pkg.withPackageJson((packageFile) => {
    /* eslint-disable no-template-curly-in-string */
    pkg.script(packageFile, {
      name: project.release,
      state: 'present',
      update: useWorkspace
        ? '[ -n "${CI:-}" ] && npx lerna publish --yes || npx lerna publish'
        : semanticRelease.command(),
    });
  });

  // Dependencies
  semanticRelease({
    preset: '@semantic-release/gitlab-config', // TODO: cherry pick plugins depending on context (github, gitlab, etc)
    state: useWorkspace ? 'absent' : 'present',
  });
}

task.description = 'Setup release task';
task.parameters = {};

module.exports = task;
