const githubCI = require('../core/githubCI.js');

function task() {
  const state = 'present';
  const baseBranch = 'main';

  githubCI.workflow({
    name: 'ci.yml',
    state,
    update: (config) => ({
      name: 'CI',
      ...config,
      jobs: {
        ...config.jobs,
        'code-validate': {
          'name': 'Validate (code)',
          'runs-on': 'ubuntu-latest',
          'steps': [
            { name: '⬇️ Checkout',
              uses: 'actions/checkout@v6' },
            {
              name: '⚙️ Setup',
              uses: 'w5s/actions/setup@main',
            },
            { name: '🔨 Build',
              uses: 'w5s/actions/task@main',
              with: {
                task: 'build',
              },
            },
            { name: '🔍 Validate',
              uses: 'w5s/actions/task@main',
              with: {
                task: 'validate',
              },
            },
          ],
        },
      },
      on: {
        merge_group: {},
        pull_request: {
          branches: [baseBranch],
        },
        push: {
          branches: [baseBranch],
        },
      },
    }),
  });
}

module.exports = task;
