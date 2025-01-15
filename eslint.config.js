// eslint-disable-next-line import/no-unresolved
import { defineConfig } from '@w5s/eslint-config';

// console.log((await defineConfig({
//   ignores: [
//   ]
// })))
export default [
  ...(await defineConfig({
    ignores: [],
  })),
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

