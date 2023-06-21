const { packageJson } = require('mrm-core');
const pkg = require('./pkg.js');
const npm = require('./npm.js');
const project = require('./project.js');

/**
 * @param {{
 *   state: 'present'|'absent'
 * }} options
 */
function jest({ state }) {
  const packageFileDefault = packageJson();
  const hasJest = state === 'present';
  const hasWorkspaces = pkg.hasWorkspaces(packageFileDefault);

  pkg.withPackageJson((packageFile) => {
    const ignorePatterns = ['/node_modules/', '/docs/', '/lib/', '/dist/', '/build/', '/.cache/', '/public/'];

    pkg.value(packageFile, {
      path: 'jest',
      state: hasJest ? 'present' : 'absent',
      update: hasWorkspaces
        ? () => ({
            preset: 'es-jest',
            projects: packageFile
              .get('workspaces.packages', packageFile.get('workspaces', []))
              .map((/** @type {string} */ workspace) => `<rootDir>/${workspace}`),
          })
        : (config) => ({
            ...config,
            preset: 'es-jest',
            coveragePathIgnorePatterns: ignorePatterns,
            testPathIgnorePatterns: ignorePatterns,
          }),
      default: {},
    });
    pkg.script(packageFile, {
      name: `${project.coverage}:root`,
      update: (/** @type {string|undefined} */ _) => (hasWorkspaces ? _ : 'jest --coverage'),
      state: 'present',
      default: undefined, // pkg.emptyScript,
    });
    pkg.script(packageFile, {
      name: `${project.test}:root`,
      update: (/** @type {string|undefined} */ _) => (hasWorkspaces ? _ : 'jest'),
      state: 'present',
      default: undefined, // pkg.emptyScript,
    });
  });

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['jest', 'es-jest', '@jest/globals'],
    state: hasJest ? 'present' : 'absent',
  });

  // vscodeSnippets({
  //   name: 'jest',
  //   snippets: {
  //     'Jest Describe Block': {
  //       body: ["describe('${1:description}', () => {", '\t$0', '});'],
  //       description: 'Jest describe block',
  //       prefix: 'describe',
  //       scope: 'javascript,typescript',
  //     },
  //     'Jest Expect': {
  //       body: 'expect($0)',
  //       description: 'Jest expect assertion',
  //       prefix: 'expect',
  //       scope: 'javascript,typescript',
  //     },
  //     'Jest Test Block': {
  //       body: ["test('${1:description}', () => {", '\t$0', '});'],
  //       description: 'Jest test block',
  //       prefix: 'test',
  //       scope: 'javascript,typescript',
  //     },
  //   },
  //   state: hasJest ? 'present' : 'absent',
  // });
}

module.exports = {
  jest,
};
