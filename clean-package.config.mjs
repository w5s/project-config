import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';

const { scripts = {} } = JSON.parse(readFileSync(`${cwd()}/package.json`, 'utf8'));

export default {
  extends: ['clean-package/common'],
  indent: 2,
  remove: [
    'commitlint',
    'devDependencies',
    'packageManager',
    'stylelint',
    ...Object.keys(scripts)
      .filter((_) => _ !== 'postpack')
      .map((_) => `scripts.${_}`),
  ],
};
