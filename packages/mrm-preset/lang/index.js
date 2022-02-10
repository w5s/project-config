const { join } = require('path');
const { json, file, template, packageJson } = require('mrm-core');
const npm = require('../core/npm');
const { gitIgnore } = require('../core/git');
const project = require('../core/project');
const { eslintIgnore } = require('../core/eslint');
const { useWorkspaces } = require('../core/workspace');
const { typedoc } = require('../core/typedoc');
const pkg = require('../core/pkg');

/**
 *
 * @param {{
 *  language: 'typescript',
 *  tsConfig: string,
 * }} config
 */
function createLang({ language: languageDefault = 'typescript', tsConfig: tsConfigDefault }) {
  /**
   *
   * @param {{
   *   language: 'typescript',
   * }} config
   */
  function task({ language }) {
    return task[language]();
  }
  task.typescript = () => {
    const tsConfigPreset = tsConfigDefault;
    const isApplication = packageJson().get('mrmConfig.packageArchetype') === 'application';
    const hasWorkspaces = useWorkspaces();
    const tsConfigSettingsName = 'tsconfig.settings.json';
    const tsConfigSettings = json(tsConfigSettingsName);
    const tsConfig = json('tsconfig.json');

    // Should be run first
    gitIgnore('Typescript', ['lib/', '*.tsbuildinfo', 'typings/']);
    eslintIgnore(['lib/']);

    if (hasWorkspaces) {
      tsConfig
        .unset('compilerOptions.rootDir')
        .unset('compilerOptions.outDir')
        .unset('include')
        .merge({
          extends: `./${tsConfigSettingsName}`,
        })
        .save();

      file('src/index.ts').delete();
      file('src/index.spec.ts').delete();
    } else {
      tsConfigSettings
        .merge({
          compilerOptions: {},
          extends: tsConfigPreset,
        })
        .save();
      tsConfig
        .merge({
          compilerOptions: {
            outDir: './lib',
            rootDir: './src',
          },
          extends: `./${tsConfigSettingsName}`,
          include: ['./src'],
        })
        .save();

      // Create default index
      const templateDir = join(__dirname, 'templates');
      if (!file('src/index.ts').exists()) {
        template('src/index.ts', join(templateDir, 'index.ts')).apply().save();
      }
      if (!file('src/index.spec.ts').exists()) {
        template('src/index.spec.ts', join(templateDir, 'index.spec.ts')).apply().save();
      }
    }
    // Application setup
    pkg.withPackageJson((packageFile) => {
      if (isApplication) {
        pkg.script(packageFile, {
          name: project.develop,
          script:
            "NODE_ENV=development ts-node-dev --require='tsconfig-paths/register' -r dotenv/config -- ./src/index.ts dotenv_config_path=.env",
          state: 'present',
        });
      }
    });
    npm.dependency({
      dev: true,
      name: ['ts-node-dev', 'tsconfig-paths'],
      state: isApplication ? 'present' : 'absent',
    });

    // Dependencies
    npm.dependency({
      dev: true,
      name: ['typescript', '@types/node', tsConfigPreset],
      state: 'present',
    });

    typedoc({
      state: 'present',
      update: (config) => ({
        // Default values
        tsconfig: 'tsconfig.json',
        excludePrivate: true,
        excludeExternals: true,
        readme: 'README.md',
        theme: 'default',
        // Inherits current
        ...config,
        // Force values
        out: 'public',
        exclude: [
          '**/build/**/*',
          '**/example/**/*',
          '**/lib/**/*',
          '**/node_modules/**',
          '**/__tests__/*.(ts|tsx)',
          '**/*.(spec|test).(ts|tsx)',
        ],
      }),
    });
  };

  task.description = 'Setup Programming Language';
  task.parameters = {
    language: {
      default: languageDefault,
      message: 'Enter Programming language name',
      type: 'input',
    },
  };

  return task;
}

module.exports = createLang({
  language: 'typescript',
  tsConfig: '@w5s/ts-config',
});
