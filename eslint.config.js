 
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
    rules: {
      'node/no-sync': 'off',
      'import/no-unresolved': 'off',
    },
  }
 //{
    // "parserOptions": {
    //   "project": "./tsconfig.json"
    // },
    // "plugins": [
    //   "sort-keys"
    // ],
    // "rules": {
    //   "unicorn/prefer-module": "off"
    // },
    // "root": true
  // }
]

