import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts', 'src/config.ts', 'src/runtime.ts', '!src/**/*.test.*', '!src/**/*.spec.*', '!**/__mocks__/**'],
  format: ['esm'],
});
