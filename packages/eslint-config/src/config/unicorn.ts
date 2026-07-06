import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/unicorn.js';

import { sourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [sourceGlob];

export async function unicorn(options: unicorn.Options = {}) {
  const [unicornPlugin] = await Promise.all([interopDefault(import('eslint-plugin-unicorn'))] as const);
  const { files, recommended = true, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/unicorn/setup',
      plugins: {
        unicorn: unicornPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: 'w5s/unicorn/rules',
      rules: {
        ...(recommended && unicornPlugin.configs['unopinionated'].rules),
        // Disabled for safety
        'unicorn/new-for-builtins': 'off', // error, @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/122
        'unicorn/no-array-method-this-argument': 'off', // Many false positive reported
        'unicorn/no-console-spaces': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-unreadable-array-destructuring': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-add-event-listener': 'off',
        'unicorn/prefer-default-parameters': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/throw-new-error': 'off', // Creating errors with call signature is OK
        ...(stylisticEnabled ? {} : {}),
        ...rules,
      },
    },
    // TODO: move to another file ?
    {
      files: ['**/*.config.cjs', '**/*.config.js'],
      name: 'w5s/unicorn/overrides',
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
}

export namespace unicorn {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
