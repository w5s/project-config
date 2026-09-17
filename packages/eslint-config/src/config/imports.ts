import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/import.js';

import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { type Config, type PluginOptionsBase } from '../type.js';

export async function imports(options: imports.Options = {}) {
  const { namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);
  const [importPlugin] = await Promise.all([interopDefault(import('eslint-plugin-import'))] as const);
  return [
    {
      name: `${namespace}/import/setup`,
      plugins: {
        import: importPlugin,
      },
    },
    {
      name: `${namespace}/import/rules`,
      rules: {
        ...(recommended ? imports.recommended : {}),
        ...(stylistic.enabled
          ? imports.stylistic
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

/**
 * Recommended rules
 */
imports.recommended = {
  // 'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
};

/**
 * Stylistic rules
 */
imports.stylistic = {
  'import/newline-after-import': ['error', { count: 1 }],
};

export namespace imports {
  export interface Options extends PluginOptionsBase<Rules> {

  }

  export type Rules = RuleOptions;
}
