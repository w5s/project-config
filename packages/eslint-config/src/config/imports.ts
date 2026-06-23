import { interopDefault } from '@w5s/dev';
import { type PluginOptionsBase, StylisticConfig, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/import.js';

export async function imports(options: imports.Options = {}) {
  const { rules = {}, recommended = true, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  const [importPlugin] = await Promise.all([interopDefault(import('eslint-plugin-import'))] as const);
  return [
    {
      name: 'w5s/import/rules',
      plugins: {
        import: importPlugin,
      },
      rules: {
        ...(recommended ? imports['recommended'] : {}),
        ...(stylisticEnabled
          ? imports['stylistic']
          : {}),
        ...rules,
      },
    },
  ] as [Config] satisfies Array<Config>;
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
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
