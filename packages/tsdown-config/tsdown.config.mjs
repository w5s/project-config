import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/index.ts',
  ],
  format: [
    'esm',
  ],
  outExtensions({ format }) {
    return {
      js: format === 'es' ? '.js' : '.cjs',
    };
  },
  sourcemap: true,
});
