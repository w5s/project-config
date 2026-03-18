import * as TsDown from 'tsdown';
/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
export declare function defineConfig(optionsOrFn: TsDown.UserConfig | TsDown.UserConfigFn): TsDown.UserConfig | TsDown.UserConfigFn;
