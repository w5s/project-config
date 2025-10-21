import { interopDefault, Project } from '@w5s/dev';
import type { Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsonc.js';

const defaultFiles = [Project.extensionsToGlob(['.json', '.json5', '.jsonc'])];
const defaultStylistic = { indent: 2 };

export async function jsonc(options: jsonc.Options = {}): Promise<Array<Config>> {
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
        'jsonc/no-bigint-literals': 'error',
        'jsonc/no-binary-expression': 'error',
        'jsonc/no-binary-numeric-literals': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/no-escape-sequence-in-identifier': 'error',
        'jsonc/no-floating-decimal': 'error',
        'jsonc/no-hexadecimal-numeric-literals': 'error',
        'jsonc/no-infinity': 'error',
        'jsonc/no-multi-str': 'error',
        'jsonc/no-nan': 'error',
        'jsonc/no-number-props': 'error',
        'jsonc/no-numeric-separators': 'error',
        'jsonc/no-octal': 'error',
        'jsonc/no-octal-escape': 'error',
        'jsonc/no-octal-numeric-literals': 'error',
        'jsonc/no-parenthesized': 'error',
        'jsonc/no-plus-sign': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-sparse-arrays': 'error',
        'jsonc/no-template-literals': 'error',
        'jsonc/no-undefined-value': 'error',
        'jsonc/no-unicode-codepoint-escapes': 'error',
        'jsonc/no-useless-escape': 'error',
        'jsonc/space-unary-ops': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/vue-custom-block/no-parsing-error': 'error',
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
  ];
}

export namespace jsonc {
  export type Rules = RuleOptions;

  export interface Options {
    files?: Config['files'];
    rules?: Rules;
    rulesStylistic?: boolean;
  }
}
