import { defineConfig } from '@w5s/tsdown-config';

export default defineConfig({
  clean: true,
  entry: ['src/index.ts', 'src/rescue.ts'],
});
