import { DtsOptions, Format, InlineConfig, OutExtensionContext, OutExtensionFactory, OutExtensionObject, Sourcemap, TsdownPlugin, TsdownPluginOption, UserConfig, UserConfig as UserConfig$1, UserConfigExport, UserConfigFn } from "tsdown";
export declare const defaultConfig: UserConfig$1;
/**
 * Define a tsdown configuration with the package default (entry, format, dts, package defines, etc.).
 * Accepts either a config object or a function `(config, context) => config`.
 *
 * @param optionsOrFn
 */
export declare function defineConfig(optionsOrFn: UserConfig): UserConfig;
export declare function defineConfig(optionsOrFn: UserConfigFn): UserConfigFn;
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
export declare function defineConfigWith(baseConfig: UserConfig): {
  (optionsOrFn: UserConfig): UserConfig;
  (optionsOrFn: UserConfigFn): UserConfigFn;
};
export type { DtsOptions, Format, InlineConfig, OutExtensionContext, OutExtensionFactory, OutExtensionObject, Sourcemap, TsdownPlugin, TsdownPluginOption, UserConfig, UserConfigExport, UserConfigFn };
//# sourceMappingURL=index.d.ts.map