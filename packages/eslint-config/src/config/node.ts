import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/node.js';

import { type Config, type PluginOptionsBase } from '../type.js';

export async function node(options: node.Options = {}) {
  const [nodePlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-n')),
  ] as const);
  const { recommended, rules = {} } = options;
  return [
    {
      name: 'w5s/node/setup',
      plugins: {
        node: nodePlugin,
      },
    },
    {
      name: 'w5s/node/rules',
      rules: {
        ...(recommended
          ? {
              // 'node/handle-callback-err': ['error', '^(err|error|_error)$'],
              'node/no-deprecated-api': 'error',
              'node/no-exports-assign': 'error',
              'node/no-new-require': 'error',
              'node/no-path-concat': 'error',
              // 'node/no-sync': 'error', FIXME: this rule uses typing without a way to disable it, so it causes errors in JS files
              'node/prefer-global/buffer': ['error', 'never'],
              'node/prefer-global/console': ['error', 'always'],
              // 'node/prefer-global/process': ['error', 'never'],
              'node/prefer-global/url': ['error', 'always'],
              'node/prefer-global/url-search-params': ['error', 'always'],
              'node/process-exit-as-throw': 'error',
            }
          : {}),

        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace node {
  export interface Options extends Omit<PluginOptionsBase<Rules>, 'files' | 'stylistic'> {}

  export type Rules = RuleOptions;
}
