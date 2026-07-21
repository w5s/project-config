import { ESLintConfig, interopDefault, Project } from '@w5s/dev';

import type { RuleOptions } from '../typegen/test.js';

import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
const defaultFiles = [
  `**/__mocks__/**/${sourceGlob}`,
  `**/__tests__/**/${sourceGlob}`,
  `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`,
];

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
              'e18e/prefer-static-regex': 'off',
              'test/expect-expect': ['error', { assertFunctionNames: ['expect*', 'assert*'] }],
              'test/valid-title': ESLintConfig.fixme(undefined),
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
