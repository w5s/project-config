/* eslint-disable no-template-curly-in-string */
const { packageJson } = require('mrm-core');
const { vscodeSnippets } = require('./vscode');
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
  const hasTypescript = Boolean(packageFileDefault.get('devDependencies.typescript'));
  const hasWorkspaces = Boolean(packageFileDefault.get('workspaces'));

  pkg.withPackageJson((packageFile) => {
    if (hasJest) {
      const ignorePatterns = ['/node_modules/', '/docs/', '/lib/', '/build/', '/.cache/', '/public/'];
      packageFile.merge({
        jest: {
          coveragePathIgnorePatterns: ignorePatterns,
          testPathIgnorePatterns: ignorePatterns,
        },
      });
      if (hasTypescript) {
        packageFile.merge({
          jest: {
            globals: {
              'ts-jest': {
                tsconfig: hasWorkspaces ? 'tsconfig.settings.json' : 'tsconfig.json',
              },
            },
            roots: hasWorkspaces ? ['<rootDir>/packages'] : null,
            transform: {
              '^.+\\.tsx?$': 'ts-jest',
            },
          },
        });
      } else {
        packageFile.unset('jest.globals.ts-jest').unset('jest.transform.^.+\\.tsx?$');
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
    pkg.script(packageFile, {
      name: `${project.test}:watch`,
      script: pkg.emptyScript,
      state: 'absent',
    });
  });
  // Dependencies
  npm.dependency({
    dev: true,
    name: ['jest', 'babel-jest', '@babel/core'],
    state: hasJest ? 'present' : 'absent',
  });
  npm.dependency({
    dev: true,
    name: ['ts-jest', '@types/jest'],
    state: hasJest && hasTypescript ? 'present' : 'absent',
  });

  vscodeSnippets({
    name: 'jest',
    snippets: {
      'Jest Describe Block': {
        body: ["describe('${1:description}', () => {", '\t$0', '});'],
        description: 'Jest describe block',
        prefix: 'describe',
        scope: 'javascript,typescript',
      },
      'Jest Expect': {
        body: 'expect($0)',
        description: 'Jest expect assertion',
        prefix: 'expect',
        scope: 'javascript,typescript',
      },
      'Jest Test Block': {
        body: ["test('${1:description}', () => {", '\t$0', '});'],
        description: 'Jest test block',
        prefix: 'test',
        scope: 'javascript,typescript',
      },
    },
    state: hasJest ? 'present' : 'absent',
  });
}

module.exports = {
  jest,
};
