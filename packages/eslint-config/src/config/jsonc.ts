import { interopDefault, Project } from '@w5s/dev';
import type { Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsonc.js';
import { configs as jsoncConfigs } from 'eslint-plugin-jsonc';

const defaultFiles = [Project.extensionsToGlob(['.json', '.json5', '.jsonc'])];
const defaultStylistic = { indent: 2 };

export async function jsonc(options: jsonc.Options = {}) {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser')),
  ] as const);
  const { files = defaultFiles, rules = {}, rulesStylistic = true } = options;

  const { indent } = {
    ...defaultStylistic,
    ...(typeof rulesStylistic === 'boolean' ? {} : rulesStylistic),
  };

  return [
    {
      name: 'w5s/jsonc/setup',
      plugins: {
        jsonc: jsoncPlugin,
      },
    },
    {
      files,
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'w5s/jsonc/rules',
      rules: {
        ...(jsoncConfigs['flat/recommended-with-json'][0]?.rules),
        ...(rulesStylistic
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
  ]  as const satisfies Array<Config>;
}

export namespace jsonc {
  export type Rules = RuleOptions;

  export interface Options {
    files?: Config['files'];
    rules?: Rules;
    rulesStylistic?: boolean;
  }
}
