const { packageJson } = require('mrm-core');

const { eslintConfig } = require('../core/eslint.js');
const npm = require('../core/npm.js');
const pkg = require('../core/pkg.js');
const project = require('../core/project.js');
const { vscodeRecommendedExtension, vscodeSettings } = require('../core/vscode.js');

function createESLint({ eslintPreset: eslintPresetDefault = 'eslint:recommended' }) {
  /**
   *
   * @param {{
   *   eslintPreset: string,
   * }} config
   */
  function task({ eslintPreset }) {
    const packageFileDefault = packageJson();
    const hasWorkspaces = pkg.hasWorkspaces(packageFileDefault);
    const hasTypescript = pkg.hasDependency(packageFileDefault, 'typescript', 'dev');

    // Dependencies
    npm.dependency({
      dev: true,
      name: ['eslint', 'prettier'],
      state: 'present',
    });

    // Preset
    npm.dependency({
      dev: true,
      name: eslintPreset,
      state: eslintPreset.startsWith('eslint:') ? 'absent' : 'present',
    });
    eslintConfig({
      state: 'present',
      update: (config) => ({
        ...config,
        extends: [eslintPreset],
        parserOptions: {
          project: hasTypescript ? './tsconfig.json' : undefined,
          // @ts-ignore FIXME: implement for eslint v9
          ...config.parserOptions,
        },
      }),
    });

    const extOption = ''; // ` --ext=${extList.join(',')}`;

    pkg.withPackageJson((packageFile) => {
      const ignorePatterns = pkg
        .listWorkspaceMatchers(packageFile)
        .map((_) => ` --ignore-pattern='${_}/**'`)
        .join('');

      // workspaces
      pkg.script(packageFile, {
        name: `${project.lint}:root`,
        state: 'present',
        update: `eslint .${extOption}${hasWorkspaces ? ignorePatterns : ''}`,
      });
      pkg.script(packageFile, {
        name: `${project.format}:root`,
        state: 'present',
        update: `eslint .${extOption}${hasWorkspaces ? ignorePatterns : ''} --fix`,
      });

      // clean
      pkg.script(packageFile, {
        name: `${project.lint}:packages`,
        state: 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.format}:packages`,
        state: 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.lint}:src`,
        state: 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.format}:src`,
        state: 'absent',
      });
    });
    pkg.forEachWorkspace(({ packageFile }) => {
      const updater = (/** @type {boolean} */ format) => (/** @type {string} */ _) =>
        (_ == null || _ === '' || _.trimStart().startsWith('eslint')
          ? `eslint .${format ? ' --fix' : ''}${extOption}`
          : _);
      pkg.script(packageFile, {
        name: `${project.lint}:src`,
        state: 'present',
        update: updater(false),
      });
      pkg.script(packageFile, {
        name: `${project.format}:src`,
        state: 'present',
        update: updater(true),
      });
    });

    // VSCode support
    vscodeRecommendedExtension({
      name: 'dbaeumer.vscode-eslint',
      state: 'present',
    });
    vscodeSettings({
      state: 'present',
      update: (settings) => ({
        ...settings,
        'editor.codeActionsOnSave': settings['editor.codeActionsOnSave'] || {
          'source.fixAll': true,
        },
        'eslint.validate': undefined, // remove
      }),
    });
  }

  task.description = 'Setup ESLint';
  task.parameters = {
    eslintPreset: {
      default: eslintPresetDefault,
      message: 'Enter ESLint preset name',
      type: 'input',
    },
  };

  return task;
}

module.exports = createESLint({
  eslintPreset: '@w5s/eslint-config',
});
