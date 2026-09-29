import { createDefineConfig } from 'c12';

import type { UserConfig } from './type/UserConfig.js';

/**
 * Define the configuration for the managed script.
 *
 * @example
 * ```ts
 * // managed-script.config.ts or @acme/managed-script-config/index.ts
 * export default defineConfig({
 *   // your configuration here
 * });
 * ```
 */
export const defineConfig = createDefineConfig<UserConfig>();
