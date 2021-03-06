const { file, ini } = require('mrm-core');
const block = require('./block.js');

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

/**
 * @param {string} section
 * @param {string|Array<string>} sectionContent
 */
function gitIgnore(section, sectionContent) {
  const EOL = '\n';

  return block({
    block: Array.isArray(sectionContent) ? sectionContent.join(EOL) : trimStartLine(sectionContent),
    marker: (mark) => `# ${mark} ### ${section} ###`,
    path: '.gitignore',
  });
}
exports.gitIgnore = gitIgnore;

/**
 * @param {string[]} flags
 */
function gitIgnoreTemplate(flags) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const templateMap = require('./git.ignore.js');

  flags.forEach((flag) => {
    // @ts-ignore
    if (templateMap[flag]) {
      // @ts-ignore
      gitIgnore(flag, templateMap[flag]);
    }
  });
}
exports.gitIgnoreTemplate = gitIgnoreTemplate;
