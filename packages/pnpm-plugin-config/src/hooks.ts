import type { PnpmHooks } from './PnpmHooks.js';

import { defaultConfig } from './defaultConfig.js';
import { PnpmUserConfig } from './PnpmUserConfig.js';

export const hooks = {
  updateConfig(config) {
    return PnpmUserConfig.merge(defaultConfig, config);
  },
} satisfies PnpmHooks;
