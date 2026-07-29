import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  deps: {
    alwaysBundle: [/.*/],
  },
  entry: ['src/index.ts'],
});
