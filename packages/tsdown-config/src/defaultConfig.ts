import type { UserConfig } from 'tsdown';

export const defaultConfig: UserConfig = {
  entry: ['src/index.ts', '!src/**/*.test.*', '!src/**/*.spec.*', '!**/__mocks__/**'],
  sourcemap: true,
  format: ['esm'],
  dts: true,
  clean: true,
  // treeshake: 'recommended',
  // splitting: false,
  tsconfig: 'tsconfig.build.json',
};
