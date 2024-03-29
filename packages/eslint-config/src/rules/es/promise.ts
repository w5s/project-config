import { ESLintConfig } from '@w5s/dev';
import type eslint from 'eslint';

const config: eslint.Linter.Config = ESLintConfig.concat({
  extends: ['plugin:promise/recommended'],
  plugins: ['promise'],
  rules: {
    'promise/prefer-await-to-callbacks': ESLintConfig.fixme('error'), // https://github.com/xjamundx/eslint-plugin-promise/issues/212
    'promise/prefer-await-to-then': 'error',
  },
});
export = config;
