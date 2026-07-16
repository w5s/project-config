import { DtsOptions, Format, InlineConfig, OutExtensionContext, OutExtensionFactory, OutExtensionObject, Sourcemap, TsdownPlugin, TsdownPluginOption, UserConfig, UserConfig as UserConfig$1, UserConfigExport, UserConfigFn } from "tsdown";
//#region src/defaultConfig.d.ts
declare const defaultConfig: UserConfig$1;
//#endregion
//#region src/defineConfig.d.ts
/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
declare function defineConfig(optionsOrFn: UserConfig): UserConfig;
declare function defineConfig(optionsOrFn: UserConfigFn): UserConfigFn;
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
declare function defineConfigWith(baseConfig: UserConfig): {
  (optionsOrFn: UserConfig): UserConfig;
  (optionsOrFn: UserConfigFn): UserConfigFn;
};
//#endregion
export { type DtsOptions, type Format, type InlineConfig, type OutExtensionContext, type OutExtensionFactory, type OutExtensionObject, type Sourcemap, type TsdownPlugin, type TsdownPluginOption, type UserConfig, type UserConfigExport, type UserConfigFn, defaultConfig, defineConfig, defineConfigWith };
//# sourceMappingURL=index.d.ts.map