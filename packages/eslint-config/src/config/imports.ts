import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/import.js';

import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

export async function imports(options: imports.Options = {}) {
  const { recommended = true, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  const [importPlugin] = await Promise.all([interopDefault(import('eslint-plugin-import'))] as const);
  return [
    {
      name: 'w5s/import/setup',
      plugins: {
        import: importPlugin,
      },
    },
    {
      name: 'w5s/import/rules',
      rules: {
        ...(recommended ? imports['recommended'] : {}),
        ...(stylisticEnabled
          ? imports['stylistic']
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

/**
 * Recommended rules
 */
imports['recommended'] = {
  // 'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
};

/**
 * Stylistic rules
 */
imports['stylistic'] = {
  'import/newline-after-import': ['error', { count: 1 }],
};

export namespace imports {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
