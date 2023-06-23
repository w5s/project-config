import { UserConfigExport, configDefaults } from 'vitest/config';
import { ConfigType } from './type.js';

const defaultConfig = {
  test: configDefaults,
};

export const configDefaultMap: { readonly [T in ConfigType]: UserConfigExport } = Object.freeze({
  application: defaultConfig,
  library: defaultConfig,
});
