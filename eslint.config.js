// eslint-disable-next-line import/no-unresolved
import { defineConfig } from '@w5s/eslint-config';

console.log(await defineConfig({

}))
export default [
  ...(await defineConfig({})),
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

