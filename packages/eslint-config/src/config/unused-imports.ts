import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/unused-imports.js';

import { sourceGlob } from '../glob.js';
import { type Config, type PluginOptionsBase } from '../type.js';

export async function unusedImports(options: unusedImports.Options = {}) {
  const [unusedImportPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-unused-imports')),
  ] as const);
  const { files = [sourceGlob], recommended = true, rules = {} } = options;

  return [
    {
      name: 'w5s/unused-imports/setup',
      plugins: {
        'unused-imports': unusedImportPlugin,
      },
    },
    {
      files,
      name: 'w5s/unused-imports/rules',
      rules: {
        ...(recommended
          ? {
              'no-unused-vars': 'off', // disable the base rule as it can report incorrect errors
              'ts/no-unused-vars': 'off', // disable the base rule as it can report incorrect errors
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
