/** @type {'docs'} */
const docs = 'docs';
/** @type {'install'} */
const install = 'install';
/** @type {'prepare'} */
const prepare = 'prepare';
/** @type {'build'} */
const build = 'build';
/** @type {'develop'} */
const develop = 'develop';
/** @type {'code-analysis'} */
const codeAnalysis = 'code-analysis';
/** @type {'format'} */
const format = 'format';
/** @type {'lint'} */
const lint = 'lint';
/** @type {'test'} */
const test = 'test';
/** @type {'coverage'} */
const coverage = 'coverage';
/** @type {'clean'} */
const clean = 'clean';
/** @type {'validate'} */
const validate = 'validate';
/** @type {'release'} */
const release = 'release';
/** @type {'rescue'} */
const rescue = 'rescue';
/** @type {'spellcheck'} */
const spellcheck = 'spellcheck';

/**
 * @param {string} taskName
 */
function pre(taskName) {
  return `pre${taskName}`;
}

/**
 * @param {string} taskName
 */
function post(taskName) {
  return `post${taskName}`;
}

module.exports = {
  build,
  docs,
  prepare,
  develop,
  clean,
  codeAnalysis,
  coverage,
  format,
  install,
  lint,
  post,
  pre,
  release,
  rescue,
  test,
  validate,
  spellcheck,
};
