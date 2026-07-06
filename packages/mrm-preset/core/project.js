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
/** @type {'typecheck'} */
const typecheck = 'typecheck';
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
function post(taskName) {
  return `post${taskName}`;
}

/**
 * @param {string} taskName
 */
function pre(taskName) {
  return `pre${taskName}`;
}

module.exports = {
  build,
  clean,
  codeAnalysis,
  coverage,
  develop,
  docs,
  format,
  install,
  lint,
  post,
  pre,
  prepare,
  release,
  rescue,
  spellcheck,
  test,
  typecheck,
  validate,
};
