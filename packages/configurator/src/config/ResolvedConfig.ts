import type { Preset } from '../runtime/Preset.js';

export interface ResolvedConfig {
  readonly preset: Preset | undefined;
  readonly debug: boolean;
  readonly dryRun: boolean;
}
