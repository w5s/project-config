import { ESLintConfig, interopDefault, Project } from '@w5s/dev';

import type { RuleOptions } from '../typegen/test.js';

import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = Project.extensionsToTestGlob(Project.sourceExtensions());

export async function test(options: test.Options = {}) {
  const [vitestPlugin] = await Promise.all([
    interopDefault(import('@vitest/eslint-plugin')),
  ] as const);
  const { files, recommended = true, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/test/setup',
      plugins: {
        test: vitestPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: 'w5s/test/rules',
      rules: {
        ...(recommended
          ? {
              ...ESLintConfig.renameRules(vitestPlugin.configs.recommended.rules, {
                vitest: 'test',
              }),
              // Loose rules
              'e18e/prefer-static-regex': 'off',
              // Improve some rules
              'test/expect-expect': ['error', { assertFunctionNames: ['expect*', 'assert*'] }],
              'test/valid-title': ESLintConfig.fixme(undefined),
              // Loose typing
              'ts/explicit-module-boundary-types': 'off',
              'ts/no-empty-function': 'off',
              'ts/no-explicit-any': 'off',
              'ts/no-non-null-assertion': 'off',
              'ts/no-unsafe-argument': 'off',
              'ts/no-unsafe-assignment': 'off',
              'ts/no-unsafe-call': 'off',
              'ts/no-unsafe-member-access': 'off',
              'ts/no-unsafe-return': 'off',
              'ts/require-await': 'off',
              'ts/unbound-method': 'off',
            }
          : {}),
        ...(stylisticEnabled
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
