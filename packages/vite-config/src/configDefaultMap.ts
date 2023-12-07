import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';
import { type ConfigType, type UserConfig } from './type.js';

const defaultConfig: UserConfig = {
  test: { ...configDefaults },
};

export const configDefaultMap: { readonly [T in ConfigType]: UserConfig } = {
  application: defaultConfig,
  library: {
    ...defaultConfig,
    plugins: [
      ...(defaultConfig.plugins ?? []),
      dts({
        tsconfigPath: 'tsconfig.build.json',
      }),
    ],
    build: {
      ...defaultConfig.build,
      sourcemap: true,
      minify: false,
      lib: {
        ...defaultConfig.build?.lib,
        entry: 'src/index.ts',
        formats: ['cjs', 'es'],
        fileName: (format) => `[name].${format === 'es' ? 'js' : format === 'cjs' ? 'cjs' : `${format}.js`}`,
      },
      rollupOptions: {
        output: {
          // assetFileNames: '[name].[ext]',
          preserveModules: true,
        },
      },
    },
  } satisfies UserConfig,
};
