import * as TsDown from 'tsdown';
import { readFileSync } from 'node:fs';
import path from 'node:path';

interface PackageJSON {
  name?: string;
  version?: string;
}

function toInt(value: string | undefined): number | undefined {
  if (value == null) return undefined;
  const parsed = Number.parseInt(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

export function withPackageDefine<T extends TsDown.UserConfig | TsDown.InlineConfig>(config: T): T {
  let packageJSON: PackageJSON | undefined = undefined;
  const cwd = config.cwd ?? process.cwd();

  function getPackageJSON() {
    if (packageJSON) return packageJSON;
    try {
      packageJSON = JSON.parse(readFileSync(path.join(cwd, 'package.json'), 'utf8'));
      return packageJSON as unknown as PackageJSON;
    } catch {
      return {};
    }
  }

  // Ensure we do not stringify undefined values
  function jsonSafeStringify(value: string | number): string {
    return JSON.stringify(value);
  }

  return {
    ...config,
    cwd,
    define: {
      __PACKAGE_NAME__: jsonSafeStringify(process.env['npm_package_name'] ?? getPackageJSON().name ?? ''),
      __PACKAGE_VERSION__: jsonSafeStringify(process.env['npm_package_version'] ?? getPackageJSON().version ?? ''),
      __PACKAGE_BUILD_NUMBER__: jsonSafeStringify(
        toInt(process.env['npm_package_build_number']) ??
        toInt(process.env['BUILD_NUMBER']) ??
        toInt(process.env['CI_BUILD_NUMBER']) ??
        Date.now(),
      ),
      ...config.define,
    },
  };
}
