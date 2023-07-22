import type eslint from 'eslint';
import { ESLintConfig } from '@w5s/dev';
import prettierConfig from './rules/prettier.js';

const config: eslint.Linter.Config = ESLintConfig.concat(
  {
    extends: [require.resolve('./rules/es.js')],
  },
  prettierConfig
);

export = config;
