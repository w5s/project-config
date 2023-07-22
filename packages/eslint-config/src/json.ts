import type eslint from 'eslint';
import jsonConfig from './rules/jsonc.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...jsonConfig,
      files: ['*.json', '*.json5', '*.jsonc'],
    },
  ],
};
export = config;
