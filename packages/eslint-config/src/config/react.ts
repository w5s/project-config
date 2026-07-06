import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/react.js';

import { sourceGlob } from '../glob.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function react(options: react.Options = {}) {
  const [reactPlugin] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
  ] as const);
  const { files = defaultFiles, recommended, rules = {} } = options;
  return [
    {
      name: 'w5s/react/setup',
      plugins: {
        react: reactPlugin,
      },
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'w5s/react/rules',
      rules: {
        ...(recommended ? reactPlugin.configs['recommended'].rules : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace react {
  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {}

  export type Rules = RuleOptions;
}
