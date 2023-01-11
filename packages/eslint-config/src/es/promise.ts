import type eslint from 'eslint';
import { concatESConfig, fixme } from '../_rule.js';

const config: eslint.Linter.Config = concatESConfig({
  extends: ['plugin:promise/recommended'],
  plugins: ['promise'],
  rules: {
    // https://github.com/xjamundx/eslint-plugin-promise/issues/212
    'promise/prefer-await-to-callbacks': fixme('error'),
    'promise/prefer-await-to-then': 'error',
  },
});
export = config;
