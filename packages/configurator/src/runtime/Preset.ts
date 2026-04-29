import type { ResolvedConfig } from './useRuntimeContext.js';

export type Preset = (config: ResolvedConfig) => void | Promise<void>;

export interface PresetModule {
  readonly default?: unknown;
}
