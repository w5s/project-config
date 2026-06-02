import * as TsDown from "tsdown";
import { UserConfig } from "tsdown";

//#region src/defaultConfig.d.ts
declare const defaultConfig: UserConfig;
//#endregion
//#region src/defineConfig.d.ts
/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
declare function defineConfig(optionsOrFn: TsDown.UserConfig | TsDown.UserConfigFn): TsDown.UserConfig | TsDown.UserConfigFn;
//#endregion
//#region src/defineConfigWith.d.ts
/**
 * Returns a `defineConfig`-like function that uses a custom base config instead of the package default.
 * Use this when you have a shared base (e.g. a library preset) and want to reuse it across multiple packages.
 *
 * @example
 * ```ts
 * // Helper for shared library preset
 * export const defineConfig = defineConfigWith({ format: ['esm', 'cjs'] });
 *
 * // in tsdown.config.ts
 * export default defineConfig({ entry: ['src/index.ts'] });
 * ```
 * @param baseConfig The base configuration to merge with the package default.
 */
declare function defineConfigWith(baseConfig: TsDown.UserConfig): ((optionsOrFn: TsDown.UserConfig | TsDown.UserConfigFn) => TsDown.UserConfig | TsDown.UserConfigFn);
//#endregion
export { defaultConfig, defineConfig, defineConfigWith };
//# sourceMappingURL=index.d.ts.map