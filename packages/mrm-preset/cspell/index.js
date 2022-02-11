const { cspell } = require('../core/cspell');
const { lintStaged } = require('../core/lintStaged');
const { hasGit } = require('../core/git');

function task() {
  const gitSupported = hasGit();
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

  lintStaged({
    state: gitSupported ? 'present' : 'absent',
    update: (config) => ({
      ...config,
      '*.*': ['cspell --no-must-find-files'],
    }),
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
