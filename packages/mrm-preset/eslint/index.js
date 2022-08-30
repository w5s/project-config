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

    // Should be added first
    gitIgnore('ESLint', ['.eslintcache']);
    eslintIgnore([
      // List of paths to ignore
      'node_modules/',
      'coverage/',
      'build/',
      '.cache/',
      '.vscode/**',
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
        script: `eslint .${extOption}${ignorePatterns}`,
        state: hasWorkspaces ? 'present' : 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.format}:root`,
        script: `eslint .${extOption}${ignorePatterns} --fix`,
        state: hasWorkspaces ? 'present' : 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.lint}:packages`,
        script: `turbo run ${project.lint}`,
        state: hasWorkspaces ? 'present' : 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.format}:packages`,
        script: `turbo run ${project.format}`,
        state: hasWorkspaces ? 'present' : 'absent',
      });
      // regular package
      pkg.script(packageFile, {
        name: `${project.lint}:src`,
        script: `eslint .${extOption}`,
        state: !hasWorkspaces ? 'present' : 'absent',
      });
      pkg.script(packageFile, {
        name: `${project.format}:src`,
        script: `eslint . --fix${extOption}`,
        state: !hasWorkspaces ? 'present' : 'absent',
      });
    });
    pkg.forEachWorkspace(({ packageFile }) => {
      pkg.script(packageFile, {
        name: `${project.lint}:src`,
        script: `eslint .${extOption}`,
        state: 'default',
      });
      pkg.script(packageFile, {
        name: `${project.format}:src`,
        script: `eslint . --fix${extOption}`,
        state: 'default',
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
