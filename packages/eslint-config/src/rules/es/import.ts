import { ESLintConfig, Project } from '@w5s/dev';
import type eslint from 'eslint';
// @ts-ignore airbnb is not typed
import importConfig from 'eslint-config-airbnb-base/rules/imports';

// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import

const config: eslint.Linter.Config = ESLintConfig.concat(
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
            'dangerfile.[jt]s',
            '**/*.config.[jt]s?(x)',
            '**/*.config.cjs',
          ],
        },
      ],
      'import/no-named-as-default': 'off', // Performance issues
      'import/no-unused-modules': 'off', // Performance issues
      'import/prefer-default-export': 'off', // Not aligned, default export does not bring sufficient semantic
      'import/unambiguous': ESLintConfig.fixme('off'), // Disable because proposal still in progress
    },
    settings: {
      'import/extensions': Project.sourceExtensions(),

      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/ignore': [...Project.ignored(), Project.extensionsToMatcher(Project.resourceExtensions()).source],

      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': Project.sourceExtensions().filter((ext) => !ext.includes('js')),
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: [...Project.sourceExtensions(), '.json'],
        },
      },
    },
  }
);

export = config;
