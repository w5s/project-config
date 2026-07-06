const { json, makeDirs, packageJson } = require('mrm-core');
const nodePath = require('node:path');

const git = require('../core/git.cjs');
const npm = require('../core/npm.cjs');
const pkg = require('../core/pkg.cjs');
const jsonFile = require('../core/pkg.cjs');
const project = require('../core/project.cjs');
const { turbo } = require('../core/turbo.cjs');
const { vscodeTask } = require('../core/vscode.cjs');
const mrmPackageJson = require('../package.json');

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

function task() {
  const rootPackageFile = packageJson();
  const rootUseWorkspace = pkg.hasWorkspaces(rootPackageFile);
  const rootEngineMinVersion = {
    // @ts-ignore
    node: '>=12.x',
    npm: '>=6.x',
    pnpm: '>=10.x',
    yarn: '>=1.x',
    ...mrmPackageJson.engines,
  };
  const gitSupported = git.hasGit();
  const packageManager = pkg.manager(rootPackageFile);
  const gitRepository = git.remoteSync();

  /**
   *
   * @param {string} script
   * @param {boolean} allowEmpty
   */
  const npmRunAll = (script, allowEmpty) =>
    (packageManager === 'pnpm' ? `pnpm run "/^${script}:.*/"` : `npx run-p "${script}:*"${allowEmpty ? '' : ''}`);

  // Detect git repository
  if (rootUseWorkspace) {
    const dirs = pkg.listWorkspaceMatchers(rootPackageFile).map(nodePath.dirname);
    makeDirs(dirs);
  }

  const setDefault = (/** @type {import("mrm-core").Json} */ currentPackageFile, /** @type {boolean} */ root) => {
    jsonFile.value(currentPackageFile, {
      default: 'module',
      path: 'type',
      state: 'present',
    });
    jsonFile.value(currentPackageFile, {
      default: false,
      path: 'sideEffect',
      state: 'present',
    });
    jsonFile.value(currentPackageFile, {
      path: 'license',
      state: 'present',
      update: (_) => _ ?? (root && rootUseWorkspace ? 'UNLICENSED' : undefined),
    });
    jsonFile.value(currentPackageFile, {
      default: '1.0.0-alpha.0',
      path: 'version',
      state: root && rootUseWorkspace ? 'absent' : 'present',
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
      state: 'present',
      update: useWorkspace ? turboRun(project.build) : npmRunAll(project.build, true),
    });

    // lint
    pkg.script(currentPackageFile, {
      name: project.lint,
      state: 'present',
      update: useWorkspace ? turboRun(project.lint) : npmRunAll(project.lint, true),
    });
    pkg.script(currentPackageFile, {
      name: project.format,
      state: 'present',
      update: useWorkspace ? `${turboRun(project.format)} --continue` : npmRunAll(project.format, true),
    });

    // test
    // pkg.script(currentPackageFile, {
    //   name: project.coverage,
    //   script: pkg.emptyScript,
    //   state: 'default',
    // });
    pkg.script(currentPackageFile, {
      default: pkg.emptyScript,
      name: project.test,
      state: 'present',
      update: useWorkspace ? turboRun(project.test) : npmRunAll(project.test, true),
    });
    pkg.script(currentPackageFile, {
      default: pkg.emptyScript,
      name: project.typecheck,
      state: 'present',
      update: useWorkspace ? turboRun(project.typecheck) : npmRunAll(project.typecheck, true),
    });

    // prepare
    pkg.script(currentPackageFile, {
      name: project.prepare,
      state: 'present',
      update: npmRunAll(project.prepare, true),
    });

    // clean
    pkg.script(currentPackageFile, {
      name: project.clean,
      state: 'present',
      update: useWorkspace ? turboRun(project.clean) : npmRunAll(project.clean, true),
    });

    // Root

    // rescue
    pkg.script(currentPackageFile, {
      name: project.rescue,
      state: root ? 'present' : 'absent',
      update: `${gitSupported ? 'git clean -fdx' : ''};${packageManager} install`,
    });

    // release
    pkg.script(currentPackageFile, {
      default: pkg.emptyScript,
      name: project.release,
      state: root ? 'present' : 'absent',
    });

    // code analysis
    pkg.script(currentPackageFile, {
      default: pkg.emptyScript,
      name: project.codeAnalysis,
      state: root ? 'present' : 'absent',
    });

    // develop & auto build & load
    pkg.script(currentPackageFile, {
      default: pkg.emptyScript,
      name: project.develop,
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
        (gitRepository
          ? {
              type: 'git',
              url: gitRepository,
            }
          : undefined),
    });

    setDefault(packageFile, false);
    addScripts(packageFile, true);

    pkg.script(packageFile, {
      name: project.validate,
      state: 'present',
      update: turboRun([project.build, project.lint, project.test, project.typecheck, project.spellcheck].join(' ')),
    });

    // Engine
    pkg.engineMinVersion(packageFile, rootEngineMinVersion);
  });
  pkg.forEachWorkspace((workspace) => {
    pkg.value(workspace.packageFile, {
      path: 'repository',
      state: 'present',
      update: () =>
        (gitRepository
          ? {
              directory: workspace.projectDir,
              type: 'git',
              url: gitRepository,
            }
          : undefined),
    });
    setDefault(workspace.packageFile, false);
    addScripts(workspace.packageFile, false);

    // Engine
    pkg.engineMinVersion(workspace.packageFile, { node: rootEngineMinVersion.node });
  });

  // workspace
  npm.dependency({
    name: ['@lerna-lite/publish'],
    state: rootUseWorkspace ? 'present' : 'absent',
  });
  const lernaConfig = json('lerna.json', {
    version: rootPackageFile.get('version'),
  });
  if (rootUseWorkspace) {
    const versionIndependent = lernaConfig.get('version') === 'independent';
    const gitmoji = true;

    lernaConfig.merge({
      $schema: 'https://json.schemastore.org/lerna.json',
      changelogPreset: '@w5s/conventional-changelog',
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
    });
    lernaConfig.save();
  } else {
    lernaConfig.delete();
  }

  rootPackageFile.save();

  const packageInputs = ['$TURBO_DEFAULT$', '.env*'];
  const rootInputs = [
    ...packageInputs,
    // Ignore workspaces
    // eslint-disable-next-line e18e/prefer-static-regex
    ...pkg.listWorkspaceMatchers(rootPackageFile).map((_) => `!${_.replace(/\/\*$/, '/**')}`),
  ];

  // Turbo config
  turbo({
    state: 'present',
    update: (_) => ({
      ..._,
      globalDependencies: ['.tool-versions', 'tsconfig.settings.json', '**/.env.*local', '.env'],
      // eslint-disable-next-line unicorn/no-array-sort
      globalEnv: [...new Set([...(_.globalEnv ?? []), 'ASDF_*', 'CI', 'DATABASE_URL', 'NODE_ENV'])].sort((left, right) => left.localeCompare(right)),
      tasks: {
        ..._.tasks,
        [`//#${project.build}:root`]: {
          inputs: rootInputs,
        },
        [`//#${project.clean}:root`]: {
          cache: false,
        },
        [`//#${project.docs}:root`]: {
          inputs: rootInputs,
        },
        [`//#${project.format}:root`]: {
          inputs: rootInputs,
        },
        [`//#${project.lint}:root`]: {
          inputs: rootInputs,
        },
        [`//#${project.spellcheck}:root`]: {
          inputs: rootInputs,
        },
        [`//#${project.test}:root`]: {
          inputs: rootInputs,
        },
        [project.build]: {
          dependsOn: [`^${project.build}`, `//#${project.build}:root`],
          inputs: packageInputs,
          outputs: ['dist/**', '.next/**', '!.next/cache/**'],
        },
        [project.clean]: {
          cache: false,
          dependsOn: [`//#${project.clean}:root`],
        },
        [project.develop]: {
          cache: false,
          persistent: true,
        },
        [project.docs]: {
          cache: false,
          dependsOn: [`//#${project.docs}:root`],
        },
        [project.format]: {
          dependsOn: [`//#${project.format}:root`],
        },
        [project.lint]: {
          dependsOn: [`^${project.build}`, `//#${project.lint}:root`],
        },
        [project.prepare]: {},
        [project.spellcheck]: {
          dependsOn: [`//#${project.spellcheck}:root`],
        },
        [project.test]: {
          dependsOn: [`^${project.build}`, `//#${project.test}:root`],
        },
        [project.typecheck]: {
          dependsOn: [project.build, `^${project.build}`],
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
