const { cspell } = require('../core/cspell.js');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');

function task() {
  cspell({
    state: 'present',
    update: (_) => ({
      ..._,
      ignorePaths: Array.from(
        new Set([
          '**/dist/**',
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

  pkg.withPackageJson((packageFile) => {
    const hasWorkspaces = pkg.hasWorkspaces(packageFile);
    const workspaceMatchers = pkg.listWorkspaceMatchers(packageFile);
    pkg.script(packageFile, {
      name: project.spellcheck,
      update: `turbo run spellcheck`,
      state: 'present',
    });
    pkg.script(packageFile, {
      name: `${project.spellcheck}:root`,
      update: `cspell --no-progress '**' ${
        hasWorkspaces ? `${workspaceMatchers.map((_) => `--exclude='${_}/**'`).join(' ')}` : ''
      }`,
      state: 'present',
    });
  });
  pkg.forEachWorkspace(({ packageFile }) => {
    pkg.script(packageFile, {
      name: project.spellcheck,
      update: `cspell --no-progress '**'`,
      state: 'present',
    });
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
