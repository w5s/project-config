import { ESLintConfig, interopDefault } from '@w5s/dev';
import { type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/next.js';
import { sourceGlob } from '../glob.js';

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
      name: 'w5s/next/rules',
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...(recommended ? ESLintConfig.renameRules(nextPlugin.configs.recommended.rules ?? {}, { '@next/next': 'next' }) : {}),
        ...(recommended ? ESLintConfig.renameRules(nextPlugin.configs['core-web-vitals'].rules ?? {}, { '@next/next': 'next' }) : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace next {
  export type Rules = RuleOptions;

  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {}
}
