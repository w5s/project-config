const path = require('node:path');
const { blockSync, directorySync, fileSync } = require('@w5s/dev');

const hookDirectory = '.githooks';

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
    directorySync({
      path: hookDirectory,
      state: 'present',
    });
    fileSync({
      path: hookFileName,
      state,
      update: (_) => (_.length === 0 ? '#!/usr/bin/env bash\nset -euo pipefail\n' : _),
    });
    blockSync({
      path: hookFileName,
      block: content,
      insertPosition: ['after', 'EndOfFile'],
    });
  } else {
    fileSync({
      path: hookFileName,
      state,
    });
  }
}

module.exports = {
  gitHook,
};
