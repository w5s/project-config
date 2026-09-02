import type { ConfigLayer } from 'c12';

import { loadConfig } from 'c12';

import type { UserConfig } from '../config/UserConfig.js';

import { meta } from '../meta.js';

export interface ConfigLoaderOptions {
  readonly cwd: string;
}

export interface ConfigLoaderResult {
  readonly config: UserConfig;
  readonly configFile: string | undefined;
  readonly layers: Array<ConfigLayer<UserConfig>>;
}

export const ConfigLoader = {
  async load(options: ConfigLoaderOptions): Promise<ConfigLoaderResult> {
    const result = await loadConfig<UserConfig>({
      cwd: options.cwd,
      name: meta.binaryName,
      packageJson: [meta.binaryName],
    });

    return {
      config: result.config,
      configFile: result.configFile ?? undefined,
      layers: result.layers ?? [],
    };
  },
};
