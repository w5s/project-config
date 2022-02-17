const { cspell } = require('../core/cspell');

function task() {
  cspell({
    state: 'present',
    update: (_) => ({
      ..._,
      ignorePaths: Array.from(
        new Set([
          '**/build/**',
          '**/lib/**',
          '**/node_modules/**',
          '**/package.json',
          '**/package-lock.json',
          '**/yarn.lock',
          '**/*.log',
          '**/CHANGELOG.md',
          ...(_.ignorePaths || []),
        ])
      ),
    }),
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
