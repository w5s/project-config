import { interopDefault } from '@w5s/dev';

import type { RuleOptions as SchemaRuleOptions } from '../typegen/schema.js';
import type { RuleOptions } from '../typegen/yml.js';

import { ymlSourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { withSchema } from '../internal/withSchema.js';
import { type Config, type PluginOptionsBase, type PluginOptionsSchema } from '../type.js';

const defaultFiles = [ymlSourceGlob];

export async function yml(options: yml.Options = {}) {
  const [ymlPlugin] = await Promise.all([interopDefault(import('eslint-plugin-yml'))] as const);
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);
  const { enabled: stylisticEnabled, indent, quotes } = stylistic;
  const schemaConfig = await withSchema(options.schema);

  return [
    {
      name: `${namespace}/yml/setup`,
      plugins: {
        yml: ymlPlugin,
        ...schemaConfig.plugins,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      language: 'yml/yaml',
      name: `${namespace}/yml/rules`,
      rules: {
        ...(recommended
          ? ymlPlugin.configs.recommended.reduce(
              (acc, config) => ({ ...acc, ...config.rules }),

              {} as RuleOptions,
            )
          : {}),
        ...schemaConfig.rules,
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
  export interface Options extends PluginOptionsBase<Rules>, PluginOptionsSchema {}

  export type Rules = RuleOptions & SchemaRuleOptions;
}
