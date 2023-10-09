const { execSync } = require('node:child_process');
const path = require('node:path');
const { file, makeDirs } = require('mrm-core');
const { blockSync } = require('@w5s/dev');
const project = require('./project.js');
const npm = require('./npm.js');
const pkg = require('./pkg.js');

const hookDirectory = '.githooks';

/**
 * @param {{
 *   state: 'present'|'absent',
 * }} options
 */
function husky({ state }) {
  const hasHusky = state === 'present';

  npm.dependency({
    dev: true,
    name: ['husky'],
    state: 'absent',
  });

  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: `${project.prepare}:githooks`,
      state: hasHusky ? 'present' : 'absent',
      update: `[ -n "\${CI:-}" ] || npx husky install ${hookDirectory}`,
    });
  });
}

/**
 * @param {{
 *   name: 'pre-push'|'pre-commit'|'commit-msg',
 *   state: 'present'|'absent',
 *   content: string
 * }} options
 */
function gitHook({ name, state, content }) {
  const hasGitHook = state === 'present';
  const hookFileName = path.join(hookDirectory, name);
  if (hasGitHook) {
    makeDirs(hookDirectory);

    if (!file(hookFileName).exists()) {
      execSync(`npm exec -- husky add ${hookFileName} ""`, { stdio: 'inherit' });
    }

    blockSync({
      path: hookFileName,
      block: content,
      insertPosition: ['after', 'EndOfFile'],
    });
  } else {
    file(hookFileName).delete();
  }
}

module.exports = {
  husky,
  gitHook,
};
