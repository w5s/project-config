import { ESLintConfig, interopDefault, Project } from '@w5s/dev';

import type { RuleOptions } from '../typegen/test.js';

import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { looseRules } from '../rules/looseRules.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = Project.extensionsToTestGlob(Project.sourceExtensions());

export async function test(options: test.Options = {}) {
  const [vitestPlugin] = await Promise.all(([
    interopDefault(import('@vitest/eslint-plugin')),
  ]) as const);
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);

  return [
    {
      name: `${namespace}/test/setup`,
      plugins: {
        test: vitestPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: `${namespace}/test/rules`,
      rules: {
        ...(recommended
          ? {
              ...ESLintConfig.renameRules(vitestPlugin.configs.recommended.rules, {
                vitest: 'test',
              }),
              ...looseRules(),

              // Improve some rules
              'test/expect-expect': ['error', { assertFunctionNames: ['expect*', 'assert*'] }],
              'test/valid-title': ESLintConfig.fixme(undefined),
            }
          : {}),
        ...(stylistic.enabled
          ? {}
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace test {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
