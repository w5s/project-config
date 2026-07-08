/* eslint-disable ts/no-non-null-assertion */
import { ESLintConfig, interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/ts.js';

import { tsSourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { tsRules } from '../rules/tsRules.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [tsSourceGlob];

export async function ts(options: ts.Options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);
  const tsRecommendedRules = tsPlugin.configs['eslint-recommended']!.overrides![0]!.rules!;
  const tsStrictRules = tsPlugin.configs['strict']!.rules!;
  const tsTypeCheckedRules = tsPlugin.configs['recommended-type-checked-only']!.rules!;
  const { files, rules = {}, stylistic = true, typeChecked = false } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  const tsCustomRules = tsRules();

  return [
    {
      name: 'w5s/ts/setup',
      plugins: {
        ts: tsPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          // extraFileExtensions: componentExts.map(ext => `.${ext}`),
          // ...typeAware
          //   ? {
          //       projectService: {
          //         allowDefaultProject: ['./*.js'],
          //         defaultProject: tsconfigPath,
          //       },
          //       tsconfigRootDir: process.cwd(),
          //     }
          //   : {},
          // ...parserOptions as any,
        },
      },
      name: 'w5s/ts/rules',
      rules: {
        ...ESLintConfig.renameRules(tsRecommendedRules, { '@typescript-eslint': 'ts' }),
        ...ESLintConfig.renameRules(tsStrictRules, { '@typescript-eslint': 'ts' }),
        ...tsCustomRules,
        ...(stylisticEnabled
          ? {
              // eslint-disable-next-line ts/no-non-null-asserted-optional-chain
              ...ESLintConfig.renameRules(tsPlugin.configs['stylistic']?.rules!, { '@typescript-eslint': 'ts' }),
              'ts/array-type': ['error', { default: 'generic' }],
              'ts/consistent-type-assertions': [
                'error',
                { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
              ],
              'ts/naming-convention': [
                'error',
                // {
                //   format: ['PascalCase', 'camelCase'],
                //   leadingUnderscore: 'allow',
                //   selector: 'default',
                //   trailingUnderscore: 'allow',
                // },
                {
                  format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
                  leadingUnderscore: 'allow',
                  selector: 'variable',
                  trailingUnderscore: 'allow',
                },
                // {
                //   format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
                //   leadingUnderscore: 'allowSingleOrDouble',
                //   selector: 'memberLike',
                //   trailingUnderscore: 'allowDouble',
                // },
                {
                  format: ['PascalCase'],
                  selector: 'typeLike',
                },
              ],
              'ts/no-empty-function': tsCustomRules['ts/no-empty-function'],
            }
          : {}),
        ...rules,
      },
    },
    ...(typeChecked
      ? ([
          {
            files: defaultFiles,
            // ignores: ignoresTypeAware,
            name: 'w5s/ts/rules-type-checked',
            rules: {
              ...ESLintConfig.renameRules(tsTypeCheckedRules, { '@typescript-eslint': 'ts' }),
            },
          },
        ] as const)
      : []),
  ] as [Config, Config, Config] | [Config, Config] satisfies Array<Config>;
}
export namespace ts {
  export interface Options extends PluginOptionsBase<Rules> {
    typeChecked?: boolean;
  }

  export type Rules = RuleOptions;
}
