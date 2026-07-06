const { file } = require('mrm-core');

const FILE_PATH = '.gitlab-ci.yml';

function isSupported() {
  return file(FILE_PATH).exists();
}
exports.isSupported = isSupported;
