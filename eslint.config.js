import { defineConfig } from '@w5s/eslint-config';

export default [
  ...(await defineConfig({
    ignores: [
      '**/dist',
      '**/CHANGELOG.md',
      '**/CODE_OF_CONDUCT.md',
      '**/_tester/**',
    ],
  })),
  {
    // parserOptions: {
    //   project: './tsconfig.json',
    // },
    rules: {
      'node/no-sync': 'off',
      'import/no-unresolved': 'off',
      'unicorn/prefer-module': 'off',
    },
    // plugins: [
    //   'sort-keys'
    // ],
  },
];
