import { type UserConfig, type ConfigType } from './type.js';
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param getConfig - the application custom configuration
 */
export declare function defineConfig(type: ConfigType, getConfig?: (defaultConfig: UserConfig) => UserConfig): UserConfig;
