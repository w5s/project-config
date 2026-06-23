const { cspell } = require('../core/cspell.js');
const project = require('../core/project.js');
const pkg = require('../core/pkg.js');
const npm = require('../core/npm.js');

function task() {
  const preset = '@w5s/cspell-config';
  cspell({
    state: 'present',
    update: (_) => ({
      ..._,
      import: [preset],
    }),
  });
  npm.dependency({
    dev: true,
    name: [preset],
    state: 'present',
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
