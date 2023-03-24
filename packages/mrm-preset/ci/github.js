const { packageJson } = require('mrm-core');
const githubCI = require('../core/githubCI.js');
const pkg = require('../core/pkg.js');

function task() {
  const state = 'present';
  const packageManager = pkg.manager(packageJson());
  const baseBranch = 'main';
  const packageInstall =
    packageManager === 'npm'
      ? `${packageManager} ci`
      : packageManager === 'yarn'
      ? `${packageManager} install --immutable`
      : `${packageManager} install`;
  githubCI.workflow({
    name: 'node.js.yml',
    state,
    update: (config) => ({
      name: 'Node.js CI',
      ...config,
      on: {
        merge_group: {},
        push: {
          branches: [baseBranch],
        },
        pull_request: {
          branches: [baseBranch],
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
            { run: packageInstall },
            { run: `${packageManager} run build` },
            { run: `${packageManager} validate` },
          ],
        },
      },
    }),
  });
}

module.exports = task;
