import { type UserConfigExport } from 'vitest/config';
import { mergeConfig } from 'vite';
import { configDefaultMap } from './configDefaultMap.js';
import { ConfigType } from './type.js';

/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param config - the application custom configuration
 */
export function defineConfig(type: ConfigType, config?: UserConfigExport): UserConfigExport {
  const baseConfig = configDefaultMap[type];
  return config == null
    ? baseConfig
    : typeof config === 'function'
    ? (configEnv) => mergeConfig(baseConfig, config(configEnv))
    : mergeConfig(baseConfig, config);
}
