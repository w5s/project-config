import type eslint from 'eslint';
import { ESLintConfig } from '@w5s/dev';
import ignoreConfig from './rules/ignore.js';
import esConfig from './es.js';
import typescriptConfig from './typescript.js';
import jestConfig from './jest.js';
import jsonConfig from './json.js';
import ymlConfig from './yml.js';

function tryResolve(name: string) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
}

const config: eslint.Linter.Config = ESLintConfig.concat(
  ignoreConfig,
  esConfig,
  tryResolve('typescript') ? typescriptConfig : {},
  jestConfig,
  jsonConfig,
  ymlConfig,
  {
    root: true,
  }
);

export = config;
