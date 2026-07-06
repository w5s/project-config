const { packageJson } = require('mrm-core');

const npm = require('./npm.js');
const pkg = require('./pkg.js');
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
      // @ts-ignore
      default: {},
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
            coveragePathIgnorePatterns: ignorePatterns,
            preset: 'es-jest',
            testPathIgnorePatterns: ignorePatterns,
          }),
    });
    pkg.script(packageFile, {
      default: undefined, // pkg.emptyScript,
      name: `${project.coverage}:root`,
      state: 'present',
      update: (/** @type {string|undefined} */ _) => (hasWorkspaces ? _ : 'jest --coverage'),
    });
    pkg.script(packageFile, {
      default: undefined, // pkg.emptyScript,
      name: `${project.test}:root`,
      state: 'present',
      update: (/** @type {string|undefined} */ _) => (hasWorkspaces ? _ : 'jest'),
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
