import type { UserConfig } from '../config/UserConfig.js';

export type Preset = (config: UserConfig) => void | Promise<void>;

export interface PresetModule {
  readonly default?: unknown;
}
