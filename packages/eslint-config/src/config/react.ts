import { ESLintConfig, interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/react.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function react(options: react.Options = {}) {
  const [reactPlugin] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
  ] as const);
  const { files, namespace, recommended, rules = {} } = defaultPluginOptions(options);
  return [
    {
      name: `${namespace}/react/setup`,
      plugins: {
        react: reactPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: `${namespace}/react/rules`,
      rules: {
        // eslint-disable-next-line ts/no-non-null-assertion
        ...(recommended ? ESLintConfig.renameRules(reactPlugin.configs.recommended.rules!, { '@eslint-react': 'react' }) : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace react {
  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {}

  export type Rules = RuleOptions;
}
