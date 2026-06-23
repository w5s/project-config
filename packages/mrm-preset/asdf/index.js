const { asdfConfig } = require('../core/asdf.js');

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
