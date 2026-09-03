import eslintConfig from '@eslint/js';
import { Project } from '@w5s/dev';
import globals from 'globals';

import type { RuleOptions } from '../typegen/jsonc.js';

import { esSourceGlob, sourceGlob } from '../glob.js';
import { restrictedGlobals as defaultGlobalRestrictedGlobals } from '../restrictedGlobals.js';
import { restrictedImportPaths as defaultGlobalRestrictedImportPaths } from '../restrictedImportPaths.js';
import { restrictedSyntax as defaultGlobalRestrictedSyntax } from '../restrictedSyntax.js';
import { esRules } from '../rules/esRules.js';
import { type Config, type PluginOptionsBase, type RestrictedGlobals, type RestrictedImportPaths, type RestrictedSyntax } from '../type.js';

const defaultFiles = [esSourceGlob];

export async function es(options: es.Options) {
  const {
    defaultRestrictedGlobals = defaultGlobalRestrictedGlobals,
    defaultRestrictedImportPaths = defaultGlobalRestrictedImportPaths,
    defaultRestrictedSyntax = defaultGlobalRestrictedSyntax,
    recommended = true,
    restrictedImportPaths: paths,
    rules = {},
  } = options;
  const resolvedGlobals =
    typeof options.restrictedGlobals === 'function'
      ? options.restrictedGlobals(defaultRestrictedGlobals)
      : options.restrictedGlobals ?? defaultRestrictedGlobals;
  const resolvedPaths =
    typeof paths === 'function' ? paths(defaultRestrictedImportPaths) : paths ?? defaultRestrictedImportPaths;
  const resolvedSyntax =
    typeof options.restrictedSyntax === 'function'
      ? options.restrictedSyntax(defaultRestrictedSyntax)
      : options.restrictedSyntax ?? defaultRestrictedSyntax;
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
      name: 'w5s/source/restricted-rules',
      rules: {
        'no-restricted-globals': [
          'error',
          ...resolvedGlobals,
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: resolvedPaths,
          },
        ],
        'no-restricted-syntax': [
          'error',
          ...resolvedSyntax,
        ],
      },
    },
    {
      files: defaultFiles,
      name: 'w5s/es/rules',
      rules: {
        ...(recommended ? es.recommended : {}),
        ...rules,
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
}

/**
 * Recommended rules
 */
es.recommended = {
  ...eslintConfig.configs.recommended.rules,
  ...esRules(),
};

export namespace es {
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * The default restricted globals (used by restrictedGlobals).
     *
     * WARNING: prefer using restrictedGlobals
     *
     * You should use defaultRestrictedGlobals only for eslint shared configuration and should rarely be used in project configuration.
     *
     * @internal
     */
    defaultRestrictedGlobals?: Readonly<RestrictedGlobals> | undefined;

    /**
     * The default restricted import paths (used by restrictedImportPaths).
     *
     * WARNING: prefer using restrictedImportPaths
     *
     * You should use defaultRestrictedImportPaths only for eslint shared configuration and should rarely be used in project configuration.
     *
     * @internal
     */
    defaultRestrictedImportPaths?: Readonly<RestrictedImportPaths> | undefined;

    /**
     * The default restricted syntax (used by restrictedSyntax).
     *
     * WARNING: prefer using restrictedSyntax
     *
     * You should use defaultRestrictedSyntax only for eslint shared configuration and should rarely be used in project configuration.
     *
     * @internal
     */
    defaultRestrictedSyntax?: Readonly<RestrictedSyntax> | undefined;

    /**
     * An array of restricted globals to override the default restricted globals.
     *
     * @example
     * ```ts
     * // As object
     * {
     *   restrictedGlobals: {
     *     'event': 'Please use the event parameter instead of the global event.',
     *   }, // Will totally override the default restricted globals
     * }
     * // as function
     * {
     *  restrictedGlobals: (currentGlobals) => ({
     *    ...currentGlobals,
     *    'event': 'Please use the event parameter instead of the global event.',
     *  }), // Allow fine grained control over the default restricted globals, you can filter or add new globals.
     * }
     * ```
     * @see https://eslint.org/docs/latest/rules/no-restricted-globals
     */
    restrictedGlobals?: ((currentGlobals: Readonly<RestrictedGlobals>) => RestrictedGlobals) | RestrictedGlobals | undefined;

    /**
     * An array of restricted import paths to override the default restricted import paths.
     *
     * @example
     * ```ts
     * // As object
     * {
     *   restrictedImportPaths: [
     *     { name: 'lodash', message: 'Please use the w5s/lodash wrapper instead.' },
     *     { name: 'moment', message: 'Please use the w5s/moment wrapper instead.' },
     *   ], // Will totally override the default restricted import paths
     * }
     * // as function
     * {
     *  restrictedImportPaths: (currentPaths) => [
     *     ...currentPaths.filter((path) => path.name !== 'lodash'),
     *     { name: 'moment', message: 'Please use the w5s/moment wrapper instead.' },
     *   ], // Allow fine grained control over the default restricted import paths, you can filter or add new paths.
     * }
     * @see https://eslint.org/docs/latest/rules/no-restricted-imports
     * ```
     */
    restrictedImportPaths?: ((currentPaths: Readonly<RestrictedImportPaths>) => RestrictedImportPaths) | RestrictedImportPaths | undefined;

    /**
     * An array of restricted syntax to override the default restricted syntax.
     *
     * @example
     * ```ts
     * // As object
     * {
     *   restrictedSyntax: [
     *     { selector: 'ForInStatement', message: 'Please use for-of instead of for-in.' },
     *   ], // Will totally override the default restricted syntax
     * }
     * // as function
     * {
     *  restrictedSyntax: (currentSyntax) => [
     *     ...currentSyntax.filter((syntax) => syntax.selector !== 'ForInStatement'),
     *     { selector: 'ForInStatement', message: 'Please use for-of instead of for-in.' },
     *   ], // Allow fine grained control over the default restricted syntax, you can filter or add new syntax rules.
     * }
     * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
     * ```
     */
    restrictedSyntax?: ((currentSyntax: Readonly<RestrictedSyntax>) => RestrictedSyntax) | RestrictedSyntax | undefined;
  }

  export type Rules = RuleOptions;
}
