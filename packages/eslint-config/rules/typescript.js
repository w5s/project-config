const { fixme, off, warn, error, concatESConfig } = require('./_rule');
const { rules: _baseRules } = require('./base');

// Fix : TS pluging seems to modify the rules
const baseRules = JSON.parse(JSON.stringify(_baseRules));

const duplicateTSC = off; // = "off because tsc already checks that"

module.exports = concatESConfig(
  /**
   * Plugin rules
   */
  {
    extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': error,
      '@typescript-eslint/ban-ts-comment': [
        warn,
        {
          minimumDescriptionLength: 3,
          'ts-check': false,
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': true,
        },
      ],
      '@typescript-eslint/ban-types': error,
      '@typescript-eslint/consistent-type-assertions': [
        error,
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/dot-notation': baseRules['dot-notation'],
      '@typescript-eslint/explicit-function-return-type': off,
      '@typescript-eslint/explicit-module-boundary-types': off,
      '@typescript-eslint/member-delimiter-style': error,
      '@typescript-eslint/naming-convention': [
        error,
        {
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variable',
          trailingUnderscore: 'allow',
        },
        {
          format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          selector: 'memberLike',
          trailingUnderscore: 'allowDouble',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
      ],
      '@typescript-eslint/no-array-constructor': error,
      '@typescript-eslint/no-base-to-string': error,
      '@typescript-eslint/no-empty-function': baseRules['no-empty-function'],
      '@typescript-eslint/no-empty-interface': [error, { allowSingleExtends: true }],
      '@typescript-eslint/no-explicit-any': off, // if any is explicit then it's wanted
      '@typescript-eslint/no-implicit-any-catch': error,
      '@typescript-eslint/no-inferrable-types': error,
      '@typescript-eslint/no-misused-new': error,
      '@typescript-eslint/no-namespace': off, // We don't agree with community, namespaces are great and not deprecated
      '@typescript-eslint/no-non-null-assertion': error,
      '@typescript-eslint/no-redeclare': fixme(error /* baseRules['no-redeclare'] */), // Error level so it is strongly discouraged
      '@typescript-eslint/no-require-imports': error,
      '@typescript-eslint/no-shadow': baseRules['no-shadow'], // Does not allow to declare type and const with same name
      '@typescript-eslint/no-this-alias': error,
      '@typescript-eslint/no-unnecessary-condition': error,
      '@typescript-eslint/no-unsafe-argument': error,
      '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],
      '@typescript-eslint/no-use-before-define': baseRules['no-use-before-define'],
      '@typescript-eslint/no-useless-constructor': baseRules['no-useless-constructor'],
      '@typescript-eslint/no-var-requires': error,
      '@typescript-eslint/prefer-namespace-keyword': error,
      '@typescript-eslint/prefer-reduce-type-parameter': error,
      '@typescript-eslint/strict-boolean-expressions': [
        error,
        {
          allowNullableObject: false,
          allowNumber: false,
          allowString: false,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': error,
      '@typescript-eslint/triple-slash-reference': error,
      '@typescript-eslint/type-annotation-spacing': error,
    },
  },
  /**
   * Disabled rules
   */
  {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    rules: {
      camelcase: off,
      'constructor-super': off,
      'dot-notation': off,
      'getter-return': off,
      'import/default': duplicateTSC,
      'import/export': fixme(error), // https://github.com/benmosher/eslint-plugin-import/issues/1964
      'import/named': duplicateTSC,
      'import/namespace': duplicateTSC,
      'import/no-named-as-default-member': duplicateTSC,
      'import/no-unresolved': duplicateTSC,
      'no-array-constructor': off,
      'no-const-assign': off,
      'no-dupe-args': off,
      'no-dupe-class-members': off,
      'no-dupe-keys': off,
      'no-empty-function': off,
      'no-func-assign': off,
      'no-import-assign': off,
      'no-inner-declarations': fixme(error), // https://github.com/typescript-eslint/typescript-eslint/issues/239
      'no-new-symbol': off,
      'no-obj-calls': off,
      'no-redeclare': off,
      'no-setter-return': off,
      'no-shadow': off, // https://github.com/typescript-eslint/typescript-eslint/issues/2483
      'no-this-before-super': off,
      'no-undef': off,
      'no-unreachable': off,
      'no-unsafe-negation': off,
      'no-unused-vars': off,
      'no-use-before-define': off,
      'no-useless-constructor': off,
      'no-var': error,
      'prefer-const': error,
      'prefer-rest-params': error,
      'prefer-spread': error,
      'valid-typeof': off,
    },
  }
);
