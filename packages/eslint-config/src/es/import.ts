import { ESLintConfig, EXTENSIONS, EXTENSIONS_RESOURCES_REGEX, IGNORE_LIST } from '@w5s/dev';
import type eslint from 'eslint';
// @ts-ignore
import importConfig from 'eslint-config-airbnb-base/rules/imports';
import { fixme } from '../_rule.js';

// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import

const config: eslint.Linter.Config = ESLintConfig.concat(
  // @ts-ignore
  importConfig,
  // Overrides
  {
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          // js: 'never',
          // jsx: 'never',
          // mjs: 'never',
        },
      ],
      'import/no-deprecated': 'off', // Performance issues
      'import/no-extraneous-dependencies': [
        'error',
        {
          ...importConfig.rules['import/no-extraneous-dependencies'][1],
          devDependencies: [
            ...importConfig.rules['import/no-extraneous-dependencies'][1].devDependencies,
            '**/*.config.[jt]s?(x)',
            '**/*.config.cjs',
          ],
        },
      ],
      'import/no-named-as-default': 'off', // Performance issues
      'import/no-unused-modules': 'off', // Performance issues
      'import/prefer-default-export': 'off', // Not aligned, default export does not bring sufficient semantic
      'import/unambiguous': fixme('off'), // Disable because proposal still in progress
    },
    settings: {
      'import/extensions': EXTENSIONS,

      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/ignore': [...IGNORE_LIST, EXTENSIONS_RESOURCES_REGEX],

      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': EXTENSIONS.filter((ext) => !ext.includes('js')),
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: [...EXTENSIONS, '.json'],
        },
      },
    },
  }
);

export = config;
