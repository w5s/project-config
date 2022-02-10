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
    const hasTypescript = packageJson().get('devDependencies.typescript');
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
      js: true,
      jsx: hasJSX,
      ts: hasTypescript,
      tsx: hasTypescript && hasJSX,
      json: hasJSON,
    };
    const extList = Object.keys(extsMap).filter((ext) => extsMap[ext]);
    const extOption = ` --ext ${extList.map((ext) => `.${ext}`).join(',')}`;

    pkg.withPackageJson((packageFile) => {
      pkg.script(packageFile, {
        name: project.lint,
        script: `eslint . --cache${extOption}`,
        state: 'present',
      });
      pkg.script(packageFile, {
        name: project.format,
        script: `eslint . --quiet --cache --fix${extOption}`,
        state: 'present',
      });
    });

    // VSCode support
    vscodeSettings({
      state: 'present',
      update: (settings) => {
        return {
          ...settings,
          'editor.codeActionsOnSave': settings['editor.codeActionsOnSave'] || {
            'source.fixAll.eslint': true,
          },
          'eslint.validate': extList.map(
            (ext) =>
              ({
                jsx: 'javascriptreact',
                js: 'javascript',
                tsx: 'typescriptreact',
                ts: 'typescript',
              }[ext] || ext)
          ),
        };
      },
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
