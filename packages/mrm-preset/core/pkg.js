/* cSpell: disable */
// @ts-check

// @ts-ignore
const { intersect } = require('semver-intersect');
const { packageJson, file, json } = require('mrm-core');
const glob = require('glob');
const path = require('path');
const jsonFile = require('./jsonFile.js');

/**
 * An empty placeholder for npm script
 */
const emptyScript = ':';

/**
 * @param {import('mrm-core').Json} packageFile
 * @returns {'application'|'library'|'workspace'} the archetype value
 */
function archetype(packageFile) {
  if (hasWorkspaces(packageFile)) {
    return 'workspace';
  }
  if (packageFile.get('private') === true || (packageFile.get('main') == null && packageFile.get('exports'))) {
    return 'application';
  }

  return 'library';
}

/**
 * @param {(pkg: import('mrm-core').PackageJson) => void} block
 */
function withPackageJson(block) {
  const packageFile = packageJson();
  block(packageFile);
  packageFile.save();
}

/**
 * @param {import("mrm-core").Json} packageFile
 * @returns {string[]} - The list of workspace matchers
 */
function listWorkspaceMatchers(packageFile) {
  return packageFile.get('workspaces.packages', packageFile.get('workspaces', []));
}

/**
 * @param {(workspace: {
 *   projectDir: string;
 *   packageFile: import("mrm-core").Json;
 * }) => void} fn
 */
function forEachWorkspace(fn) {
  const packageRoot = packageJson();
  const workspacesMatchers = listWorkspaceMatchers(packageRoot);

  for (const workspaceMatcher of workspacesMatchers) {
    const directories = glob.sync(workspaceMatcher);
    directories.forEach((directory) => {
      const packageFile = json(path.join(directory, 'package.json'));
      fn({
        projectDir: directory,
        packageFile,
      });
      packageFile.save();
    });
  }
}

/**
 * @param {import('mrm-core').Json} packageFile
 * @param {{
 *   name: string,
 *   state: 'present'|'absent'|'default',
 *   script: string,
 * }} options
 */
function script(packageFile, { name, state, script: scriptName }) {
  if (state === 'absent') {
    packageFile.unset(['scripts', name]);
  } else if (state === 'present' || (state === 'default' && !packageFile.get(['scripts', name]))) {
    packageFile.set(['scripts', name], scriptName);
  }
}

const defaultManager = 'npm';

/**
 * @param {import('mrm-core').PackageJson} packageFile
 * @returns {'yarn'|'npm'} - The manager used by the package
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
 * @param {import('mrm-core').Json} packageFile
 */
function hasWorkspaces(packageFile) {
  return Boolean(packageFile.get('workspaces'));
}

/**
 *
 * @param {import('mrm-core').PackageJson} packageFile
 * @param {string} packageName
 * @param {'normal'|'dev'|'peer'=} dependencyType
 */
function hasDependency(packageFile, packageName, dependencyType) {
  return Boolean(
    packageFile.get(
      `${
        dependencyType == null || dependencyType === 'normal'
          ? 'dependencies'
          : dependencyType === 'dev'
          ? 'devDependencies'
          : 'peerDependencies'
      }.${packageName}`
    )
  );
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
    } catch {
      return currentVersion; // leave unchanged
    }
  };

  packageFile.merge({
    engines: Object.fromEntries(
      Object.keys(engineVersionMap).map((engineName) => [engineName, engineConstraint(engineName)])
    ),
  });
  return packageFile.get('engines');
}

module.exports = {
  ...jsonFile,
  emptyScript,
  archetype,
  script,
  manager,
  engineMinVersion,
  hasDependency,
  hasWorkspaces,
  withPackageJson,
  forEachWorkspace,
  listWorkspaceMatchers,
};
