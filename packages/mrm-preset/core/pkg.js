/* cSpell: disable */
// @ts-check

// @ts-ignore
const { intersect } = require('semver-intersect');
const { packageJson, file } = require('mrm-core');
const jsonFile = require('./jsonFile');

/**
 * An empty placeholder for npm script
 */
const emptyScript = ':';

/**
 * @param {(pkg: import('mrm-core').PackageJson) => void} block
 */
function withPackageJson(block) {
  const packageFile = packageJson();
  block(packageFile);
  packageFile.save();
}

/**
 * @param {import('mrm-core').PackageJson} packageFile
 * @param {{
 *   name: string,
 *   state: 'present'|'absent'|'default',
 *   script: string,
 * }} options
 */
function script(packageFile, { name, state, script: scriptName }) {
  if (state === 'absent') {
    packageFile.removeScript(name);
  } else if (state === 'present' || (state === 'default' && !packageFile.getScript(name))) {
    packageFile.setScript(name, scriptName);
  }
}

const defaultManager = 'npm';

/**
 * @param {import('mrm-core').PackageJson} packageFile
 * @returns {'yarn'|'npm'}
 */
function manager(packageFile) {
  if (packageFile.get('packagerManager')) {
    const [head, tail] = packageFile.get('packagerManager').split('@', 2);

    return head ?? tail;
  }
  if (file('yarn.lock').exists()) {
    return 'yarn';
  }
  if (file('package-json.lock').exists()) {
    return 'npm';
  }

  return defaultManager;
}

/**
 *
 * @param {import('mrm-core').PackageJson} packageFile
 */
function hasWorkspaces(packageFile) {
  return Boolean(packageFile.get('workspaces'));
}

/**
 *
 * @param {import('mrm-core').PackageJson} packageFile
 * @param {Record<string, string>} engineVersionMap
 */
function engineMinVersion(packageFile, engineVersionMap) {
  /**
   * @param {string} engineName
   */
  const engineConstraint = (engineName) => {
    const defaultVersion = engineVersionMap[engineName];
    const currentVersion = packageFile.get(`engines.${engineName}`, defaultVersion);
    try {
      return intersect(currentVersion, defaultVersion);
    } catch (_) {
      return currentVersion; // leave unchanged
    }
  };

  packageFile.merge({
    engines: Object.keys(engineVersionMap).reduce(
      (acc, engineName) => ({
        ...acc,
        [engineName]: engineConstraint(engineName),
      }),
      {}
    ),
  });
}

module.exports = {
  ...jsonFile,
  emptyScript,
  script,
  manager,
  engineMinVersion,
  hasWorkspaces,
  withPackageJson,
};
