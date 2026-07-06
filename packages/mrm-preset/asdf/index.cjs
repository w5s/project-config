const { asdfConfig } = require('../core/asdf.cjs');

function task() {
  asdfConfig({
    state: 'present',
    update: (config) => ({
      nodejs: '18.17.0',
      ...config,
    }),
  });
}

task.description = 'Configure ASDF';
task.parameters = {};

module.exports = task;
