const { vitest } = require('../core/vitest.cjs');

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
