import { interopDefault } from '@w5s/dev';

import type { RuleOptions as SchemaRuleOptions } from '../typegen/schema.js';
import type { RuleOptions } from '../typegen/toml.js';

import { tomlSourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { withSchema } from '../internal/withSchema.js';
import { type Config, type PluginOptionsBase, type PluginOptionsSchema } from '../type.js';

const defaultFiles = [tomlSourceGlob];

export async function toml(options: toml.Options = {}) {
  const tomlPlugin = await interopDefault(import('eslint-plugin-toml'));
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);
  const recommendedRules = tomlPlugin.configs.recommended.at(-1)?.rules;
  const standardRules = tomlPlugin.configs.standard.at(-1)?.rules;
  const schemaConfig = await withSchema(options.schema);

  return [
    {
      name: `${namespace}/toml/setup`,
      plugins: {
        toml: tomlPlugin,
        ...schemaConfig.plugins,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      language: 'toml/toml',
      name: `${namespace}/toml/rules`,
      rules: {
        'no-irregular-whitespace': 'off',
        'spaced-comment': 'off',
        ...(recommended ? recommendedRules : {}),
        ...schemaConfig.rules,
        ...(stylistic.enabled ? standardRules : {}),
        ...(!recommended && stylistic.enabled
          ? {
              'toml/no-unreadable-number-separator': 'off',
              'toml/precision-of-fractional-seconds': 'off',
              'toml/precision-of-integer': 'off',
              'toml/vue-custom-block/no-parsing-error': 'off',
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace toml {
  export interface Options extends PluginOptionsBase<Rules>, PluginOptionsSchema {}

  export type Rules = RuleOptions & SchemaRuleOptions;
}
