/* eslint-disable global-require, sort-keys-fix/sort-keys-fix */
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
      ? `${packageManager} install --frozen-lockfile`
      : `${packageManager} install`;
  githubCI.workflow({
    name: 'node.js.yml',
    state,
    update: (config) => ({
      name: 'Node.js CI',
      ...config,
      on: {
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

  githubCI.workflow({
    name: 'release.yml',
    state,
    update: (config) => ({
      name: 'Release',
      ...config,
      on: {
        push: {
          branches: [baseBranch],
        },
      },
      jobs: {
        release: {
          name: 'Release',
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
            {
              name: 'Create Release Pull Request or Publish to npm',
              id: 'changesets',
              uses: 'changesets/action@v1',
              with: {
                commit: '🔖 Publish package(s)',
                title: '🔖 Publish package(s)',
                publish: `${packageManager} release`,
                version: `${packageManager} run version`,
              },
              env: {
                // eslint-disable-next-line no-template-curly-in-string
                GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
                // eslint-disable-next-line no-template-curly-in-string
                NPM_TOKEN: '${{ secrets.NPM_TOKEN }}',
              },
            },
          ],
        },
      },
    }),
  });
}

module.exports = task;
