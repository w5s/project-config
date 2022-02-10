const { packageJson, json, makeDirs } = require('mrm-core');
const git = require('../core/git');
const pkg = require('../core/pkg');
const npm = require('../core/npm');
const { vscodeTask } = require('../core/vscode');
const project = require('../core/project');
const mrmPackageJson = require('../package.json');

function task() {
  const packageFile = packageJson();
  const gitSupported = git.hasGit();
  const useWorkspace = packageFile.get('mrmConfig.packageArchetype') === 'workspace';
  const packageManager = pkg.manager(packageFile);

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
  const lernaRun = (script) => {
    return `lerna run ${script}`;
  };
  /**
   *
   * @param {string} script
   */
  const npmRunAll = (script) => {
    return `npm-run-all -p "${script}:*"`;
  };

  // Detect git repository
  pkg.value(packageFile, {
    path: 'repository',
    state: 'present',
    update: () => {
      const gitRepository = git.remoteSync();
      if (gitRepository) {
        return {
          type: 'git',
          url: gitRepository,
        };
      }

      return undefined;
    },
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
    state: 'present',
  });
  pkg.script(packageFile, {
    name: `${project.build}:packages`,
    script: lernaRun(project.build),
    state: useWorkspace ? 'present' : 'absent',
  });
  pkg.script(packageFile, {
    name: project.clean,
    script: useWorkspace ? lernaRun(project.clean) : pkg.emptyScript,
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
    script: pkg.emptyScript,
    state: 'default',
  });
  pkg.script(packageFile, {
    name: project.format,
    script: pkg.emptyScript,
    state: 'default',
  });

  // test
  pkg.script(packageFile, {
    name: project.coverage,
    script: pkg.emptyScript,
    state: 'default',
  });
  pkg.script(packageFile, {
    name: project.test,
    script: useWorkspace ? lernaRun(project.test) : pkg.emptyScript,
    state: useWorkspace ? 'present' : 'default',
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
    state: 'default',
  });
  pkg.script(packageFile, {
    name: `${project.prepare}:packages`,
    script: 'lerna bootstrap',
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

  // workspace
  const lernaConfig = json('lerna.json', {
    version: packageFile.get('version'),
  });
  if (useWorkspace) {
    const packages = ['packages/*'];
    const versionIndependent = lernaConfig.get('version') === 'independent';
    packageFile.merge({ workspaces: { packages } });
    lernaConfig.merge({
      command: {
        publish: {
          conventionalCommits: true,
          npmClient: 'npm',
        },
        version: {
          message: `chore(release): publish${versionIndependent ? '' : ' %s'}`,
        },
      },
      npmClient: packageManager,
      useWorkspaces: useWorkspace,
    });
    lernaConfig.save();
    makeDirs('packages');
  } else {
    packageFile.unset('workspaces');
    lernaConfig.delete();
  }

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
  packageFile.save();

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['npm-run-all'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['lerna'],
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
