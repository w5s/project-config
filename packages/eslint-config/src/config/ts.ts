import { ESLintConfig, interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/ts.js';

const defaultFiles = [Project.extensionsToGlob(Project.queryExtensions(['typescript', 'typescriptreact']))];

export async function ts(options: ts.Options = {}) {
  const [tsPlugin, tsParser] = await Promise.all([
    import('@typescript-eslint/eslint-plugin'),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);
  const tsRecommendedRules = tsPlugin.configs['eslint-recommended']!.overrides![0]!.rules!;
  const tsStrictRules = tsPlugin.configs['strict']!.rules!;
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic);

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
        ...(stylisticEnabled
          ? {

            }
          : {}),
        ...rules,
      },
    },
  ]  as const satisfies Array<Config>;
}

export namespace ts {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
