const { packageJson } = require('mrm-core');
const pkg = require('../core/pkg.js');
const npm = require('../core/npm.js');
const { gitIgnore } = require('../core/git.js');
const { eslintIgnore, eslintConfig } = require('../core/eslint.js');
const project = require('../core/project.js');
const { vscodeSettings, vscodeRecommendedExtension } = require('../core/vscode.js');

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
    const hasJSX = true;
    const hasJSON = true;
    const hasYAML = true;

    // Should be added first
    gitIgnore('ESLint', ['.eslintcache']);
    eslintIgnore([
      // List of paths to ignore
      'node_modules/',
      'coverage/',
      'build/',
      '.cache/',
      'public/',
    ]);

    // Dependencies
    npm.dependency({
      dev: true,
      name: ['eslint', '@babel/core', '@babel/eslint-parser', 'prettier'],
      state: 'present',
    });

    // Clean legacy
    npm.dependency({
      dev: true,
      name: ['@typescript-eslint/parser', '@typescript-eslint/eslint-plugin', 'babel-eslint'],
      state: 'absent',
    });

    // Preset
    npm.dependency({
      dev: true,
      name: eslintPreset,
      state: !eslintPreset.startsWith('eslint:') ? 'present' : 'absent',
    });
    eslintConfig({
      state: 'present',
      update: (config) => ({
        ...config,
        extends: [eslintPreset],
        parserOptions: {
          project: hasTypescript ? './tsconfig.json' : undefined,
          ...config.parserOptions,
        },
      }),
    });

    /** @type {Record<string, boolean>} */
    const extsMap = {
      mjs: true,
      cjs: true,
      js: true,
      jsx: hasJSX,
      ts: hasTypescript,
      tsx: hasTypescript && hasJSX,
      json: hasJSON,
      jsonc: hasJSON,
      json5: hasJSON,
      yml: hasYAML,
      yaml: hasYAML,
    };
    const extList = Object.keys(extsMap).filter((ext) => extsMap[ext]);
    const extOption = ` --ext=${extList.join(',')}`;

    pkg.withPackageJson((packageFile) => {
      const ignorePatterns = pkg
        .listWorkspaceMatchers(packageFile)
        .map((_) => ` --ignore-pattern='${_}/**'`)
        .join('');

      // workspaces
      pkg.script(packageFile, {
        name: `${project.lint}:root`,
        update: `eslint .${extOption}${hasWorkspaces ? ignorePatterns : ''}`,
        state: 'present',
      });
      pkg.script(packageFile, {
        name: `${project.format}:root`,
        update: `eslint .${extOption}${hasWorkspaces ? ignorePatterns : ''} --fix`,
        state: 'present',
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
        _ == null || _ === '' || _.trimStart().startsWith('eslint')
          ? `eslint .${format ? ' --fix' : ''}${extOption}`
          : _;
      pkg.script(packageFile, {
        name: `${project.lint}:src`,
        update: updater(),
        state: 'present',
      });
      pkg.script(packageFile, {
        name: `${project.format}:src`,
        update: updater(true),
        state: 'present',
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
        'eslint.validate': Array.from(
          new Set(
            extList.map(
              (ext) =>
                ({
                  cjs: 'javascript',
                  mjs: 'javascript',
                  jsx: 'javascriptreact',
                  js: 'javascript',
                  tsx: 'typescriptreact',
                  ts: 'typescript',
                  yaml: 'yaml',
                  yml: 'yaml',
                }[ext] || ext)
            )
          )
        ),
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
