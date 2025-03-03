/* eslint-disable ts/no-non-null-assertion */
import { interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/yml.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['yaml']))}`];

export async function yml(options: yml.Options = {}) {
  const [ymlPlugin, ymlParser] = await Promise.all([
    import('eslint-plugin-yml'),
    interopDefault(import('yaml-eslint-parser')),
  ] as const);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/yml/setup',
      plugins: {
        yml: await interopDefault(ymlPlugin),
      },
    },
    {
      files,
      languageOptions: {
        parser: ymlParser,
      },
      name: 'w5s/yml/rules',
      rules: {
        ...(ymlPlugin.configs['flat/recommended'][0]!.rules),
        ...(ymlPlugin.configs['flat/recommended'][1]!.rules),
        ...(ymlPlugin.configs['flat/recommended'][2]!.rules),
        ...(stylisticEnabled
          ? {
              ...(ymlPlugin.configs['flat/standard'][3]!.rules),
              'yml/array-bracket-spacing': ['error', 'never'],
              'yml/comma-dangle': ['error', 'never'],
              'yml/comma-style': ['error', 'last'],

              'yml/object-curly-newline': ['error', { consistent: true, multiline: true }],
              'yml/object-curly-spacing': ['error', 'always'],
              'yml/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
              'yml/quote-props': 'error',

              'yml/block-mapping-question-indicator-newline': 'error',
              'yml/block-sequence-hyphen-indicator-newline': 'error',
              'yml/flow-mapping-curly-newline': 'error',
              'yml/flow-mapping-curly-spacing': 'error',
              'yml/flow-sequence-bracket-newline': 'error',
              'yml/flow-sequence-bracket-spacing': 'error',
              'yml/indent': ['error', indent === 'tab' ? 2 : indent],
              'yml/key-spacing': ['error', { afterColon: true, beforeColon: false }],
              'yml/no-tab-indent': 'error',
              'yml/quotes': ['error', { avoidEscape: true, prefer: quotes === 'backtick' ? 'single' as const : quotes }],
              'yml/spaced-comment': 'error',
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace yml {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
