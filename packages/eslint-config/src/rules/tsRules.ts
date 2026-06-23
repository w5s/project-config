import { ESLintConfig } from '@w5s/dev';
import { esRules } from './esRules.js';

export const tsRules = () => {
  const baseRules = esRules();

  return ESLintConfig.renameRules(
    {
      // '@typescript-eslint/comma-dangle': [
      //   baseRules['comma-dangle'][0],
      //   {
      //     ...baseRules['comma-dangle'][1],
      //     enums: baseRules['comma-dangle'][1].arrays,
      //     generics: baseRules['comma-dangle'][1].arrays,
      //     tuples: baseRules['comma-dangle'][1].arrays,
      //   },
      // ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
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
      // '@typescript-eslint/brace-style': baseRules['brace-style'],
      // '@typescript-eslint/comma-dangle': [
      //   baseRules['comma-dangle'][0],
      //   {
      //     ...baseRules['comma-dangle'][1],
      //     enums: baseRules['comma-dangle'][1].arrays,
      //     generics: baseRules['comma-dangle'][1].arrays,
      //     tuples: baseRules['comma-dangle'][1].arrays,
      //   },
      // ],
      // '@typescript-eslint/comma-spacing': baseRules['comma-spacing'],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/default-param-last': baseRules['default-param-last'],
      // '@typescript-eslint/dot-notation': baseRules['dot-notation'], // TODO: Stylistic typechecked
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // '@typescript-eslint/func-call-spacing': baseRules['func-call-spacing'],
      // '@typescript-eslint/indent': baseRules.indent,
      // '@typescript-eslint/keyword-spacing': baseRules['keyword-spacing'],
      // '@typescript-eslint/lines-between-class-members': baseRules['lines-between-class-members'],
      // '@typescript-eslint/member-delimiter-style': 'error', // TODO: @stylistic/member-delimiter-style
      '@typescript-eslint/naming-convention': [
        'error',
        // {
        //   format: ['PascalCase', 'camelCase'],
        //   leadingUnderscore: 'allow',
        //   selector: 'default',
        //   trailingUnderscore: 'allow',
        // },
        {
          format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variable',
          trailingUnderscore: 'allow',
        },
        // {
        //   format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
        //   leadingUnderscore: 'allowSingleOrDouble',
        //   selector: 'memberLike',
        //   trailingUnderscore: 'allowDouble',
        // },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
      ],
      // '@typescript-eslint/no-array-constructor': baseRules['no-array-constructor'],
      // '@typescript-eslint/no-base-to-string': 'error', // TODO: require type check
      '@typescript-eslint/no-dupe-class-members': baseRules['no-dupe-class-members'],
      '@typescript-eslint/no-empty-function': baseRules['no-empty-function'],
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // if any is explicit then it's wanted
      '@typescript-eslint/no-extra-parens': baseRules['no-extra-parens'],
      // '@typescript-eslint/no-extra-semi': baseRules['no-extra-semi'], // TODO: @stylistic/no-extra-semi
      '@typescript-eslint/no-inferrable-types': 'error',
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
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      // '@typescript-eslint/object-curly-spacing': baseRules['object-curly-spacing'],
      // '@typescript-eslint/only-throw-error': baseRules['no-throw-literal'], //TODO: Recommended type check
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // '@typescript-eslint/prefer-reduce-type-parameter': 'error', // TODO: strict type check
      // '@typescript-eslint/quotes': baseRules.quotes,
      '@typescript-eslint/require-await': baseRules['require-await'],
      // '@typescript-eslint/return-await': baseRules['no-return-await'], // TODO: strict type check
      // '@typescript-eslint/semi': baseRules.semi,
      // '@typescript-eslint/space-before-function-paren': baseRules['space-before-function-paren'],
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
      // '@typescript-eslint/type-annotation-spacing': 'error',// TODO: @stylistic/type-annotation-spacing
    },
    {
      '@typescript-eslint': 'ts',
    },
  );
};
