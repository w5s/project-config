import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/import.js';

import { esSourceGlob, tsSourceGlob } from '../glob.js';
import { restrictedImportsPaths } from '../restrictedImportPaths.js';
import { type Config, type PluginOptionsBase, type RestrictedImportPaths, StylisticConfig } from '../type.js';

export async function imports(options: imports.Options = {}) {
  const { recommended = true, restrictedPaths, rules = {}, stylistic = true } = options;
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
    restrictedImportsConfig('es', restrictedPaths),
    restrictedImportsConfig('ts', restrictedPaths),
  ] as [Config, Config, Config, Config] satisfies Array<Config>;
}

function restrictedImportsConfig(lang: 'es' | 'ts', paths: imports.Options['restrictedPaths']): Config {
  const ruleName = lang === 'es' ? 'no-restricted-imports' : 'ts/no-restricted-imports';
  const resolvedPaths =
    typeof paths === 'function' ? paths(restrictedImportsPaths) : paths ?? restrictedImportsPaths;

  return {
    files: lang === 'es' ? [esSourceGlob] : [tsSourceGlob],
    name: `w5s/import/${lang}-restriction`,
    rules: {
      [ruleName]: [
        'error',
        {
          paths: resolvedPaths,
        },
      ],
    },
  };
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
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * An array of restricted import paths to override the default restricted import paths.
     */
    restrictedPaths?: ((currentPaths: Readonly<RestrictedImportPaths>) => RestrictedImportPaths) | RestrictedImportPaths;
  }

  export type Rules = RuleOptions;
}
