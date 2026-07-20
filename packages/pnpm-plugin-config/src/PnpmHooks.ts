/** Mutable config passed to and returned from `updateConfig`. */

import type { PnpmUserConfig } from './PnpmUserConfig.js';

/** Hooks exported by this plugin's pnpmfile. */
export interface PnpmHooks {
  updateConfig?: (config: PnpmUserConfig) => PnpmUserConfig | Promise<PnpmUserConfig>;
}
