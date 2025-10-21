const { json, packageJson } = require('mrm-core');
const { hasGit } = require('../core/git.js');
const pkg = require('../core/pkg.js');

/**
 *
 * @param {{
 *   renovatePresetApplication: string,
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
      const packageFile = packageJson();
      const packageArchetype = pkg.archetype(packageFile);
      const renovatePresetResolved =
        renovatePreset || (packageArchetype === 'application' ? renovatePresetApplication : renovatePresetLibrary);
      const renovateFile = json('renovate.json');
      renovateFile.merge({
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
      });
      renovateFile.set(
        'extends',
        [renovatePresetResolved, ...renovateFile.get('extends', []).filter(
          /**
           * @param {string} extension
           */
          (extension) => extension !== renovatePresetApplication && extension !== renovatePresetLibrary,
        )],
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
  renovatePresetApplication: 'github>w5s/renovate-config:application',
  renovatePresetLibrary: 'github>w5s/renovate-config:library',
});
