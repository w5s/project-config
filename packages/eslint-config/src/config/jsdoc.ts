import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/jsdoc.js';

import { esSourceGlob, tsSourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultJsFiles = [esSourceGlob];
const defaultTsFiles = [tsSourceGlob];

export async function jsdoc(options: jsdoc.Options = {}): Promise<ReadonlyArray<Config>> {
  const [jsdocPlugin] = await Promise.all([interopDefault(import('eslint-plugin-jsdoc'))] as const);
  const {
    files,
    namespace,
    recommended,
    rules = {},
    stylistic,
  } = defaultPluginOptions(options);

  const recommendedRules = recommended
    ? jsdocPlugin.configs['flat/recommended-typescript-flavor'].rules
    : {};
  const stylisticRules = stylistic.enabled
    ? {
        ...jsdocPlugin.configs['flat/stylistic-typescript-flavor'].rules,
        'jsdoc/check-alignment': 'warn',
        'jsdoc/multiline-blocks': 'warn',
        'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
      }
    : {};

  return [
    {
      name: `${namespace}/jsdoc/setup`,
      plugins: {
        jsdoc: jsdocPlugin,
      },
    },
    {
      files: withDefaultFiles(files, defaultJsFiles),
      name: `${namespace}/jsdoc/rules-js`,
      rules: {
        ...recommendedRules,

        ...(recommended
          ? {
              'jsdoc/no-undefined-types': 'off', // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
              'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
              'jsdoc/require-jsdoc': 'off',
              'jsdoc/require-param-description': 'off',
              'jsdoc/require-param-type': 'off',
              'jsdoc/require-returns': 'off',
              'jsdoc/require-returns-type': 'off',
              'jsdoc/valid-types': 'off', // FIXME: reports lots of false positive
            }
          : {}),

        ...stylisticRules,
        ...rules,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
    {
      files: withDefaultFiles(files, defaultTsFiles),
      name: `${namespace}/jsdoc/rules-ts`,
      rules: {
        ...recommendedRules,

        ...(recommended
          ? {
              'jsdoc/no-types': 'warn',
              'jsdoc/no-undefined-types': 'off', // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
              'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
              'jsdoc/require-jsdoc': 'off',
              'jsdoc/require-param-description': 'off',
              'jsdoc/require-param-type': 'off',
              'jsdoc/require-returns': 'off',
              'jsdoc/require-returns-type': 'off',
              'jsdoc/valid-types': 'off', // FIXME: reports lots of false positive
            }
          : {}),

        ...stylisticRules,
        ...rules,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
}

export namespace jsdoc {
  export interface Options extends PluginOptionsBase<Rules> {}

  export type Rules = RuleOptions;
}
