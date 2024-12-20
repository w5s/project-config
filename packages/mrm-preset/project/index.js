const nodePath = require('node:path');
const { packageJson, json, makeDirs } = require('mrm-core');
const git = require('../core/git.js');
const pkg = require('../core/pkg.js');
const jsonFile = require('../core/pkg.js');
const npm = require('../core/npm.js');
const { vscodeTask } = require('../core/vscode.js');
const project = require('../core/project.js');
const mrmPackageJson = require('../package.json');
const { turbo } = require('../core/turbo.js');

/**
 *
 * @param {string} script
 */
// const npmRun = (script) => {
//   switch (script) {
//     case project.install:
//     case project.test: {
//       return `npm ${script}`;
//     }
//     default: {
//       return `npm run ${script}`;
//     }
//   }
// };
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
const npmRunAll = (script, allowEmpty) => `npx run-p "${script}:*"${allowEmpty ? '' : ''}`;
function task() {
  const rootPackageFile = packageJson();
  const rootUseWorkspace = pkg.hasWorkspaces(rootPackageFile);
  const rootEngineMinVersion = {
    // @ts-ignore
    node: '>=12.x',
    yarn: '>=1.x',
    npm: '>=6.x',
    ...mrmPackageJson.engines,
  };
  const gitSupported = git.hasGit();
  const packageManager = pkg.manager(rootPackageFile);
  const gitRepository = git.remoteSync();

  // Detect git repository
  if (rootUseWorkspace) {
    const dirs = pkg.listWorkspaceMatchers(rootPackageFile).map(nodePath.dirname);
    makeDirs(dirs);
  }

  const setDefault = (/** @type {import("mrm-core").Json} */ currentPackageFile, /** @type {boolean} */ root) => {
    jsonFile.value(currentPackageFile, {
      path: 'type',
      state: 'present',
      default: 'module',
    });
    jsonFile.value(currentPackageFile, {
      path: 'sideEffect',
      state: 'present',
      default: false,
    });
    jsonFile.value(currentPackageFile, {
      path: 'license',
      state: 'present',
      update: (_) => _ ?? (root && rootUseWorkspace ? 'UNLICENSED' : undefined),
    });
    jsonFile.value(currentPackageFile, {
      path: 'version',
      state: root && rootUseWorkspace ? 'absent' : 'present',
      default: '1.0.0-alpha.0',
    });
    jsonFile.value(currentPackageFile, {
      path: 'description',
      state: 'present',
      update: (_) => _ ?? (root && rootUseWorkspace ? '' : undefined),
    });
  };
  const addScripts = (/** @type {import("mrm-core").Json} */ currentPackageFile, /** @type {boolean} */ root) => {
    const useWorkspace = pkg.hasWorkspaces(currentPackageFile);

    // build
    pkg.script(currentPackageFile, {
      name: project.build,
      update: useWorkspace ? turboRun(project.build) : npmRunAll(project.build, true),
      state: 'present',
    });

    // lint
    pkg.script(currentPackageFile, {
      name: project.lint,
      update: useWorkspace ? turboRun(project.lint) : npmRunAll(project.lint, true),
      state: 'present',
    });
    pkg.script(currentPackageFile, {
      name: project.format,
      update: useWorkspace ? `${turboRun(project.format)} --continue` : npmRunAll(project.format, true),
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
      update: useWorkspace ? turboRun(project.test) : npmRunAll(project.test, true),
      state: 'present',
      default: pkg.emptyScript,
    });

    // prepare
    pkg.script(currentPackageFile, {
      name: project.prepare,
      update: npmRunAll(project.prepare, true),
      state: 'present',
    });

    // clean
    pkg.script(currentPackageFile, {
      name: project.clean,
      update: useWorkspace ? turboRun(project.clean) : npmRunAll(project.clean, true),
      state: 'present',
    });

    // Root

    // rescue
    pkg.script(currentPackageFile, {
      name: project.rescue,
      update: `${gitSupported ? 'git clean -fdx' : ''};${packageManager} install`,
      state: root ? 'present' : 'absent',
    });

    // release
    pkg.script(currentPackageFile, {
      name: project.release,
      default: pkg.emptyScript,
      state: root ? 'present' : 'absent',
    });

    // code analysis
    pkg.script(currentPackageFile, {
      name: project.codeAnalysis,
      default: pkg.emptyScript,
      state: root ? 'present' : 'absent',
    });

    // develop & auto build & load
    pkg.script(currentPackageFile, {
      name: project.develop,
      default: pkg.emptyScript,
      state: root ? 'present' : 'absent',
    });

    // TODO: remove
    pkg.script(currentPackageFile, {
      name: `${project.clean}:packages`,
      state: 'absent',
    });
    pkg.script(currentPackageFile, {
      name: `${project.build}:packages`,
      state: 'absent',
    });
    pkg.script(currentPackageFile, {
      name: `${project.test}:packages`,
      state: 'absent',
    });
  };

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

    setDefault(packageFile, false);
    addScripts(packageFile, true);

    pkg.script(packageFile, {
      name: project.validate,
      update: `${turboRun([project.build, project.lint, project.test, project.spellcheck].join(' '))}`,
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
    setDefault(workspace.packageFile, false);
    addScripts(workspace.packageFile, false);

    // Engine
    pkg.engineMinVersion(workspace.packageFile, { node: rootEngineMinVersion.node });
  });

  // workspace
  npm.dependency({
    state: rootUseWorkspace ? 'present' : 'absent',
    name: ['@lerna-lite/publish'],
  });
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
          syncWorkspaceLock: true,
        },
        version: {
          message: gitmoji
            ? `🔖 Publish${versionIndependent ? '' : ' %s'}`
            : `chore(release): publish${versionIndependent ? '' : ' %s'}`,
        },
      },
      npmClient: packageManager,
      changelogPreset: '@w5s/conventional-changelog',
    });
    lernaConfig.save();
  } else {
    lernaConfig.delete();
  }

  rootPackageFile.save();

  // Turbo config
  turbo({
    state: 'present',
    update: (_) => ({
      ..._,
      globalEnv: Array.from(
        new Set([...(_.globalEnv ?? []), 'ASDF_*', 'CI', 'CI_*', 'DATABASE_URL', 'NODE_ENV']),
      ).sort(),
      globalDependencies: ['.tool-versions', 'tsconfig.settings.json', '**/.env.*local', '.env'],
      tasks: {
        ..._.tasks,
        [project.build]: {
          dependsOn: [`^${project.build}`, `//#${project.build}:root`],
          inputs: ['$TURBO_DEFAULT$', '.env*'],
          outputs: ['dist/**', '.next/**', '!.next/cache/**'],
        },
        [`//#${project.build}:root`]: {},
        [project.test]: {
          dependsOn: [`^${project.build}`, `//#${project.test}:root`],
        },
        [`//#${project.test}:root`]: {},
        [project.lint]: {
          dependsOn: [`^${project.build}`, `//#${project.lint}:root`],
        },
        [`//#${project.lint}:root`]: {},
        [project.prepare]: {},
        [project.format]: {
          dependsOn: [`//#${project.format}:root`],
        },
        [`//#${project.format}:root`]: {},
        [project.docs]: {
          dependsOn: [`//#${project.docs}:root`],
          cache: false,
        },
        [`//#${project.docs}:root`]: {},
        [project.spellcheck]: {
          dependsOn: [`//#${project.spellcheck}:root`],
        },
        [`//#${project.spellcheck}:root`]: {},
        [project.clean]: {
          dependsOn: [`//#${project.clean}:root`],
          cache: false,
        },
        [`//#${project.clean}:root`]: {
          cache: false,
        },
        [project.develop]: {
          cache: false,
        },
      },
    }),
  });

  // Dependencies
  // clean
  npm.dependency({
    dev: true,
    name: ['npm-run-all2'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['concurrently'],
    state: 'absent',
  });
  npm.dependency({
    dev: true,
    name: ['lerna'],
    state: 'absent',
  });
  npm.dependency({
    dev: true,
    name: ['@w5s/conventional-changelog'],
    state: 'present',
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
