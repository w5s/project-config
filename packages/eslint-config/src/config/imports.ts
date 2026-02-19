import { interopDefault } from '@w5s/dev';
import { PluginOptionsBase, StylisticConfig, type Config } from '../type.js';
import { type RuleOptions } from '../typegen/import.js';

export async function imports(options: imports.Options = {}) {
  const { rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  const [importPlugin] = await Promise.all([interopDefault(import('eslint-plugin-import'))] as const);
  return [
    {
      name: 'w5s/import/rules',
      plugins: {
        import: importPlugin,
      },
      rules: {
        // 'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',

        ...(stylisticEnabled
          ? {
              // Stylistic rules
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config] satisfies Array<Config>;
}

export namespace imports {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
