import { configDefaultMap } from './configDefaultMap.js';
import { type UserConfig, type ConfigType } from './type.js';

/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param getConfig - the application custom configuration
 */
export function defineConfig(type: ConfigType, getConfig?: (defaultConfig: UserConfig) => UserConfig): UserConfig {
  const baseConfig = configDefaultMap[type];
  return getConfig == null ? baseConfig : getConfig(baseConfig);
}
