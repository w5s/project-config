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
 */
const npmRunAll = (script) => `concurrently "npm:${script}:*"`;
function task() {
  const packageFile = packageJson();
  const gitSupported = git.hasGit();
  const useWorkspace = pkg.hasWorkspaces(packageFile);
  const packageManager = pkg.manager(packageFile);
  const gitRepository = git.remoteSync();

  // Detect git repository
  if (useWorkspace) {
    const dirs = pkg.listWorkspaceMatchers(packageFile).map(dirname);
    makeDirs(dirs);
  }

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
    });

    // build & clean
    pkg.script(packageFile, {
      name: project.build,
      script: npmRunAll(project.build),
      state: 'present',
    });
    pkg.script(packageFile, {
      name: `${project.build}:empty`,
      script: pkg.emptyScript,
      state: !useWorkspace ? 'present' : 'absent',
    });
    pkg.script(packageFile, {
      name: `${project.build}:packages`,
      script: turboRun(project.build),
      state: useWorkspace ? 'present' : 'absent',
    });
    pkg.script(packageFile, {
      name: project.clean,
      script: useWorkspace ? turboRun(project.clean) : pkg.emptyScript,
      state: useWorkspace ? 'present' : 'default',
    });

    // develop & auto build & load
    pkg.script(packageFile, {
      name: project.develop,
      script: pkg.emptyScript,
      state: 'default',
    });

    // lint
    pkg.script(packageFile, {
      name: project.lint,
      script: npmRunAll(project.lint),
      state: 'present',
    });
    pkg.script(packageFile, {
      name: `${project.lint}:empty`,
      script: pkg.emptyScript,
      state: !useWorkspace ? 'present' : 'absent',
    });
    pkg.script(packageFile, {
      name: project.format,
      script: npmRunAll(project.format),
      state: 'present',
    });
    pkg.script(packageFile, {
      name: `${project.format}:empty`,
      script: pkg.emptyScript,
      state: !useWorkspace ? 'present' : 'absent',
    });

    // test
    pkg.script(packageFile, {
      name: project.coverage,
      script: pkg.emptyScript,
      state: 'default',
    });
    pkg.script(packageFile, {
      name: project.test,
      script: npmRunAll(project.test),
      state: 'present',
    });
    pkg.script(packageFile, {
      name: project.validate,
      script: `${npmRun(project.build)} && ${npmRun(project.lint)} && ${npmRun(project.test)}`,
      state: 'present',
    });

    // code analysis
    pkg.script(packageFile, {
      name: project.codeAnalysis,
      script: pkg.emptyScript,
      state: 'default',
    });

    // prepare
    pkg.script(packageFile, {
      name: project.prepare,
      script: npmRunAll(project.prepare),
      state: 'present',
    });
    pkg.script(packageFile, {
      name: `${project.prepare}:empty`,
      script: pkg.emptyScript,
      state: !useWorkspace ? 'present' : 'absent',
    });
    pkg.script(packageFile, {
      name: `${project.prepare}:packages`,
      script: turboRun(project.prepare),
      state: useWorkspace ? 'present' : 'absent',
    });

    // rescue
    pkg.script(packageFile, {
      name: project.rescue,
      script: `${gitSupported ? 'git clean -fdx' : ''};${packageManager} install`,
      state: 'present',
    });

    // release
    pkg.script(packageFile, {
      name: project.release,
      script: pkg.emptyScript,
      state: 'default',
    });

    // Engine
    pkg.engineMinVersion(
      packageFile,
      Object.assign(
        {
          node: '>=12.x',
          yarn: '>=1.x',
          npm: '>=6.x',
        },
        mrmPackageJson.engines
      )
    );
  });

  // workspace
  const lernaConfig = json('lerna.json', {
    version: packageFile.get('version'),
  });
  if (useWorkspace) {
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
      useWorkspaces: useWorkspace,
      changelogPreset: 'gitmoji-config',
    });
    lernaConfig.save();
  } else {
    lernaConfig.delete();
  }

  packageFile.save();

  // Turbo config
  turbo({
    state: useWorkspace ? 'present' : 'absent',
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
    state: useWorkspace ? 'present' : 'absent',
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
