import { ESLintConfig, interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/next.js';

import { sourceGlob } from '../glob.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function next(options: next.Options = {}) {
  const [nextPlugin] = await Promise.all([
    interopDefault(import('@next/eslint-plugin-next')),
  ] as const);
  const { files = defaultFiles, recommended = true, rules = {} } = options;

  return [
    {
      name: 'w5s/next/setup',
      plugins: {
        next: nextPlugin,
      },
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'w5s/next/rules',
      rules: {
        ...(recommended ? ESLintConfig.renameRules(nextPlugin.configs.recommended.rules ?? {}, { '@next/next': 'next' }) : {}),
        ...(recommended ? ESLintConfig.renameRules(nextPlugin.configs['core-web-vitals'].rules ?? {}, { '@next/next': 'next' }) : {}),
        ...rules,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace next {
  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {}

  export type Rules = RuleOptions;
}
