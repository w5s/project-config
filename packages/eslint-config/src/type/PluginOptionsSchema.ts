import type { WithSchemaOptions } from '../internal/withSchema.js';

export interface PluginOptionsSchema {
  /**
   * Enable or configure the JSON schema validator plugin.
   *
   * @default true
   */
  schema?: boolean | WithSchemaOptions;
}
