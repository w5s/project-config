import path from 'node:path/win32';

import type { ResolvedConfig } from '../config/ResolvedConfig.js';
import type { ConfigLoaderResult } from '../infrastructure/ConfigLoader.js';

export function resolveScripts(loaded: ConfigLoaderResult): ResolvedConfig {
  const scripts: ResolvedConfig['scripts'] = {};
  const layers = loaded.layers.length > 0 ? loaded.layers : [{ config: loaded.config }];

  for (const layer of layers) {
    for (const [name, command] of Object.entries(layer.config?.scripts ?? {})) {
      const configFile = layer.configFile ?? loaded.configFile;
      const configDir = configFile == null ? undefined : path.dirname(configFile);
      scripts[name] ??= {
        command,
        configDir,
        configFile,
      };
    }
  }

  return {
    scripts,
  };
}
