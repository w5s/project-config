import type { StylisticParameters } from './StylisticConfig.js';

export interface PluginOptionsBase {
  // files?: Config['files'];
  // rules?: Rules;
  /**
   * Stylistic options
   */
  stylistic?: boolean | StylisticParameters;
}
