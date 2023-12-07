import { type UserConfig as ViteUserConfig } from 'vite';
import { type UserConfig as VitestUserConfig } from 'vitest/config.js';
/**
 *
 */
export type ConfigType = 'application' | 'library';
/**
 *
 */
export interface UserConfig extends ViteUserConfig {
    test?: VitestUserConfig['test'];
}
