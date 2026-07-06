import type { Linter } from 'eslint';

import type { StylisticParameters } from './StylisticConfig.js';

export interface PluginOptionsBase<Rules> {
  /**
   * Files to apply
   */
  files?: ((currentFiles: Array<string>) => Array<string>) | Linter.Config['files'];

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
