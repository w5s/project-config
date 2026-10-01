import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/github-actions.js';

import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const fallbackFiles = [
  '.github/workflows/*.{yml,yaml}',
  '**/action.{yml,yaml}',
  '.github/dependabot.{yml,yaml}',
];

export async function githubActions(options: githubActions.Options = {}) {
  const [githubActionsPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-github-actions-2')),
  ] as const);
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);
  const recommendedConfig = githubActionsPlugin.configs.recommended;
  const stylisticConfig = githubActionsPlugin.configs.stylistic;
  const defaultFiles = (recommendedConfig.files ?? fallbackFiles).flat();

  return [
    {
      name: `${namespace}/github-actions/setup`,
      plugins: {
        'github-actions': githubActionsPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      languageOptions: recommendedConfig.languageOptions,
      name: `${namespace}/github-actions/rules`,
      rules: {
        ...(recommended ? recommendedConfig.rules : {}),
        ...(stylistic.enabled ? stylisticConfig.rules : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace githubActions {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
