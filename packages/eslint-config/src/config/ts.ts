/* eslint-disable ts/no-non-null-assertion */
import { ESLintConfig, interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/ts.js';
import { createRules } from './createRules.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['typescript', 'typescriptreact']))}`];

export async function ts(options: ts.Options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    import('@typescript-eslint/eslint-plugin'),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);
  const tsRecommendedRules = tsPlugin.configs['eslint-recommended']!.overrides![0]!.rules!;
  const tsStrictRules = tsPlugin.configs['strict']!.rules!;
  const tsTypeCheckedRules = tsPlugin.configs['recommended-type-checked-only']!.rules!;
  const { files = defaultFiles, rules = {}, stylistic = true, typeChecked = false } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/ts/setup',
      plugins: {
        ts: await interopDefault(tsPlugin),
      },
    },
    {
      files,
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
        ...ESLintConfig.renameRules(
          tsRecommendedRules,
          { '@typescript-eslint': 'ts' },
        ),
        ...ESLintConfig.renameRules(
          tsStrictRules,
          { '@typescript-eslint': 'ts' },
        ),
        'ts/ban-ts-comment': [
          'warn',
          {
            minimumDescriptionLength: 3,
            'ts-check': false,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true,
          },
        ],
        'ts/no-empty-object-type': 'off',
        'ts/no-explicit-any': 'off', // if any is explicit then it's wanted
        'ts/no-namespace': 'off', // We don't agree with community, namespaces are great and not deprecated
        ...createRules('ts/'),
        ...(stylisticEnabled
          ? {}
          : {}),
        ...rules,
      },
    },
    ...(typeChecked
      ? [{
          files: defaultFiles,
          // ignores: ignoresTypeAware,
          name: 'w5s/ts/rules-type-checked',
          rules: {
            ...ESLintConfig.renameRules(
              tsTypeCheckedRules,
              { '@typescript-eslint': 'ts' },
            ),
          },
        }]
      : []),
  ] as const satisfies Array<Config>;
}
export namespace ts {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {
    typeChecked?: boolean;
  }
}
