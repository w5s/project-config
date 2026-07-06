const { blockSync, directorySync, fileSync } = require('@w5s/configurator-core');
const path = require('node:path');

const hookDirectory = '.githooks';

/**
 * @param {{
 *   name: 'pre-push'|'pre-commit'|'commit-msg',
 *   state: 'present'|'absent',
 *   content: string
 * }} options
 */
function gitHook({ content, name, state }) {
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
      block: content,
      insertPosition: ['after', 'EndOfFile'],
      path: hookFileName,
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
