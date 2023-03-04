const { vitest } = require('../core/vitest.js');

/**
 *
 */
function task() {
  vitest({
    state: 'present',
  });
}

task.description = 'Setup Vitest';
task.parameters = {};

module.exports = task;
