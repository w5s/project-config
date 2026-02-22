import { interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/yml.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['yaml']))}`];

export async function yml(options: yml.Options = {}) {
  const [ymlPlugin] = await Promise.all([interopDefault(import('eslint-plugin-yml'))] as const);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent, quotes } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/yml/setup',
      plugins: {
        yml: ymlPlugin,
      },
    },
    {
      files,
      language: 'yml/yaml',
      name: 'w5s/yml/rules',
      rules: {
        ...ymlPlugin.configs['recommended'].reduce(
          (acc, config) => ({ ...acc, ...config.rules }),
          // eslint-disable-next-line ts/consistent-type-assertions
          {} as RuleOptions,
        ),
        ...(stylisticEnabled
          ? {
              'style/spaced-comment': 'off', // Fix

              'yml/block-mapping-question-indicator-newline': 'error',
              'yml/block-sequence-hyphen-indicator-newline': 'error',
              'yml/flow-mapping-curly-newline': 'error',
              'yml/flow-mapping-curly-spacing': 'error',
              'yml/flow-sequence-bracket-newline': 'error',
              'yml/flow-sequence-bracket-spacing': 'error',
              'yml/indent': ['error', indent === 'tab' ? 2 : indent],
              'yml/key-spacing': ['error', { afterColon: true, beforeColon: false }],
              'yml/no-tab-indent': 'error',
              'yml/quotes': [
                'error',
                { avoidEscape: true, prefer: quotes === 'backtick' ? ('single' as const) : quotes },
              ],
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
