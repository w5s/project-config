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
      script: `cspell --no-progress '**' ${
        hasWorkspaces ? `${workspaceMatchers.map((_) => `--exclude='${_}/**'`).join(' ')} && turbo run spellcheck` : ''
      }`,
      state: 'present',
    });
  });
  pkg.forEachWorkspace(({ packageFile }) => {
    pkg.script(packageFile, {
      name: project.spellcheck,
      script: `cspell --no-progress '**'`,
      state: 'present',
    });
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
