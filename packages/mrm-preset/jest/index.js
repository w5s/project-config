const { jest } = require('../core/jest');

/**
 *
 */
function task() {
  jest({
    state: 'present',
  });
}

task.description = 'Setup Jest';
task.parameters = {};

module.exports = task;
