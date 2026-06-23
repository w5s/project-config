import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  format: ['esm', 'cjs'],
  dts: {
    enabled: true,
    sourcemap: true,
  },
  clean: true,
});
