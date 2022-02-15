const { file, ini } = require('mrm-core');
const block = require('./block');

/**
 *
 */
function remoteSync() {
  try {
    const gitConfig = ini('.git/config');
    const remoteURL = gitConfig.get('[remote "origin"]').url;

    return remoteURL
      ? [
          /**
           * 1. filter github URL
           * @param {string} returnValue
           */
          (returnValue) => returnValue.replace(/^git@github.com:/, 'https://github.com/'),
          /**
           * 2. filter gitlab URL
           * @param {string} returnValue
           */
          (returnValue) => returnValue.replace(/^git@gitlab.com:/, 'https://gitlab.com/'),
        ].reduce((returnValue, filter) => filter(returnValue), remoteURL)
      : remoteURL;
  } catch (error) {
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
