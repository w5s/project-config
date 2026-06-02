import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  sourcemap: true,
  format: [
    'esm',
  ],
  dts: true,
  clean: true,
  outExtensions({ format }) {
    return {
      js: format === 'es' ? '.js' : '.cjs',
    };
  },
});
