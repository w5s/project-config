import { interopDefault } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsdoc.js';

export async function jsdoc(options: jsdoc.Options = {}): Promise<readonly Config[]> {
  const [jsdocPlugin] = await Promise.all([
    interopDefault(import('eslint-plugin-jsdoc')),
  ] as const);
  const { rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/jsdoc/setup',
      plugins: {
        jsdoc: jsdocPlugin,
      },
    },
    {
      name: 'w5s/jsdoc/rules',
      rules: {
        ...(jsdocPlugin.configs['flat/recommended'].rules),
        'jsdoc/no-undefined-types': 'off', // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
        'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
        'jsdoc/valid-types': 'off', // FIXME: reports lots of false positive
        // 'strict': ['error', 'safe'],
        ...(stylisticEnabled
          ? {
              // ...(jsdocPlugin.configs['flat/stylistic'].rules),
              'jsdoc/check-alignment': 'warn',
              'jsdoc/multiline-blocks': 'warn',
            }
          : {}),
        ...rules,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace jsdoc {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
