// @ts-check
import { defineConfig } from '@w5s/eslint-config';

export default await defineConfig({
  ignores: ['**/dist', '**/*-workspace'],
  rules: {
    'node/no-sync': 'off',
  },
});
