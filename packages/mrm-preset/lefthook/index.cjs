const { fileSync } = require('@w5s/configurator-core');

const { hasGit } = require('../core/git.cjs');
const npm = require('../core/npm.cjs');

const config = `extends:
  - node_modules/@w5s/lefthook-config/default.yml
`;

function task() {
  const state = hasGit() ? 'present' : 'absent';

  npm.dependency({
    dev: true,
    name: {
      '@w5s/lefthook-config': '^0.1.0',
      'lefthook': '^2.0.0',
    },
    state,
  });

  fileSync({
    path: 'lefthook.yml',
    state,
    update: () => config,
  });
}

task.description = 'Setup Lefthook';
task.parameters = {};

module.exports = task;
