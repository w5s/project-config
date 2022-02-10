const { packageJson } = require('mrm-core');

/**
 * @param {import('eslint').Linter.Config} config
 */
function eslintConfig(config) {
  const packageFile = packageJson();
  packageFile.merge({ eslintConfig: config });
  packageFile.save();
}
exports.eslintConfig = eslintConfig;

/**
 *
 * @param {Array<string>} ignorePatterns
 */
function eslintIgnore(ignorePatterns) {
  const packageFile = packageJson();
  packageFile.merge({ eslintIgnore: ignorePatterns });
  packageFile.save();
}
exports.eslintIgnore = eslintIgnore;
