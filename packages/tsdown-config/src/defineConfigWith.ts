import * as TsDown from 'tsdown';
import type { UserConfig, UserConfigFn } from './types.js';
import { defaultConfig } from './defaultConfig.js';
import { withPackageDefine } from './withPackageDefine.js';

function mergeConfig(base: UserConfig, extension: UserConfig): UserConfig {
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
export function defineConfigWith(baseConfig: UserConfig): {
  (optionsOrFn: UserConfig): UserConfig;
  (optionsOrFn: UserConfigFn): UserConfigFn;
} {
  const resolvedBaseConfig = mergeConfig(defaultConfig, baseConfig);
  // @ts-ignore tsdown's overloads do not narrow cleanly after wrapping function configs.
  return (optionsOrFn) =>
    TsDown.defineConfig(
      typeof optionsOrFn === 'function'
        ? (config, context) =>
            withPackageDefine(optionsOrFn(resolvedBaseConfig, context) as UserConfig)
        : withPackageDefine(mergeConfig(resolvedBaseConfig, optionsOrFn)),
    ) as UserConfig | UserConfigFn;
}
