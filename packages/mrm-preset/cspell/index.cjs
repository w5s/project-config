const { cspell } = require('../core/cspell.cjs');
const npm = require('../core/npm.cjs');
const pkg = require('../core/pkg.cjs');
const project = require('../core/project.cjs');

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
      state: 'present',
      update: `turbo run spellcheck`,
    });
    pkg.script(packageFile, {
      name: `${project.spellcheck}:root`,
      state: 'present',
      update: `cspell --no-progress '**' ${
        hasWorkspaces ? (workspaceMatchers.map((_) => `--exclude='${_}/**'`).join(' ')) : ''
      }`,
    });
  });
  pkg.forEachWorkspace(({ packageFile }) => {
    pkg.script(packageFile, {
      name: project.spellcheck,
      state: 'present',
      update: `cspell --no-progress '**'`,
    });
  });
}

task.description = 'Adds CSpell support';

module.exports = task;
