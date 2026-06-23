import * as TsDown from 'tsdown';
import type { UserConfig, UserConfigFn } from './types.js';
import { defaultConfig } from './defaultConfig.js';
import { withPackageDefine } from './withPackageDefine.js';

/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
export function defineConfig(optionsOrFn: UserConfig): UserConfig;
export function defineConfig(optionsOrFn: UserConfigFn): UserConfigFn;
export function defineConfig(optionsOrFn: UserConfig | UserConfigFn): UserConfig | UserConfigFn {
  // @ts-ignore tsdown's overloads do not narrow cleanly after wrapping function configs.
  return TsDown.defineConfig(
    typeof optionsOrFn === 'function'
      ? (config, context) => optionsOrFn(withPackageDefine(TsDown.mergeConfig(defaultConfig, config)), context)
      : withPackageDefine(TsDown.mergeConfig(defaultConfig, optionsOrFn)),
  );
}
