import type { ResolvedConfig } from '../config/ResolvedConfig.js';
import type { UserConfig } from '../config/UserConfig.js';
import type { ConfigLoaderResult } from '../infrastructure/ConfigLoader.js';

export interface ResolveConfigResult {
  readonly config: ResolvedConfig;
  readonly configFile: string | undefined;
}

export function resolveConfig(
  args: UserConfig,
  env: UserConfig,
  loaded: ConfigLoaderResult,
): ResolveConfigResult {
  const preset = args.preset ?? env.preset ?? loaded.config.preset;
  const debug = args.debug ?? env.debug ?? loaded.config.debug ?? false;
  const dryRun = args.dryRun ?? env.dryRun ?? loaded.config.dryRun ?? false;

  return {
    config: { preset, debug, dryRun },
    configFile: loaded.configFile ?? undefined,
  };
}
