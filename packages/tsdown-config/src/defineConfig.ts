import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';
import { withPackageDefine } from './withPackageDefine.js';

/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
export function defineConfig(
  optionsOrFn: TsDown.UserConfig | TsDown.UserConfigFn,
): TsDown.UserConfig | TsDown.UserConfigFn {
  // @ts-ignore
  return TsDown.defineConfig(
    typeof optionsOrFn === 'function'
      ? (config, context) => optionsOrFn(withPackageDefine(TsDown.mergeConfig(defaultConfig, config)), context)
      : withPackageDefine(TsDown.mergeConfig(defaultConfig, optionsOrFn)),
  );
}
