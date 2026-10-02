// @ts-check
import { defineConfig } from '@w5s/eslint-config';

export default await defineConfig({
  ignores: ['**/dist'],
  rules: {
    'node/no-sync': 'off',
  },
});
