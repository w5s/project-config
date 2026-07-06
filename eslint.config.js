// @ts-check
import { defineConfig } from '@w5s/eslint-config';

export default await defineConfig({
  ignores: [
    '**/dist/**',
    '**/CHANGELOG.md',
    '**/CODE_OF_CONDUCT.md',
    '**/.temp/**',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'node/no-sync': 'off',
    'unicorn/prefer-module': 'off',
  },
});
