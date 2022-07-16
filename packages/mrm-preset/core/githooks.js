const { execSync } = require('node:child_process');
const path = require('node:path');
const { file, packageJson, makeDirs } = require('mrm-core');
const project = require('./project.js');
const npm = require('./npm.js');
const pkg = require('./pkg.js');
const block = require('./block.js');

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
    state: hasHusky ? 'present' : 'absent',
  });
  if (hasHusky) {
    npm.dependency({
      dev: true,
      name: ['is-ci'],
      state: 'present',
    });
  }

  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: `${project.prepare}:husky`,
      state: hasHusky ? 'present' : 'absent',
      script: 'is-ci || husky install',
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
  const packageFileDefault = packageJson();
  const hasHusky = pkg.hasDependency(packageFileDefault, 'husky', 'dev');
  const hasGitHook = hasHusky && state === 'present';
  const hookDirectory = '.husky';
  const hookFileName = path.join(hookDirectory, name);
  if (hasGitHook) {
    makeDirs(hookDirectory);

    if (!file(hookFileName).exists()) {
      execSync(`npm exec -- husky add ${hookFileName} ""`, { stdio: 'inherit' });
    }

    block({
      path: hookFileName,
      block: content,
      insertAfter: 'end',
    });
  } else {
    file(hookFileName).delete();
  }
}

module.exports = {
  husky,
  gitHook,
};
