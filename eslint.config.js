// @ts-check
import { defineConfig } from '@w5s/eslint-config';

export default await defineConfig({
  ignores: ['**/dist'],
  rules: {
    'import/no-unresolved': 'off',
    'node/no-sync': 'off',
  },
});
