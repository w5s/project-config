const { packageJson } = require('mrm-core');
const pkg = require('../core/pkg.js');
const project = require('../core/project.js');
const { semanticRelease } = require('../core/semanticRelease.js');

function task() {
  const useWorkspace = pkg.hasWorkspaces(packageJson());

  // release
  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: project.release,
      update:
        // eslint-disable-next-line no-template-curly-in-string
        useWorkspace ? '[ -n "${CI:-}" ] && npx lerna publish --yes || npx lerna publish' : semanticRelease.command(),
      state: 'present',
    });
  });

  // Dependencies
  semanticRelease({
    state: useWorkspace ? 'absent' : 'present',
    preset: '@semantic-release/gitlab-config', // TODO: cherry pick plugins depending on context (github, gitlab, etc)
  });
}

task.description = 'Setup release task';
task.parameters = {};

module.exports = task;
