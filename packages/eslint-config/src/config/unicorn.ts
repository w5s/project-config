import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/unicorn.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [sourceGlob];

export async function unicorn(options: unicorn.Options = {}) {
  const [unicornPlugin] = await Promise.all([interopDefault(import('eslint-plugin-unicorn'))] as const);
  const { files, namespace, recommended, rules = {}, stylistic } = defaultPluginOptions(options);

  return [
    {
      name: `${namespace}/unicorn/setup`,
      plugins: {
        unicorn: unicornPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: `${namespace}/unicorn/rules`,
      rules: {
        ...(recommended && unicornPlugin.configs.unopinionated.rules),
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
        ...(stylistic.enabled ? {} : {}),
        ...rules,
      },
    },
    // TODO: move to another file ?
    {
      files: ['**/*.config.cjs', '**/*.config.js'],
      name: `${namespace}/unicorn/overrides`,
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
