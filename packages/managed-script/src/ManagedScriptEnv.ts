/**
 * Enum for managed script environment variables.
 *
 * @enum
 */
export const ManagedScriptEnv = Object.freeze({
  /**
   * The directory where the managed script configuration is located.
   */
  ConfigDir: 'MANAGED_SCRIPT_CONFIG_DIR',

  /**
   * The file where the managed script configuration is located.
   */
  ConfigFile: 'MANAGED_SCRIPT_CONFIG_FILE',

  /**
   * The name of the managed script.
   */
  Name: 'MANAGED_SCRIPT_NAME',
});
export type ManagedScriptEnv = typeof ManagedScriptEnv[keyof typeof ManagedScriptEnv];
