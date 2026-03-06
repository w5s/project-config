import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';

function toInt(value: string | undefined): number | undefined {
  if (value == null) return undefined;
  const parsed = Number.parseInt(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function withPackageDefine<T extends TsDown.UserConfig | TsDown.InlineConfig>(config: T): T {
  return {
    ...config,
    define: {
      __PACKAGE_NAME__: JSON.stringify(process.env['npm_package_name']),
      __PACKAGE_VERSION__: JSON.stringify(process.env['npm_package_version']),
      __PACKAGE_BUILD_NUMBER__: JSON.stringify(
        toInt(process.env['npm_package_build_number']) ??
        toInt(process.env['BUILD_NUMBER']) ??
        toInt(process.env['CI_BUILD_NUMBER']) ??
        Date.now(),
      ),
      ...config.define,
    },
  };
}

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
