const { packageJson } = require('mrm-core');
const pkg = require('../core/pkg');
const project = require('../core/project');
const { semanticRelease } = require('../core/semanticRelease');

function task() {
  const useWorkspace = packageJson().get('mrmConfig.packageArchetype') === 'workspace';

  // release
  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: project.release,
      // eslint-disable-next-line no-template-curly-in-string
      script: useWorkspace ? 'CI=$(is-ci) lerna publish ${CI:+"--yes"}' : semanticRelease.command(),
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
