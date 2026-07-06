import eslintConfig from '@eslint/js';
import { Project } from '@w5s/dev';
import globals from 'globals';

import type { RuleOptions } from '../typegen/jsonc.js';

import { esSourceGlob } from '../glob.js';
import { esRules } from '../rules/esRules.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [esSourceGlob];

export async function es(options: es.Options) {
  const { recommended = true, rules = {} } = options;

  return [
    {
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
      name: 'w5s/es/setup',
    },
    {
      files: defaultFiles,
      name: 'w5s/es/rules',
      rules: {
        ...(recommended ? es['recommended'] : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

/**
 * Recommended rules
 */
es['recommended'] = {
  ...eslintConfig.configs.recommended.rules,
  ...esRules(),
};

export namespace es {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
