import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/perfectionist.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function perfectionist(options: perfectionist.Options = {}) {
  const [perfectionistPlugin] = await Promise.all([interopDefault(import('eslint-plugin-perfectionist'))] as const);
  const {
    files,
    namespace,
    recommended,
    rules = {},
    stylistic,
  } = defaultPluginOptions(options);

  return [
    {
      name: `${namespace}/perfectionist/setup`,
      plugins: {
        perfectionist: perfectionistPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: `${namespace}/perfectionist/rules`,
      rules: {
        ...(recommended ? perfectionistPlugin.configs['recommended-natural'].rules : {}),
        ...(stylistic.enabled ? {} : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace perfectionist {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
