import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/unused-imports.js';

import { type Config, type PluginOptionsBase } from '../type.js';

export async function unusedImports(options: unusedImports.Options = {}) {
  const [unusedImportPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-unused-imports')),
  ] as const);
  const { recommended = true, rules = {} } = options;

  return [
    {
      name: 'w5s/unused-imports/setup',
      plugins: {
        'unused-imports': unusedImportPlugin,
      },
    },
    {
      name: 'w5s/unused-imports/rules',
      rules: {
        ...(recommended
          ? {
              'unused-imports/no-unused-imports': 'error',
              'unused-imports/no-unused-vars': [
                'error',
                {
                  args: 'after-used',
                  argsIgnorePattern: '^_',
                  vars: 'all',
                  varsIgnorePattern: '^_',
                },
              ],
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace unusedImports {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
