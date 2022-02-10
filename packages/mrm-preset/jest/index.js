const { jest } = require('../core/jest');

function createJest() {
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

  return task;
}

module.exports = createJest();
