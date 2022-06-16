const pkg = require('./pkg.js');
const npm = require('./npm.js');
const { gitHook } = require('./githooks.js');

/**
 * @param {{
 *   state: 'present'|'absent',
 *   preset: string,
 * }} options
 */
function commitlint({ state, preset }) {
  pkg.withPackageJson((packageFile) => {
    if (state === 'present') {
      packageFile.merge({
        commitlint: {
          extends: [preset],
        },
      });
    } else {
      packageFile.unset('commitlint');
    }
  });

  gitHook({
    name: 'commit-msg',
    content: 'npm exec --no -- commitlint --edit $1',
    state,
  });

  npm.dependency({
    dev: true,
    name: ['@commitlint/cli', preset],
    state,
  });
}

module.exports = {
  commitlint,
};
