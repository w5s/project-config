// Inspired by https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js

const { fixme, off, warn, error, concatESConfig } = require('./_rule');
const { rules: _baseRules } = require('./base');
const { rules: _baseImportRules } = require('./import');

// Fix Hack : TS pluging seems to modify the rules
const deepClone = (/** @type {Record<string, unknown>} */ anyValue) => JSON.parse(JSON.stringify(anyValue));
const baseRules = deepClone(_baseRules);
const baseImportRules = deepClone(_baseImportRules);

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
      '@typescript-eslint/brace-style': baseRules['brace-style'],
      '@typescript-eslint/comma-dangle': [
        baseRules['comma-dangle'][0],
        {
          ...baseRules['comma-dangle'][1],
          enums: baseRules['comma-dangle'][1].arrays,
          generics: baseRules['comma-dangle'][1].arrays,
          tuples: baseRules['comma-dangle'][1].arrays,
        },
      ],
      '@typescript-eslint/comma-spacing': baseRules['comma-spacing'],
      '@typescript-eslint/consistent-type-assertions': [
        error,
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/default-param-last': baseRules['default-param-last'],
      '@typescript-eslint/dot-notation': baseRules['dot-notation'],
      '@typescript-eslint/explicit-function-return-type': off,
      '@typescript-eslint/explicit-module-boundary-types': off,
      '@typescript-eslint/func-call-spacing': baseRules['func-call-spacing'],
      '@typescript-eslint/indent': baseRules.indent,
      '@typescript-eslint/keyword-spacing': baseRules['keyword-spacing'],
      '@typescript-eslint/lines-between-class-members': baseRules['lines-between-class-members'],
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
      '@typescript-eslint/no-array-constructor': baseRules['no-array-constructor'],
      '@typescript-eslint/no-base-to-string': error,
      '@typescript-eslint/no-dupe-class-members': baseRules['no-dupe-class-members'],
      '@typescript-eslint/no-empty-function': baseRules['no-empty-function'],
      '@typescript-eslint/no-empty-interface': [error, { allowSingleExtends: true }],
      '@typescript-eslint/no-explicit-any': off, // if any is explicit then it's wanted
      '@typescript-eslint/no-extra-parens': baseRules['no-extra-parens'],
      '@typescript-eslint/no-extra-semi': baseRules['no-extra-semi'],
      '@typescript-eslint/no-implicit-any-catch': error,
      '@typescript-eslint/no-inferrable-types': error,
      '@typescript-eslint/no-loop-func': baseRules['no-loop-func'],
      '@typescript-eslint/no-loss-of-precision': baseRules['no-loss-of-precision'],
      '@typescript-eslint/no-magic-numbers': baseRules['no-magic-numbers'],
      '@typescript-eslint/no-misused-new': error,
      '@typescript-eslint/no-namespace': off, // We don't agree with community, namespaces are great and not deprecated
      '@typescript-eslint/no-non-null-assertion': error,
      '@typescript-eslint/no-redeclare': fixme(baseRules['no-redeclare']),
      '@typescript-eslint/no-require-imports': error,
      '@typescript-eslint/no-shadow': baseRules['no-shadow'],
      '@typescript-eslint/no-this-alias': error,
      '@typescript-eslint/no-throw-literal': baseRules['no-throw-literal'],
      '@typescript-eslint/no-unnecessary-condition': error,
      '@typescript-eslint/no-unsafe-argument': error,
      '@typescript-eslint/no-unused-expressions': baseRules['no-unused-expressions'],
      '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],
      '@typescript-eslint/no-use-before-define': baseRules['no-use-before-define'],
      '@typescript-eslint/no-useless-constructor': baseRules['no-useless-constructor'],
      '@typescript-eslint/no-var-requires': error,
      '@typescript-eslint/object-curly-spacing': baseRules['object-curly-spacing'],
      '@typescript-eslint/prefer-namespace-keyword': error,
      '@typescript-eslint/prefer-reduce-type-parameter': error,
      '@typescript-eslint/quotes': baseRules.quotes,
      '@typescript-eslint/require-await': baseRules['require-await'],
      '@typescript-eslint/return-await': baseRules['no-return-await'],
      '@typescript-eslint/semi': baseRules.semi,
      '@typescript-eslint/space-before-function-paren': baseRules['space-before-function-paren'],
      '@typescript-eslint/space-infix-ops': baseRules['space-infix-ops'],
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
   * JSDoc overrides
   */
  {
    rules: {
      'jsdoc/no-types': error,
      'jsdoc/require-param': off,
      'jsdoc/require-param-type': off,
      'jsdoc/require-returns': off,
      'jsdoc/require-returns-type': off,
    },
  },
  /**
   * Import overrides
   */
  {
    rules: {
      'import/extensions': [
        baseImportRules['import/extensions'][0],
        baseImportRules['import/extensions'][1],
        {
          ...baseImportRules['import/extensions'][2],
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': [
        baseImportRules['import/no-extraneous-dependencies'][0],
        {
          ...baseImportRules['import/no-extraneous-dependencies'][1],
          devDependencies: baseImportRules['import/no-extraneous-dependencies'][1].devDependencies.reduce(
            (/** @type {string[]} */ result, /** @type {string} */ devDep) => {
              const toAppend = [devDep];
              const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
              if (devDepWithTs !== devDep) {
                toAppend.push(devDepWithTs);
              }
              return [...result, ...toAppend];
            },
            []
          ),
        },
      ],
    },
  },
  /**
   * Disabled rules
   */
  {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    rules: {
      'brace-style': off,
      camelcase: off,
      'comma-dangle': off,
      'comma-spacing': off,
      'constructor-super': off,
      'default-param-last': off,
      'dot-notation': off,
      'func-call-spacing': off,
      'getter-return': off,
      'import/default': duplicateTSC,
      'import/export': fixme(error), // https://github.com/benmosher/eslint-plugin-import/issues/1964
      'import/named': duplicateTSC,
      'import/namespace': duplicateTSC,
      'import/no-named-as-default-member': duplicateTSC,
      'import/no-unresolved': duplicateTSC,
      indent: off,
      'keyword-spacing': off,
      'lines-between-class-members': off,
      'no-array-constructor': off,
      'no-const-assign': off,
      'no-dupe-args': off,
      'no-dupe-class-members': off,
      'no-dupe-keys': off,
      'no-empty-function': off,
      'no-extra-parens': off,
      'no-extra-semi': off,
      'no-func-assign': off,
      'no-implied-eval': off,
      'no-import-assign': off,
      'no-inner-declarations': fixme(error), // https://github.com/typescript-eslint/typescript-eslint/issues/239
      'no-loop-func': off,
      'no-loss-of-precision': off,
      'no-magic-numbers': off,
      'no-new-func': off,
      'no-new-symbol': off,
      'no-obj-calls': off,
      'no-redeclare': off,
      'no-return-await': off,
      'no-setter-return': off,
      'no-shadow': off,
      'no-this-before-super': off,
      'no-throw-literal': off,
      'no-undef': off,
      'no-unreachable': off,
      'no-unsafe-negation': off,
      'no-unused-expressions': off,
      'no-unused-vars': off,
      'no-use-before-define': off,
      'no-useless-constructor': off,
      'no-var': error,
      'object-curly-spacing': off,
      'prefer-const': error,
      'prefer-rest-params': error,
      'prefer-spread': error,
      quotes: off,
      'require-await': off,
      semi: off,
      'space-before-function-paren': off,
      'space-infix-ops': off,
      'valid-typeof': off,
    },
  }
);
