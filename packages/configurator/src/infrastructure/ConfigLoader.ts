import { loadConfig } from 'c12';
import type { UserConfig } from '../config/UserConfig.js';
import { meta } from '../meta.js';

export interface ConfigLoaderResult {
  readonly config: UserConfig;
  readonly configFile: string | undefined;
}

export interface ConfigLoaderOptions {
  readonly cwd: string;
}

/**
 * @namespace
 */
export const ConfigLoader = {
  async load(options: ConfigLoaderOptions): Promise<ConfigLoaderResult> {
    const result = await loadConfig<UserConfig>({
      name: meta.binaryName,
      packageJson: [meta.binaryName],
      cwd: options.cwd,
    });

    return {
      config: result.config,
      configFile: result.configFile ?? undefined,
    };
  },
};
