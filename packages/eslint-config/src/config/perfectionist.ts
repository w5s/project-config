import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/perfectionist.js';

import { sourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [sourceGlob];

export async function perfectionist(options: perfectionist.Options = {}) {
  const [perfectionistPlugin] = await Promise.all([interopDefault(import('eslint-plugin-perfectionist'))] as const);
  const {
    files,
    recommended = true,
    rules = {},
    stylistic = true,
  } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/perfectionist/setup',
      plugins: {
        perfectionist: perfectionistPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: 'w5s/perfectionist/rules',
      rules: {
        ...(recommended ? perfectionistPlugin.configs['recommended-natural'].rules : {}),
        ...(stylisticEnabled ? {} : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace perfectionist {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
