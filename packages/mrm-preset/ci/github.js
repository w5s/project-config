/* eslint-disable global-require, sort-keys-fix/sort-keys-fix */
const { packageJson } = require('mrm-core');
const githubCI = require('../core/githubCI');
const pkg = require('../core/pkg');

function task() {
  const state = 'present';
  const packageManager = pkg.manager(packageJson());
  githubCI.workflow({
    name: 'node.js.yml',
    state,
    update: (config) => ({
      name: 'Node.js CI',
      ...config,
      on: {
        push: {
          branches: ['main'],
        },
        pull_request: {
          branches: ['main'],
        },
      },
      jobs: {
        ...config.jobs,
        build: {
          'runs-on': 'ubuntu-latest',
          steps: [
            { uses: 'actions/checkout@v3' },
            {
              name: 'Use Node.js',
              uses: 'actions/setup-node@v3',
              with: {
                'node-version': 'lts/*',
                cache: packageManager,
              },
            },
            { run: `${packageManager} install` },
            { run: `${packageManager} run build` },
            { run: `${packageManager} validate` },
          ],
        },
      },
    }),
  });
}

module.exports = task;
