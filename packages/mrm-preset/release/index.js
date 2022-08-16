const { packageJson } = require('mrm-core');
const { changesets } = require('../core/changesets.js');
const pkg = require('../core/pkg.js');
const project = require('../core/project.js');
const { semanticRelease } = require('../core/semanticRelease.js');

function task() {
  const useWorkspace = pkg.hasWorkspaces(packageJson());

  if (useWorkspace) {
    pkg.withPackageJson((packageFile) => {
      pkg.script(packageFile, {
        name: project.release,
        script: 'changeset publish',
        state: 'present',
      });
      pkg.script(packageFile, {
        name: 'version',
        script: 'changeset version',
        state: 'present',
      });
    });
    changesets({
      state: useWorkspace ? 'present' : 'absent',
      update: (config) => config,
    });
  } else {
    pkg.withPackageJson((packageFile) => {
      pkg.script(packageFile, {
        name: project.release,
        // eslint-disable-next-line no-template-curly-in-string
        script: semanticRelease.command(),
        state: 'present',
      });
    });
    semanticRelease({
      state: useWorkspace ? 'absent' : 'present',
      preset: '@semantic-release/gitlab-config', // TODO: cherry pick plugins depending on context (github, gitlab, etc)
    });
  }
}

task.description = 'Setup release task';
task.parameters = {};

module.exports = task;
