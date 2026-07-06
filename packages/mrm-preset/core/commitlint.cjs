const { gitHook } = require('./githooks.cjs');
const npm = require('./npm.cjs');
const pkg = require('./pkg.cjs');

/**
 * @param {{
 *   state: 'present'|'absent',
 *   preset: string,
 * }} options
 */
function commitlint({ preset, state }) {
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
    content: 'npm exec -- commitlint --edit $1',
    name: 'commit-msg',
    state,
  });

  npm.dependency({
    dev: true,
    name: [preset],
    state,
  });
}

module.exports = {
  commitlint,
};
