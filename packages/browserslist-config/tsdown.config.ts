import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  entry: ['src/index.ts', 'src/development.ts', 'src/default.ts'],
  format: ['esm', 'cjs'],
});
