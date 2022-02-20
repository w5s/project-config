const { off, error, concatESConfig } = require('./_rule');

module.exports = concatESConfig(
  {
    env: {
      jest: true,
    },
    extends: ['plugin:jest/recommended'],
    plugins: ['jest'],
    rules: {
      'jest/expect-expect': off, // Disabled because it does not handle functions that does the expect
      'jest/no-alias-methods': error,
      'jest/no-commented-out-tests': error,
      'jest/no-deprecated-functions': off,
      'jest/no-disabled-tests': off,
      'jest/no-done-callback': error,
      'jest/no-export': off,
      'jest/no-focused-tests': error,
      'jest/no-identical-title': error,
      'jest/no-restricted-matchers': [
        error,
        {
          toBeFalsy: 'Avoid `toBeFalsy`',
          toBeTruthy: 'Avoid `toBeTruthy`',
        },
      ],
      'jest/prefer-spy-on': error,
      'jest/prefer-to-contain': error,
      'jest/valid-expect': error,
      'jest/valid-title': [error, { ignoreTypeOfDescribeName: true }],
    },
  },
  /**
   * Unicorn less strict to help writing tests
   */
  {
    rules: {
      'unicorn/consistent-function-scoping': off,
      'unicorn/no-useless-undefined': off,
    },
  },
  /**
   * Typescript config is set to be less strict because we often have "hack", "mock" in tests
   */
  {
    rules: {
      '@typescript-eslint/no-unsafe-assignment': off,
      '@typescript-eslint/no-unsafe-call': off,
      '@typescript-eslint/no-unsafe-member-access': off,
      '@typescript-eslint/no-unsafe-return': off,
      '@typescript-eslint/restrict-template-expressions': off,
      '@typescript-eslint/unbound-method': off,
    },
  }
);
