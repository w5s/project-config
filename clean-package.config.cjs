// WARNING: this does not work with ESM, CJS is required
const { readFileSync } = require('node:fs');
const { cwd } = require('node:process');

const { scripts = {} } = JSON.parse(readFileSync(`${cwd()}/package.json`, 'utf8'));

module.exports = {
  extends: ['clean-package/common'],
  indent: 2,
  remove: (keys) => [
    ...keys,
    'commitlint',
    'devDependencies',
    'packageManager',
    'stylelint',
    ...Object.keys(scripts)
      .filter((_) => _ !== 'postpack')
      .map((_) => `scripts.${_}`),
  ],
};
