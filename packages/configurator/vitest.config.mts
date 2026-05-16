import { configDefaults, defineConfig } from 'vitest/config';
import nodePath from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@w5s/configurator/runtime': nodePath.resolve(rootDir, 'src/runtime.ts'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude],
  },
});
