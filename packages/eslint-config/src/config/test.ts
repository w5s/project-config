import { interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/test.js';

const sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
const defaultFiles = [
  `**/__mocks__/**/${sourceGlob}`,
  `**/__tests__/**/${sourceGlob}`,
  `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`,
];

export async function test(options: test.Options = {}) {
  const [vitestPlugin] = await Promise.all([
    import('@vitest/eslint-plugin'),
  ] as const);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/test/setup',
      plugins: {
        test: interopDefault(vitestPlugin),
      },
    },
    {
      files,
      name: 'w5s/test/rules',
      rules: {
        ...vitestPlugin.default.configs.recommended.rules,
        ...(stylisticEnabled
          ? {}
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace test {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
