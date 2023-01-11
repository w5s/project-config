import type eslint from 'eslint';
import { concatESConfig } from './_rule.js';
import baseConfig from './es/base.js';
import promiseConfig from './es/promise.js';
import jsdocConfig from './es/jsdoc.js';
import importConfig from './es/import.js';
import unicornConfig from './es/unicorn.js';
import prettierConfig from './prettier.js';

const config: eslint.Linter.Config = concatESConfig(
  baseConfig,
  promiseConfig,
  jsdocConfig,
  importConfig,
  unicornConfig,
  prettierConfig
);
export = config;
