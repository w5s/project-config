/* eslint-disable ts/no-non-null-assertion */
import { ESLintConfig, interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/ts.js';

import { tsSourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { tsRules } from '../rules/tsRules.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const tsRenameMap = {
  '@typescript-eslint': 'ts',
};
const defaultFiles = [tsSourceGlob];

export async function ts(options: ts.Options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);
  const tsRecommendedRules = tsPlugin.configs['eslint-recommended']!.overrides![0]!.rules!;
  const tsStrictRules = tsPlugin.configs['strict']!.rules!;
  const tsTypeCheckedRules = tsPlugin.configs['recommended-type-checked-only']!.rules!;
  const {
    files,
    parserOptions = {},
    recommended = true,
    rules = {},
    stylistic = true,
    tsconfigPath = './tsconfig.json',
    typeChecked = true,
  } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  const tsCustomRules = tsRules();
  const resolvedFiles = withDefaultFiles(files, defaultFiles);

  return [
    {
      name: 'w5s/ts/setup',
      plugins: {
        ts: tsPlugin,
      },
    },
    {
      files: resolvedFiles,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          // extraFileExtensions: componentExts.map(ext => `.${ext}`),
          ...typeChecked
            ? {
                projectService: {
                  allowDefaultProject: ['./*.js'],
                  defaultProject: tsconfigPath,
                },
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions,
        },
      },
      name: 'w5s/ts/rules',
      rules: {
        ...(recommended ? ESLintConfig.renameRules(tsRecommendedRules, tsRenameMap) : {}),
        ...(recommended ? ESLintConfig.renameRules(tsStrictRules, tsRenameMap) : {}),
        ...(recommended && typeChecked ? ESLintConfig.renameRules(tsTypeCheckedRules, tsRenameMap) : {}),
        ...(recommended ? tsCustomRules : {}),
        ...(stylisticEnabled
          ? {
              // eslint-disable-next-line ts/no-non-null-asserted-optional-chain
              ...ESLintConfig.renameRules(tsPlugin.configs['stylistic']?.rules!, tsRenameMap),
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
  ] as [Config, Config, Config] | [Config, Config] satisfies Array<Config>;
}
export namespace ts {
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * Parser options for TypeScript ESLint parser
     */
    // TODO: find real type for parserOptions
    parserOptions?: Record<string, unknown>;

    /**
     * Path to the tsconfig.json file.
     * This must be to enable type aware rules.
     *
     * @default './tsconfig.json'
     */
    tsconfigPath?: string;

    /**
     * Whether to enable type aware rules
     */
    typeChecked?: boolean;
  }

  export type Rules = RuleOptions;
}
