import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
  parser: 'yaml-eslint-parser',
  plugins: ['yml'],
};
export = config;
