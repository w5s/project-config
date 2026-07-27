/** Mutable config passed to and returned from `updateConfig`. */

import type { Hooks } from '@pnpm/pnpmfile';

import type { PnpmUserConfig } from './PnpmUserConfig.js';

/** Hooks exported by this plugin's pnpmfile. */
export interface PnpmHooks extends Omit<Hooks, 'updateConfig'> {
  updateConfig?: (config: PnpmUserConfig) => PnpmUserConfig | Promise<PnpmUserConfig>;
}
