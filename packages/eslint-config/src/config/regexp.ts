import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/regex.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function regexp(options: regexp.Options = {}) {
  const regexPlugin = await interopDefault(import('eslint-plugin-regexp'));
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);

  return [
    {
      name: `${namespace}/regexp/setup`,
      plugins: {
        regex: regexPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: `${namespace}/regexp/rules`,
      rules: {
        ...(recommended ? regexPlugin.configs?.['flat/recommended']?.rules ?? {} : {}),
        ...(stylistic
          ? {
              // TODO: remove stylistic rules from flat/recommended and put it here
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace regexp {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
