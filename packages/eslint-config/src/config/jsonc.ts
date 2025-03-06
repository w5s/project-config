import { interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsonc.js';

const defaultFiles = [`**/${Project.extensionsToGlob(['.json', '.json5', '.jsonc'])}`];

export async function jsonc(options: jsonc.Options = {}): Promise<readonly Config[]> {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    import('eslint-plugin-jsonc'),
    interopDefault(import('jsonc-eslint-parser')),
  ] as const);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/jsonc/setup',
      plugins: {
        jsonc: await interopDefault(jsoncPlugin),
      },
    },
    {
      files,
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'w5s/jsonc/rules',
      rules: {
        ...(jsoncPlugin.configs['flat/recommended-with-json'][0]?.rules),
        ...(stylisticEnabled
          ? {
              'jsonc/array-bracket-spacing': ['error', 'never'],
              'jsonc/comma-dangle': ['error', 'never'],
              'jsonc/comma-style': ['error', 'last'],
              'jsonc/indent': ['error', indent],
              'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
              'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
              'jsonc/object-curly-spacing': ['error', 'always'],
              'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
              'jsonc/quote-props': 'error',
              'jsonc/quotes': 'error',
            }
          : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace jsonc {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
