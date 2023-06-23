import { type UserConfigExport } from 'vitest/config.js';
import { configDefaultMap } from './configDefaultMap.js';
import { ConfigType } from './type.js';

export function defineConfig(type: ConfigType, _config?: UserConfigExport): UserConfigExport {
  return configDefaultMap[type];
}
