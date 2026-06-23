import { interopDefault } from '@w5s/dev';
import { type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/react.js';
import { sourceGlob } from '../glob.js';

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
      name: 'w5s/react/rules',
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      rules: {
        ...(recommended ? reactPlugin.configs['recommended'].rules : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace react {
  export type Rules = RuleOptions;

  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {}
}
