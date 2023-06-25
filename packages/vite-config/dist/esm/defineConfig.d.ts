import { type UserConfigExport } from 'vitest/config';
import { ConfigType } from './type.js';
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param config - the application custom configuration
 */
export declare function defineConfig(type: ConfigType, config?: UserConfigExport): UserConfigExport;
