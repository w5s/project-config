import { interopDefault } from '@w5s/dev';
import { type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/node.js';

export async function node(options: node.Options = {}) {
  const [nodePlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-n')),
  ] as const);
  const { rules = {} } = options;
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
        // 'node/handle-callback-err': ['error', '^(err|error|_error)$'],
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-sync': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/console': ['error', 'always'],
        // 'node/prefer-global/process': ['error', 'never'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/process-exit-as-throw': 'error',
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace node {
  export type Rules = RuleOptions;

  export interface Options extends Omit<PluginOptionsBase<Rules>, 'files' | 'stylistic'> {}
}
