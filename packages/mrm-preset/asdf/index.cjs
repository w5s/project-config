const { toolVersionsSync } = require('@w5s/configurator-core');

function task() {
  toolVersionsSync({
    state: 'present',
    update: (config) => ({
      nodejs: '26.13.0',
      ...config,
    }),
  });
}

task.description = 'Configure ASDF';
task.parameters = {};

module.exports = task;
