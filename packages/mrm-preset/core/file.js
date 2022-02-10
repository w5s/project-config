const { file: mrmFile } = require('mrm-core');

/**
 *
 * @param {{
 *   path: string,
 *   state: 'file'|'absent',
 *   update?: (content: string) => string | undefined,
 * }} options
 */
function file({ path, state, update }) {
  const fileHandler = mrmFile(path);
  if (state === 'file') {
    if (update) {
      const newContent = update(fileHandler.get());
      if (newContent != null) {
        fileHandler.save(newContent);
      }
    } else if (!fileHandler.exists()) {
      fileHandler.save('');
    }
  } else {
    fileHandler.delete();
  }
}

module.exports = {
  file,
};
