const { cspell } = require('../core/cspell');
const project = require('../core/project');
const pkg = require('../core/pkg');

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
    pkg.script(packageFile, {
      name: project.spellcheck,
      script: `cspell ${hasWorkspaces ? `'*' --silent && turbo run spellcheck` : '**'}`,
      state: 'present',
    });
  });
  pkg.forEachWorkspace(({ packageFile }) => {
    pkg.script(packageFile, {
      name: project.spellcheck,
      script: `cspell '**' --silent`,
      state: 'present',
    });
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
