import { defineConfig } from '@w5s/eslint-config';

// console.log((await defineConfig({
//   ignores: [
//   ]
// })))
export default [
  ...(await defineConfig({
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
