const { packageJson } = require('mrm-core');
const pkg = require('../core/pkg');
const npm = require('../core/npm');
const { gitIgnore } = require('../core/git');
const { eslintIgnore, eslintConfig } = require('../core/eslint');
const project = require('../core/project');
const { vscodeSettings } = require('../core/vscode');

function createESLint({ eslintPreset: eslintPresetDefault = 'eslint:recommended' }) {
  /**
   *
   * @param {{
   *   eslintPreset: string,
   *   eslintRules: Record<string, any>
   * }} config
   */
  function task({ eslintPreset, eslintRules }) {
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
      '**/tsconfig.json',
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
      extends: [eslintPreset],
      rules: eslintRules,
      parserOptions: {
        project: hasTypescript ? './tsconfig.json' : undefined,
      },
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
    };
    const extList = Object.keys(extsMap).filter((ext) => extsMap[ext]);
    const extOption = ` --ext=${extList.join(',')}`;

    pkg.withPackageJson((packageFile) => {
      const ignorePatterns = pkg
        .listWorkspaceMatchers(packageFile)
        .map((_) => ` --ignore-pattern='${_}/**'`)
        .join('');
      pkg.script(packageFile, {
        name: project.lint,
        script: hasWorkspaces
          ? `eslint .${extOption}${ignorePatterns} && turbo run ${project.lint}`
          : `eslint .${extOption}`,
        state: 'present',
      });
      pkg.script(packageFile, {
        name: project.format,
        script: hasWorkspaces
          ? `eslint . --quiet --fix${extOption}${ignorePatterns} && turbo run ${project.format}`
          : `eslint . --quiet --fix${extOption}`,
        state: 'present',
      });
    });
    pkg.forEachWorkspace(({ packageFile }) => {
      pkg.script(packageFile, {
        name: project.lint,
        script: `eslint .${extOption}`,
        state: 'present',
      });
      pkg.script(packageFile, {
        name: project.format,
        script: `eslint . --quiet --fix${extOption}`,
        state: 'present',
      });
    });

    // VSCode support
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
    eslintRules: {
      type: 'config',
    },
  };

  return task;
}

module.exports = createESLint({
  eslintPreset: '@w5s/eslint-config',
});
