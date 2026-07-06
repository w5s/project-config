import type { Linter } from 'eslint';

import type { StylisticParameters } from './StylisticConfig.js';

export interface PluginOptionsBase<Rules> {
  files?: Linter.Config['files'];

  /**
   * Include recommended settings
   */
  recommended?: boolean;

  /**
   * Plugin rules
   */
  rules?: Rules;

  /**
   * Stylistic options
   */
  stylistic?: boolean | StylisticParameters;
}
