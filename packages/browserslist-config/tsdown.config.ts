import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: ['src/index.ts', 'src/development.ts', 'src/default.ts'],
});
