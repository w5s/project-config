import { ESLintConfig } from '@w5s/dev';

import { esRules } from './esRules.js';

export const tsRules = () => {
  const baseRules = esRules();

  return ESLintConfig.renameRules(
    {
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'minimumDescriptionLength': 3,
          'ts-check': false,
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': true,
        },
      ],
      '@typescript-eslint/default-param-last': baseRules['default-param-last'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-dupe-class-members': baseRules['no-dupe-class-members'],
      // '@typescript-eslint/no-array-constructor': baseRules['no-array-constructor'],
      // '@typescript-eslint/no-base-to-string': 'error', // TODO: require type check
      '@typescript-eslint/no-empty-function': baseRules['no-empty-function'],
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // if any is explicit then it's wanted
      // '@typescript-eslint/no-extra-semi': baseRules['no-extra-semi'], // TODO: @stylistic/no-extra-semi
      '@typescript-eslint/no-loop-func': baseRules['no-loop-func'],
      '@typescript-eslint/no-loss-of-precision': baseRules['no-loss-of-precision'],
      '@typescript-eslint/no-magic-numbers': baseRules['no-magic-numbers'],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'off', // We don't agree with community, namespaces are great and not deprecated
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-redeclare': ESLintConfig.fixme(baseRules['no-redeclare']),
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-shadow': baseRules['no-shadow'],
      '@typescript-eslint/no-this-alias': 'error',
      // '@typescript-eslint/no-unnecessary-condition': 'error',// TODO: require type check
      // '@typescript-eslint/no-unsafe-argument': 'error', // TODO: recommended type check
      '@typescript-eslint/no-unused-expressions': baseRules['no-unused-expressions'],
      '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],
      '@typescript-eslint/no-use-before-define': baseRules['no-use-before-define'],
      '@typescript-eslint/no-useless-constructor': baseRules['no-useless-constructor'],
      '@typescript-eslint/no-wrapper-object-types': 'error',
      // '@typescript-eslint/object-curly-spacing': baseRules['object-curly-spacing'],
      // '@typescript-eslint/only-throw-error': baseRules['no-throw-literal'], //TODO: Recommended type check
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // '@typescript-eslint/prefer-reduce-type-parameter': 'error', // TODO: strict type check
      // '@typescript-eslint/quotes': baseRules.quotes,
      '@typescript-eslint/require-await': baseRules['require-await'],
      // '@typescript-eslint/return-await': baseRules['no-return-await'], // TODO: strict type check
      // '@typescript-eslint/space-infix-ops': baseRules['space-infix-ops'],
      // '@typescript-eslint/strict-boolean-expressions': [
      //   'error',
      //   {
      //     allowNullableObject: false,
      //     allowNumber: false,
      //     allowString: false,
      //   },
      // ], //TODO: require typing
      // '@typescript-eslint/switch-exhaustiveness-check': 'error',//TODO: require type check
      '@typescript-eslint/triple-slash-reference': 'error',
    },
    {
      '@typescript-eslint': 'ts',
    },
  );
};
