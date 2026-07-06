import type { UserConfig } from 'tsdown';

export const defaultConfig: UserConfig = {
  dts: true,
  entry: ['src/index.ts', '!src/**/*.test.*', '!src/**/*.spec.*', '!**/__mocks__/**'],
  format: ['esm'],
  outExtensions({ format }) {
    return {
      js: format === 'es' ? '.js' : '.cjs',
    };
  },
  sourcemap: true,
  // clean: true,
  // treeshake: 'recommended',
  // splitting: false,
  tsconfig: 'tsconfig.build.json',
};
