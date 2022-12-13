const { off, error, concatESConfig } = require('./_rule.js');

module.exports = concatESConfig(
  {
    env: {
      'jest/globals': true,
    },
    extends: ['plugin:jest/recommended'],
    globals: {
      context: true,
    },
    plugins: ['jest'],
    rules: {
      'jest/consistent-test-it': error,
      'jest/expect-expect': off, // Disabled because it does not handle functions that does the expect
      'jest/no-alias-methods': error,
      'jest/prefer-spy-on': error,
      'jest/prefer-to-contain': error,
      'jest/valid-title': [error, { ignoreTypeOfDescribeName: true }],
    },
    settings: {
      jest: {
        // Compatibility with mocha, cypress, etc.
        globalAliases: {
          describe: ['context'],
          fdescribe: ['fcontext'],
          xdescribe: ['xcontext'],
        },

        version: 'latest',
      },
    },
  },
  /**
   * Unicorn less strict to help writing tests
   */
  {
    rules: {
      'unicorn/consistent-function-scoping': off,
      'unicorn/no-useless-undefined': off,
      'unicorn/prefer-module': off,
    },
  },
  /**
   * Typescript config is set to be less strict because we often have "hack", "mock" in tests
   */
  {
    rules: {
      '@typescript-eslint/naming-convention': off,
      '@typescript-eslint/no-non-null-assertion': off,
      '@typescript-eslint/no-unsafe-assignment': off,
      '@typescript-eslint/no-unsafe-call': off,
      '@typescript-eslint/no-unsafe-member-access': off,
      '@typescript-eslint/no-unsafe-return': off,
      '@typescript-eslint/restrict-template-expressions': off,
      '@typescript-eslint/unbound-method': off,
    },
  }
);
