const { file, ini } = require('mrm-core');
const { blockSync } = require('@w5s/dev');
const templateMap = require('./git.ignore.js');
/**
 *
 */
function remoteSync() {
  try {
    const gitConfig = ini('.git/config');
    const remoteURL = gitConfig.get('remote "origin"').url.trim();
    return remoteURL;
  } catch {
    // ignore error
  }

  return undefined;
}
exports.remoteSync = remoteSync;

function hasGit() {
  return file('.git/config').exists();
}
exports.hasGit = hasGit;

/**
 * @param {string} content
 */
function trimStartLine(content) {
  return content
    .split(/\n/)
    .map((line) => line.replace(/^\s+/, ''))
    .filter((_) => _.length > 0)
    .join('\n');
}

const header = `
#==================================================================================================
#                                         ┓ ┏┏━┏┓
#                                         ┃┃┃┗┓┗┓
#                                         ┗┻┛┗┛┗┛
#
#                                 W5S default gitignore
#
#                 ⚠️ THIS IS A GENERATED FILE, SEE THE END OF FILE FOR EDITION
#
#==================================================================================================
`.slice(1, -1);

const footer = `
#==================================================================================================
#                             ⬇ Add Project specific rules below ⬇
#==================================================================================================
`.slice(1, -1);

/**
 * @param {string[]} flags
 */
function gitIgnore(flags) {
  // @ts-ignore
  const templateContent = [header, ...flags.map((flag) => trimStartLine(templateMap[flag] ?? '')), footer].join('\n');

  blockSync({
    block: templateContent,
    path: '.gitignore',
    insertPosition: ['before', 'BeginningOfFile'],
  });
}
exports.gitIgnore = gitIgnore;
