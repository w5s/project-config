/* eslint-disable global-require, sort-keys-fix/sort-keys-fix */
const path = require('node:path');
const { yaml } = require('mrm-core');

/** @type {typeof import('sync-directory')['default']} */
const syncDirectory = /** @type {any} */ (require('sync-directory'));

function task() {
  const gitlabCIConfig = yaml('.gitlab-ci.yml');
  const gitlabCILib = '.gitlab';
  const state = 'present';

  if (state === 'present') {
    syncDirectory(path.join(__dirname, '_gitlab'), path.resolve(gitlabCILib));
  }

  // Default include and stages
  const autoDevopsPath = `${gitlabCILib}/AutoDevops.gitlab-ci.yml`;
  const hasInclude = (/** @type {string} */ includePath) =>
    gitlabCIConfig.get('include', []).some(
      /**
       * @param {string|{local: string}} include
       */
      (include) => (typeof include === 'string' ? include : include.local) === includePath
    );
  const addInclude = (/** @type {string} */ includePath) =>
    gitlabCIConfig.set('include', gitlabCIConfig.get('include', []).concat([{ local: includePath }]));

  if (!hasInclude(autoDevopsPath)) {
    addInclude(autoDevopsPath);
  }

  gitlabCIConfig.save();
}

module.exports = task;
