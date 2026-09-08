import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  deps: {
    alwaysBundle: ['clipanion'],
  },
  entry: ['src/index.ts', 'src/cli.ts', 'src/zx.ts'],
});
