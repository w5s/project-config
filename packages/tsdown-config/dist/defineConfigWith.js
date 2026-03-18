import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';
import { withPackageDefine } from './withPackageDefine.js';
function mergeConfig(base, extension) {
    return TsDown.mergeConfig(base, extension);
}
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
export function defineConfigWith(baseConfig) {
    const resolvedBaseConfig = mergeConfig(defaultConfig, baseConfig);
    return (optionsOrFn) => TsDown.defineConfig(typeof optionsOrFn === 'function'
        ? (config, context) => withPackageDefine(optionsOrFn(resolvedBaseConfig, context))
        : withPackageDefine(mergeConfig(resolvedBaseConfig, optionsOrFn)));
}
