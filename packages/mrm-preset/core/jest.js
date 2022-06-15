/* eslint-disable no-template-curly-in-string */
const { packageJson } = require('mrm-core');
const pkg = require('./pkg');
const npm = require('./npm');
const project = require('./project');

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
    const ignorePatterns = ['/node_modules/', '/docs/', '/lib/', '/build/', '/.cache/', '/public/'];

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
      name: project.coverage,
      script: hasWorkspaces ? pkg.emptyScript : 'jest --coverage',
      state: !hasJest || hasWorkspaces ? 'default' : 'present',
    });
    pkg.script(packageFile, {
      name: project.test,
      script: hasWorkspaces ? pkg.emptyScript : 'jest',
      state: !hasJest || hasWorkspaces ? 'default' : 'present',
    });
  });

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['jest', 'es-jest'],
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
