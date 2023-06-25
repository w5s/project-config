import { UserConfig, configDefaults } from 'vitest/config';
import { ConfigType } from './type.js';

const defaultConfig: UserConfig = {
  test: configDefaults,
};

export const configDefaultMap: { readonly [T in ConfigType]: UserConfig } = Object.freeze({
  application: defaultConfig,
  library: Object.freeze({
    ...defaultConfig,
    build: {
      ...defaultConfig.build,
      sourcemap: true,
      lib: {
        ...defaultConfig.build?.lib,
        entry: 'src/index.ts',
        formats: ['cjs', 'es'],
        fileName: (format) => `[name].${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : `${format}.js`}`,
      },
      rollupOptions: {
        output: {
          assetFileNames: '[name].[ext]',
          preserveModules: true,
        },
      },
    },
  } satisfies UserConfig),
});
