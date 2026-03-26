import type { Preset } from './Preset.js';

/**
 *
 * @example
 * ```typescript
 * import { definePreset } from '@w5s/configurator/runtime';
 *
 * export default definePreset((config) => {
 *
 * });
 * ```
 * @param presetFn
 */
export function definePreset(presetFn: Preset): Preset {
  return presetFn;
}
