const { json, packageJson } = require('mrm-core');
const { hasGit } = require('../core/git');

/**
 *
 * @param {{
 *   renovatePresetApplication: string
 *   renovatePresetLibrary: string
 * }} config
 */
function createRenovate({ renovatePresetApplication, renovatePresetLibrary }) {
  /**
   *
   * @param {{
   *   renovatePreset: string
   * }} parameters
   */
  function task({ renovatePreset }) {
    const gitSupported = hasGit();

    if (gitSupported) {
      const packageArchetype = packageJson().get('mrmConfig.packageArchetype', 'library');
      const renovatePresetResolved =
        renovatePreset || (packageArchetype === 'application' ? renovatePresetApplication : renovatePresetLibrary);
      const renovateFile = json('renovate.json');
      renovateFile.merge({
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        ignorePaths: ['**/node_modules/**'],
      });
      renovateFile.set(
        'extends',
        [renovatePresetResolved].concat(
          renovateFile.get('extends', []).filter(
            /**
             * @param {string} extension
             */
            (extension) => {
              return extension !== renovatePresetApplication && extension !== renovatePresetLibrary;
            }
          )
        )
      );
      renovateFile.save();
    }
  }

  task.description = 'Setup Renovate';
  task.parameters = {
    renovatePreset: {
      message: 'Enter Renovate preset name',
      type: 'input',
    },
  };

  return task;
}

module.exports = createRenovate({
  renovatePresetApplication: '@w5s/renovate-config:application',
  renovatePresetLibrary: '@w5s/renovate-config:library',
});
