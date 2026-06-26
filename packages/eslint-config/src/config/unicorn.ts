import { interopDefault } from '@w5s/dev';
import { StylisticConfig, type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/unicorn.js';
import { sourceGlob } from '../glob.js';

const defaultFiles = [sourceGlob];

export async function unicorn(options: unicorn.Options = {}) {
  const [unicornPlugin] = await Promise.all([interopDefault(import('eslint-plugin-unicorn'))] as const);
  const { files = defaultFiles, recommended = true, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/unicorn/setup',
      plugins: {
        unicorn: unicornPlugin,
      },
    },
    {
      name: 'w5s/unicorn/rules',
      files,
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
      name: 'w5s/unicorn/overrides',
      files: ['**/*.config.cjs', '**/*.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
}

export namespace unicorn {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
