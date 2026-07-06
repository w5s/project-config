import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  clean: true,
  dts: {
    enabled: true,
    sourcemap: true,
  },
  format: ['esm', 'cjs'],
});
