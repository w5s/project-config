import { defineConfig } from '@w5s/eslint-config';

export default [
  ...(await defineConfig({
    markdown: false,
    ignores: [
      '**/dist',
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
