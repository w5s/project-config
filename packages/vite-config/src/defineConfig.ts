import { mergeConfig, type UserConfigExport } from 'vitest/config';
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
  return config == null ? baseConfig : mergeConfig(baseConfig, config);
}
