// @ts-check
import { defineConfig } from '@w5s/eslint-config';

export default await defineConfig({
  ignores: [
    '**/dist',
    '**/CHANGELOG.md',
    '**/CODE_OF_CONDUCT.md',
    '**/.temp/**',
  ],
  rules: {
    'node/no-sync': 'off',
    'import/no-unresolved': 'off',
    'unicorn/prefer-module': 'off',
  },
});
