import type { Linter } from 'eslint';

export const overrides = () => ({
  // Too many errors in components
  'class-methods-use-this': 'off',
  // Annoying because it is not always wanted
  'default-case': 'off',
  // We do not want console.* in production. Disable this rule on a per line basis if needed
  'no-console': 'error',
  // Often useful in jsx
  'no-nested-ternary': 'off',
  // Too strict, for pure code prefer the functional plugin
  'no-param-reassign': ['error', { props: false }],
  // Allow for-of syntax
  // 'no-restricted-syntax': baseConfig.rules['no-restricted-syntax'].filter(
  //   // @ts-ignore No typing available
  //   ({ selector }) => selector !== 'ForOfStatement',
  // ),
  // underscore is often used (mongodb, etc)
  'no-underscore-dangle': 'off',
  // Ignore underscore case arguments
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  // Allow in some cases https://github.com/airbnb/javascript/issues/1089#issuecomment-1024351821
  'no-use-before-define': ['error', 'nofunc'],
  // Allow statements, to be compatible with '@typescript-eslint/no-floating-promises' fix
  'no-void': ['error', { allowAsStatement: true }],
  'unicode-bom': ['error', 'never'],
} satisfies Linter.RulesRecord);
