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
    name: 'ci.yml',
    state,
    update: (config) => ({
      name: 'Continous Integration',
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
            { uses: 'actions/checkout@v4' },
            { uses: 'dtinth/setup-github-actions-caching-for-turbo@v1' },
            {
              uses: 'actions/setup-node@v3',
              with: {
                'node-version-file': '.tool-versions',
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
