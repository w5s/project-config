import eslintConfig from '@eslint/js';
import { Project } from '@w5s/dev';
import globals from 'globals';

import type { RuleOptions } from '../typegen/jsonc.js';

import { esSourceGlob, sourceGlob } from '../glob.js';
import { restrictedImportsPaths as defaultGlobalRestrictedImportsPaths } from '../restrictedImportPaths.js';
import { esRules } from '../rules/esRules.js';
import { type Config, type PluginOptionsBase, type RestrictedImportPaths } from '../type.js';

const defaultFiles = [esSourceGlob];

export async function es(options: es.Options) {
  const {
    defaultRestrictedImportsPaths = defaultGlobalRestrictedImportsPaths,
    recommended = true,
    restrictedImportsPaths: paths,
    rules = {},
  } = options;
  const resolvedPaths =
    typeof paths === 'function' ? paths(defaultRestrictedImportsPaths) : paths ?? defaultRestrictedImportsPaths;

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
      files: [sourceGlob],
      name: `w5s/source/restricted-imports-paths`,
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: resolvedPaths,
          },
        ],
      },
    },
    {
      files: defaultFiles,
      name: 'w5s/es/rules',
      rules: {
        ...(recommended ? es['recommended'] : {}),
        ...rules,
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
}

/**
 * Recommended rules
 */
es['recommended'] = {
  ...eslintConfig.configs.recommended.rules,
  ...esRules(),
};

export namespace es {
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * The default restricted import paths (used by restrictedImportsPaths).
     *
     * WARNING: prefer using restrictedImportsPaths
     *
     * You should use defaultRestrictedImportsPaths only for eslint shared configuration and should rarely be used in project configuration.
     *
     * @internal
     */
    defaultRestrictedImportsPaths?: RestrictedImportPaths | undefined;

    /**
     * An array of restricted import paths to override the default restricted import paths.
     *
     * @example
     * ```ts
     * // As object
     * {
     *   restrictedImportsPaths: [
     *     { name: 'lodash', message: 'Please use the w5s/lodash wrapper instead.' },
     *     { name: 'moment', message: 'Please use the w5s/moment wrapper instead.' },
     *   ], // Will totally override the default restricted import paths
     * }
     * // as function
     * {
     *  restrictedImportsPaths: (currentPaths) => [
     *     ...currentPaths.filter((path) => path.name !== 'lodash'),
     *     { name: 'moment', message: 'Please use the w5s/moment wrapper instead.' },
     *   ], // Allow fine grained control over the default restricted import paths, you can filter or add new paths.
     * }
     * ```
     */
    restrictedImportsPaths?: ((currentPaths: Readonly<RestrictedImportPaths>) => RestrictedImportPaths) | RestrictedImportPaths | undefined;
  }

  export type Rules = RuleOptions;
}
