const { dirname } = require('node:path');
const { packageJson, json, makeDirs } = require('mrm-core');
const git = require('../core/git.js');
const pkg = require('../core/pkg.js');
const npm = require('../core/npm.js');
const { vscodeTask } = require('../core/vscode.js');
const project = require('../core/project.js');
const mrmPackageJson = require('../package.json');
const { turbo } = require('../core/turbo.js');

/**
 *
 * @param {string} script
 */
const npmRun = (script) => {
  switch (script) {
    case project.install:
    case project.test:
      return `npm ${script}`;
    default:
      return `npm run ${script}`;
  }
};
/**
 *
 * @param {string} script
 */
const turboRun = (script) => `turbo run ${script}`;

/**
 *
 * @param {string} script
 * @param {boolean} allowEmpty
 */
const npmRunAll = (script, allowEmpty) => `concurrently "npm:${script}:*" ${allowEmpty ? `"${pkg.emptyScript}"` : ''}`;
function task() {
  const rootPackageFile = packageJson();
  const rootUseWorkspace = pkg.hasWorkspaces(rootPackageFile);
  const rootEngineMinVersion = Object.assign(
    {
      node: '>=12.x',
      yarn: '>=1.x',
      npm: '>=6.x',
    },
    mrmPackageJson.engines
  );
  const gitSupported = git.hasGit();
  const packageManager = pkg.manager(rootPackageFile);
  const gitRepository = git.remoteSync();

  // Detect git repository
  if (rootUseWorkspace) {
    const dirs = pkg.listWorkspaceMatchers(rootPackageFile).map(dirname);
    makeDirs(dirs);
  }

  const addScripts = (/** @type {import("mrm-core").Json} */ currentPackageFile, /** @type {boolean} */ root) => {
    const useWorkspace = pkg.hasWorkspaces(currentPackageFile);

    // build
    pkg.script(currentPackageFile, {
      name: project.build,
      script: npmRunAll(project.build, false),
      state: 'present',
    });
    pkg.script(currentPackageFile, {
      name: `${project.build}:packages`,
      script: turboRun(project.build),
      state: useWorkspace ? 'present' : 'absent',
    });

    // lint
    pkg.script(currentPackageFile, {
      name: project.lint,
      script: npmRunAll(project.lint, true),
      state: 'present',
    });
    pkg.script(currentPackageFile, {
      name: project.format,
      script: npmRunAll(project.format, true),
      state: 'present',
    });

    // test
    // pkg.script(currentPackageFile, {
    //   name: project.coverage,
    //   script: pkg.emptyScript,
    //   state: 'default',
    // });
    pkg.script(currentPackageFile, {
      name: project.test,
      script: useWorkspace ? npmRunAll(project.test, false) : pkg.emptyScript,
      state: useWorkspace ? 'present' : 'default',
    });

    // prepare
    pkg.script(currentPackageFile, {
      name: project.prepare,
      script: npmRunAll(project.prepare, true),
      state: 'present',
    });

    // clean
    pkg.script(currentPackageFile, {
      name: project.clean,
      script: npmRunAll(project.clean, true),
      state: 'present',
    });
    pkg.script(currentPackageFile, {
      name: `${project.clean}:packages`,
      script: turboRun(project.clean),
      state: useWorkspace ? 'present' : 'absent',
    });

    // Root

    // rescue
    pkg.script(currentPackageFile, {
      name: project.rescue,
      script: `${gitSupported ? 'git clean -fdx' : ''};${packageManager} install`,
      state: root ? 'present' : 'absent',
    });

    // release
    pkg.script(currentPackageFile, {
      name: project.release,
      script: pkg.emptyScript,
      state: root ? 'default' : 'absent',
    });

    // code analysis
    pkg.script(currentPackageFile, {
      name: project.codeAnalysis,
      script: pkg.emptyScript,
      state: root ? 'default' : 'absent',
    });

    // develop & auto build & load
    pkg.script(currentPackageFile, {
      name: project.develop,
      script: pkg.emptyScript,
      state: root ? 'default' : 'absent',
    });
  };

  // eslint-disable-next-line no-shadow
  pkg.withPackageJson((packageFile) => {
    pkg.value(packageFile, {
      path: 'repository',
      state: 'present',
      update: () =>
        gitRepository
          ? {
              type: 'git',
              url: gitRepository,
            }
          : undefined,
    });

    addScripts(packageFile, true);

    pkg.script(packageFile, {
      name: project.validate,
      script: `${npmRun(project.build)} && ${npmRun(project.lint)} && ${npmRun(project.test)}`,
      state: 'present',
    });

    // Engine
    pkg.engineMinVersion(packageFile, rootEngineMinVersion);
  });
  pkg.forEachWorkspace((workspace) => {
    pkg.value(workspace.packageFile, {
      path: 'repository',
      state: 'present',
      update: () =>
        gitRepository
          ? {
              type: 'git',
              url: gitRepository,
              directory: workspace.projectDir,
            }
          : undefined,
    });
    addScripts(workspace.packageFile, false);
  });

  // workspace
  const lernaConfig = json('lerna.json', {
    version: rootPackageFile.get('version'),
  });
  if (rootUseWorkspace) {
    const versionIndependent = lernaConfig.get('version') === 'independent';
    const gitmoji = true;

    lernaConfig.merge({
      $schema: 'https://json.schemastore.org/lerna.json',
      command: {
        publish: {
          conventionalCommits: true,
          npmClient: 'npm',
        },
        version: {
          message: gitmoji
            ? `🔖 Publish${versionIndependent ? '' : ' %s'}`
            : `chore(release): publish${versionIndependent ? '' : ' %s'}`,
        },
      },
      npmClient: packageManager,
      useWorkspaces: rootUseWorkspace,
      changelogPreset: 'gitmoji-config',
    });
    lernaConfig.save();
  } else {
    lernaConfig.delete();
  }

  rootPackageFile.save();

  // Turbo config
  turbo({
    state: rootUseWorkspace ? 'present' : 'absent',
    update: (_) => ({
      ..._,
      baseBranch: 'origin/main',
      pipeline: {
        [project.build]: {
          dependsOn: ['^build'],
          outputs: ['lib/**', 'dist/**', '.next/**'],
        },
        [project.test]: {},
        [project.lint]: {},
        [project.prepare]: {},
        [project.format]: {},
        [project.docs]: {},
        [project.spellcheck]: {},
        [project.clean]: {
          cache: false,
        },
        [project.develop]: {
          cache: false,
        },
      },
      globalDependencies: ['tsconfig.settings.json'],
    }),
  });

  // Dependencies
  // clean
  npm.dependency({
    dev: true,
    name: ['npm-run-all'],
    state: 'absent',
  });
  npm.dependency({
    dev: true,
    name: ['concurrently'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['lerna', 'conventional-changelog-gitmoji-config'],
    state: rootUseWorkspace ? 'present' : 'absent',
  });

  // VSCode
  vscodeTask({
    group: {
      isDefault: true,
      kind: 'build',
    },
    script: 'build',
    type: 'npm',
  });
  vscodeTask({
    group: {
      isDefault: true,
      kind: 'test',
    },
    script: 'test',
    type: 'npm',
  });
}

task.description = 'Init project';
task.parameters = {};

module.exports = task;
