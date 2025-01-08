import type eslint from 'eslint';
import { ESLintConfig } from '@w5s/dev';
import baseConfig from './es/base.js';
import promiseConfig from './es/promise.js';
import jsdocConfig from './es/jsdoc.js';
import importConfig from './es/import.js';
import unicornConfig from './es/unicorn.js';
import nodeConfig from './es/node.js';

// import prettierConfig from './prettier.js';

const config: eslint.Linter.Config = ESLintConfig.concat(
  baseConfig,
  promiseConfig,
  jsdocConfig,
  importConfig,
  unicornConfig,
  nodeConfig,
  // prettierConfig
);
export = config;
