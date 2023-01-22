const path = require('node:path');
const { json, file, template, packageJson } = require('mrm-core');
const npm = require('../core/npm.js');
const { gitIgnore } = require('../core/git.js');
const project = require('../core/project.js');
// const { typedoc } = require('../core/typedoc.js');
const pkg = require('../core/pkg.js');

/**
 *
 * @param {{
 *  language: 'typescript',
 *  tsConfig: string
 * }} config
 */
function createLang({ language: languageDefault = 'typescript', tsConfig: tsConfigDefault }) {
  /**
   *
   * @param {{
   *   language: 'typescript'
   * }} config
   */
  function task({ language }) {
    return task[language]();
  }
  task.typescript = () => {
    const tsConfigPreset = tsConfigDefault;
    const packageFile = packageJson();
    const isApplication = pkg.archetype(packageFile) === 'application';
    const hasWorkspaces = pkg.hasWorkspaces(packageFile);
    const tsConfigSettingsName = 'tsconfig.settings.json';
    const tsConfigSettings = json(tsConfigSettingsName);
    const tsConfig = json('tsconfig.json');

    // Should be run first
    gitIgnore('Typescript', ['lib/', '*.tsbuildinfo', 'typings/']);

    // const excludeList = ['**/*.test.*', '**/*.spec.*', '**/__tests__/**'];
    if (hasWorkspaces) {
      tsConfig
        .unset('compilerOptions.rootDir')
        .unset('compilerOptions.outDir')
        .unset('include')
        .merge({
          $schema: 'https://json.schemastore.org/tsconfig.json',
          extends: `./${tsConfigSettingsName}`,
        })
        .save();

      file('src/index.ts').delete();
      file('src/index.spec.ts').delete();
    } else {
      tsConfigSettings
        .merge({
          $schema: 'https://json.schemastore.org/tsconfig.json',
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
          include: ['src'],
        })
        .save();

      // Create default index
      const templateDir = path.join(__dirname, 'templates');
      if (!file('src/index.ts').exists()) {
        template('src/index.ts', path.join(templateDir, 'index.ts')).apply().save();
      }
      if (!file('src/index.spec.ts').exists()) {
        template('src/index.spec.ts', path.join(templateDir, 'index.spec.ts')).apply().save();
      }
    }
    // Application setup
    pkg.withPackageJson((_packageFile) => {
      if (isApplication) {
        pkg.script(_packageFile, {
          name: project.develop,
          update:
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

    // typedoc({
    //   state: isApplication ? 'absent' : 'present',
    //   update: (config) => ({
    //     // Default values
    //     tsconfig: 'tsconfig.json',
    //     excludePrivate: true,
    //     excludeExternals: true,
    //     readme: 'README.md',
    //     theme: 'default',
    //     // Inherits current
    //     ...config,
    //     // Force values
    //     out: 'public',
    //     exclude: [
    //       '**/build/**/*',
    //       '**/example/**/*',
    //       '**/lib/**/*',
    //       '**/node_modules/**',
    //       '**/__tests__/*.(ts|tsx)',
    //       '**/*.(spec|test).(ts|tsx)',
    //     ],
    //   }),
    // });
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
