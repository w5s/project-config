import { interopDefault } from '@w5s/dev';
import { StylisticConfig, type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/unicorn.js';

export async function unicorn(options: unicorn.Options = {}) {
  const [unicornPlugin] = await Promise.all([
    import('eslint-plugin-unicorn'),
  ] as const);
  const { rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/unicorn/setup',
      plugins: {
        unicorn: await interopDefault(unicornPlugin),
      },
    },
    {
      name: 'w5s/unicorn/rules',
      rules: {
        ...(unicornPlugin.configs.recommended?.rules),
        // Disabled for safety
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off', // Too many false positive
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'off', // Not playing well with ES Module
        'unicorn/new-for-builtins': 'off', // error, @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/122
        'unicorn/no-array-callback-reference': 'off', // Many false positive reported
        'unicorn/no-array-for-each': 'off', // This rule could change browser compatibility
        'unicorn/no-array-method-this-argument': 'off', // Many false positive reported
        'unicorn/no-array-reduce': 'off', // Array#reduce can be used
        'unicorn/no-console-spaces': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off', // error ?
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-null': 'off', // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/612
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-unreadable-array-destructuring': 'off',
        'unicorn/no-unused-properties': 'warn',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-add-event-listener': 'off',
        'unicorn/prefer-default-parameters': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prevent-abbreviations': 'off', // This rule is so dangerous : it potentially break code while fixing in many cases !!
        'unicorn/throw-new-error': 'off', // Creating errors with call signature is OK
        ...(stylisticEnabled
          ? {}
          : {}),
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
  ]  as const satisfies Array<Config>;
}

export namespace unicorn {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
