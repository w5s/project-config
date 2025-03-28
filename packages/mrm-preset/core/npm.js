/* eslint-disable default-param-last */
const { yarnVersion, yarnConfig } = require('@w5s/dev');

/* eslint-disable import/no-extraneous-dependencies */
/* cSpell: disable */
// @ts-check
// @ts-ignore
const fs = require('fs-extra');
// @ts-ignore
const _ = require('lodash');
// @ts-ignore
const semver = require('semver');
// @ts-ignore
const listify = require('listify');
// @ts-ignore
const validateNpmPackageName = require('validate-npm-package-name');
// @ts-ignore
const log = require('mrm-core/src/util/log');
// @ts-ignore
const execCommand = require('mrm-core/src/util/execCommand');
// @ts-ignore
const packageJson = require('mrm-core/src/files/packageJson');
// @ts-ignore
const MrmError = require('mrm-core/src/error');
const { yaml, json } = require('mrm-core');

/**
 * @typedef {{
 *   dev?: boolean,
 *   yarn?: boolean,
 *   versions?: Record<string, string>,
 * }} Options
 */

/**
 * @typedef {{
 *  dev?: boolean,
 *  remove?: boolean,
 *  stdio?: boolean,
 *  cwd?: string,
 * }} RunOptions
 */

/**
 * Install or update given npm packages if needed
 *
 * @param {Record<string, string> | string[] | string} deps
 * @param {Options} [options]
 * @param {Function=} exec
 */
function install(deps, options = {}, exec) {
  const dev = options.dev !== false;
  const run = options.yarn || isUsingYarn() ? runYarn : runNpm;

  // options.versions is a min versions mapping,
  // the list of packages to install will be taken from deps
  let versions = options.versions || {};

  /** @type string[] */
  let dependencies = [];

  if (typeof deps === 'string') {
    dependencies = [deps];
  } else if (Array.isArray(deps)) {
    dependencies = deps;
  } else if (typeof deps === 'object' && deps !== null) {
    // deps is an object with required versions
    // prettier-ignore
    versions = deps;
    dependencies = Object.keys(deps);
  }

  const newDeps = getUnsatisfiedDeps(dependencies, versions, { dev });
  if (newDeps.length === 0) {
    return;
  }

  log.info(`Installing ${listify(newDeps)}...`);
  const versionedDeps = newDeps.map((dep) => getVersionedDep(dep, versions));

  // eslint-disable-next-line consistent-return
  return run(versionedDeps, { dev }, exec);
}

/**
 * Uninstall given npm packages
 *
 * @param {string[] | string} deps
 * @param {Options} [options]
 * @param {Function=} exec
 */
function uninstall(deps, options = {}, exec) {
  // eslint-disable-next-line no-param-reassign
  deps = _.castArray(deps);
  const dev = options.dev !== false;
  const run = options.yarn || isUsingYarn() ? runYarn : runNpm;

  const installed = getOwnDependencies({ dev });

  // @ts-ignore
  const newDeps = deps.filter((dep) => installed[dep]);

  if (newDeps.length === 0) {
    return;
  }

  log.info(`Uninstalling ${listify(newDeps)}...`);

  // eslint-disable-next-line consistent-return
  return run(newDeps, { dev, remove: true }, exec);
}

/**
 * Install given npm packages
 *
 * @param {string[]} deps
 * @param {RunOptions} [options]
 * @param {Function} [exec]
 */
function runNpm(deps, options = {}, exec) {
  const args = [options.remove ? 'uninstall' : 'install', options.dev ? '--save-dev' : '--save'].concat(deps);

  return execCommand(exec, 'npm', args, {
    cwd: options.cwd,
    stdio: options.stdio === undefined ? 'inherit' : options.stdio,
  });
}

/**
 * Install given Yarn packages
 *
 * @param {string[]} deps
 * @param {RunOptions} [options]
 * @param {Function} [exec]
 */
function runYarn(deps, options = {}, exec) {
  const add = options.dev ? ['add', '--dev'] : ['add'];
  const remove = ['remove'];
  const args = (options.remove ? remove : add).concat(isUsingWorkspaces() && !isYarnBerry() ? ['-W'] : []).concat(deps);

  return execCommand(exec, 'yarn', args, {
    cwd: options.cwd,
    stdio: options.stdio === undefined ? 'inherit' : options.stdio,
  });
}

/**
 * Add version or latest to package name
 *
 * @param {string} dep
 * @param {Record<string, string>} versions
 */
function getVersionedDep(dep, versions) {
  // Handle non-registry packages (Github, bitbucket, etc.)
  if (!validateNpmPackageName(dep).validForNewPackages) {
    // If we were explicitly passed a version, attempt to
    // load it via the `#semver:<semver>` syntax.
    if (versions[dep]) {
      return `${dep}#semver:${versions[dep]}`;
    }

    return dep;
  }
  const version = versions[dep] || 'latest';

  return `${dep}@${version}`;
}

/**
 *
 * @param {Options} options
 * @returns {Record<string, string>} - map of package names to versions
 */
function getOwnDependencies(options) {
  const pkg = packageJson({
    dependencies: {},
    devDependencies: {},
  });

  return pkg.get(options.dev ? 'devDependencies' : 'dependencies') || {};
}

/**
 * Return version of installed npm package
 *
 * @param {string} name
 * @returns {string} - version
 */
function getInstalledVersion(name) {
  return json(`./node_modules/${name}/package.json`).get('version');
}

/**
 * Return only not installed dependencies, or dependencies which installed
 * version doesn't satisfy range.
 *
 * @param {string[]} deps
 * @param {Record<string, string>} versions
 * @param {Options} options
 * @returns {string[]} - list of not installed dependencies
 */
function getUnsatisfiedDeps(deps, versions, options) {
  const ownDependencies = getOwnDependencies(options);

  return deps.filter((dep) => {
    const required = versions[dep];

    // Handle non-registry packages (github, bitbucket, etc.)
    // Because these packages can shift contents without updating version
    // numbers, always attempt an install
    if (!validateNpmPackageName(dep).validForNewPackages) {
      return true;
    }

    if (required && !semver.validRange(required)) {
      throw new MrmError(`Invalid npm version: ${required}. Use proper semver range syntax.`);
    }

    const installed = getInstalledVersion(dep);

    // Package isn’t installed yet
    if (!installed) {
      return true;
    }

    // Module is installed but not in package.json dependencies
    if (!ownDependencies[dep]) {
      return true;
    }

    // No required version specified
    if (!required) {
      // Install if the pacakge isn’t installed
      return !installed;
    }

    // Install if installed version doesn't satisfy range
    return !semver.satisfies(installed, required);
  });
}

/*
 * Is project using Yarn?
 */
function isUsingYarn() {
  return fs.existsSync('yarn.lock');
}

function isUsingWorkspaces() {
  return Boolean(packageJson().get('workspaces'));
}

function isYarnBerry() {
  const yamlRC = yaml('.yarnrc.yml');
  return yamlRC.exists() && !(yamlRC.get('yarnPath') || '').includes('.yarn/releases/yarn-1.');
}

/**
 * @param {'npm'|`yarn@${'classic'|'berry'}`} defaultPackageManager
 */
async function bootstrap(defaultPackageManager) {
  const packageFile = json(`./package.json`);
  const isYarn = isUsingYarn() || defaultPackageManager.startsWith('yarn@');

  if (!packageFile.get('packageManager') && isYarn) {
    // Downgrade
    if (defaultPackageManager.endsWith('@classic')) {
      await yarnVersion({
        state: 'present',
        update: () => 'classic',
      });
    } else {
      await yarnVersion({
        state: 'present',
        update: () => 'berry',
      });
      await yarnConfig({
        key: 'nodeLinker',
        state: 'present',
        update: () => 'node-modules',
      });
    }
  }

  // lock files
  if (isYarn && !fs.existsSync('yarn.lock')) {
    execCommand(undefined, 'yarn', ['install']);
  }
  if (!isYarn && !fs.existsSync('package-lock.json')) {
    execCommand(undefined, 'npm', ['install']);
  }
}

/**
 * @param {{
 *   name: string|string[]|Record<string, string>,
 *   state: 'present'|'absent',
 *   dev?: boolean,
 *   yarn?: boolean,
 * }} options
 */
function dependency({ name, state, ...options }) {
  if (state === 'present') {
    install(name, options);
  } else {
    uninstall(typeof name === 'string' || Array.isArray(name) ? name : Object.keys(name));
  }
}

module.exports = {
  bootstrap,
  dependency,
};
