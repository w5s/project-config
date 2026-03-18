import * as TsDown from 'tsdown';
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
export declare function defineConfigWith(baseConfig: TsDown.UserConfig): ((optionsOrFn: TsDown.UserConfig | TsDown.UserConfigFn) => TsDown.UserConfig | TsDown.UserConfigFn);
