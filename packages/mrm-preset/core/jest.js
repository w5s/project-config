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
  const hasTypescript = pkg.hasDependency(packageFileDefault, 'typescript', 'dev');

  pkg.withPackageJson((packageFile) => {
    if (hasJest) {
      if (hasWorkspaces) {
        pkg.value(packageFile, {
          path: 'jest',
          state: 'present',
          update: () => ({
            preset: 'es-jest',
            projects: packageFile
              .get('workspaces.packages', packageFile.get('workspaces', []))
              .map((/** @type {string} */ workspace) => `<rootDir>/${workspace}`),
          }),
        });
      } else {
        const ignorePatterns = ['/node_modules/', '/docs/', '/lib/', '/build/', '/.cache/', '/public/'];
        packageFile.merge({
          jest: {
            preset: 'es-jest',
            coveragePathIgnorePatterns: ignorePatterns,
            testPathIgnorePatterns: ignorePatterns,
          },
        });
      }
    } else {
      packageFile.unset('jest');
    }

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
  npm.dependency({
    dev: true,
    name: ['@types/jest'],
    state: hasJest && hasTypescript ? 'present' : 'absent',
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
