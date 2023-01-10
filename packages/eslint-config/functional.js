// @see https://github.com/danielnixon/eslint-config-typed-fp/blob/master/src/index.ts

module.exports = {
  overrides: [
    {
      extends: ['plugin:functional/recommended', 'plugin:total-functions/recommended'],
      files: [
        'src/**/!(*.spec|*.ispec).ts',
        // 'src/**/!(*.spec).js'
      ],
      rules: {
        'functional/functional-parameters': [
          'error',
          {
            allowArgumentsKeyword: false,
            allowRestParameter: false,
            enforceParameterCount: false,
          },
        ],
        'functional/no-conditional-statement': 'off',
        'functional/no-method-signature': 'off',
        'functional/prefer-readonly-type': [
          // @see https://github.com/jonaskello/eslint-plugin-functional/issues/51
          'off', // error
          {
            // When you call methods like `filter` and `concat` on an array (_even a readonly_ array) you always get back a mutable array.
            // By default prefer-readonly-type won't catch these cases, but with the checkImplicit option on it will.
            // See https://github.com/jonaskello/eslint-plugin-functional/blob/master/docs/rules/prefer-readonly-type.md#checkimplicit
            // @see also https://github.com/danielnixon/readonly-types/issues/7
            // @see https://github.com/jonaskello/eslint-plugin-functional/issues/153
            checkImplicit: true,
          },
        ],
        'functional/prefer-type-literal': 'off',
        'total-functions/no-unsafe-readonly-mutable-assignment': [
          // @see https://github.com/danielnixon/eslint-plugin-total-functions/issues?q=is%3Aissue+is%3Aopen+no-unsafe-readonly-mutable-assignment
          'off',
        ],

        'total-functions/no-unsafe-type-assertion': [
          // Don't need this given consistent-type-assertions bans type assertions entirely.,
          'off',
        ],
      },
    },
  ],
  plugins: ['functional', 'total-functions'],
};
