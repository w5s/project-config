import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/e18e.js';

import { sourceGlob } from '../glob.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [sourceGlob];

/**
 * @see https://e18e.dev
 * @param options
 */
export async function e18e(options: e18e.Options = {}) {
  const [e18ePlugin] = await Promise.all([interopDefault(import('@e18e/eslint-plugin'))] as const);
  const { files = defaultFiles, modernization = true, moduleReplacements = false, performanceImprovements = true, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/e18e/setup',
      plugins: {
        e18e: e18ePlugin,
      },
    },
    {
      files,
      name: 'w5s/e18e/rules',
      rules: {
        ...modernization ? e18ePlugin.configs.modernization.rules : {},
        ...moduleReplacements ? e18ePlugin.configs.moduleReplacements.rules : {},
        ...performanceImprovements ? e18ePlugin.configs.performanceImprovements.rules : {},

        // Disable dangerous (also prefer unicorn)
        'e18e/prefer-array-from-map': 'off',
        'e18e/prefer-array-to-reversed': 'off',
        'e18e/prefer-array-to-sorted': 'off',
        'e18e/prefer-array-to-spliced': 'off',
        'e18e/prefer-spread-syntax': 'off',

        ...(stylisticEnabled ? {} : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace e18e {
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * Include modernization default configuration
     *
     * @default true
     */
    modernization?: boolean;

    /**
     * Include moduleReplacements default configuration
     *
     * @default false
     */
    moduleReplacements?: boolean;

    /**
     * Include performanceImprovements default configuration
     *
     * @default true
     */
    performanceImprovements?: boolean;
  }

  export type Rules = RuleOptions;
}
