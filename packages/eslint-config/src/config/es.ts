import globals from 'globals';
import eslintConfig from '@eslint/js';
import { Project } from '@w5s/dev';
import { type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsonc.js';
import { createRules } from './createRules.js';

export async function es(
  options: es.Options,
) {
  const { rules = {} } = options;

  return [
    {
      name: 'w5s/es/setup',
      languageOptions: {
        ecmaVersion: Project.ecmaVersion(),
        globals: {
          ...globals.browser,
          ...globals[`es${Project.ecmaVersion()}`],
          ...globals.node,
          __DEV__: 'readonly',
          __PROD__: 'readonly',
          __TEST__: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: Project.ecmaVersion(),
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    {
      name: 'w5s/es/rules',
      plugins: {},
      rules: {
        ...eslintConfig.configs.recommended.rules,
        ...createRules(''),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace es {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
