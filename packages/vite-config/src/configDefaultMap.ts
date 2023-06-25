import { UserConfig, configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';
import { ConfigType } from './type.js';

const defaultConfig: UserConfig = {
  plugins: [dts({})],
  test: configDefaults,
};

export const configDefaultMap: { readonly [T in ConfigType]: UserConfig } = Object.freeze({
  application: defaultConfig,
  library: Object.freeze({
    ...defaultConfig,
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
  } satisfies UserConfig),
});
