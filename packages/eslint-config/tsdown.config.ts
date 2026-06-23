import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  format: ['esm'],
  dts: {
    enabled: true,
    sourcemap: true,
  },
  clean: true,
});
