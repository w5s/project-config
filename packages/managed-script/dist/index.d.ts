import { n as UserConfig, t as CommandContext } from "./type-DQiyX1q_.js";
//#region src/defineConfig.d.ts
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
export declare const defineConfig: import("c12").DefineConfig<UserConfig, import("c12").ConfigLayerMeta>;
//#endregion
//#region src/type/Command.d.ts
export type ManagedScriptCommand = ManagedScriptCommand.RunScript;
export declare namespace ManagedScriptCommand {
  interface Base<TName extends string, TParameters extends object> {
    /**
     * Name of the command.
     */
    readonly _: TName;
    /**
     * Context in which the command is executed.
     */
    readonly context: CommandContext;
    /**
     * Parameters provided to the command.
     */
    readonly parameters: Readonly<TParameters>;
  }
  type Parameters<T extends Base<string, object>> = Omit<T, '_'>;
  interface RunScript extends Base<'RunScript', {
    scriptArgs?: ReadonlyArray<string>;
    scriptName: string | undefined;
  }> {}
}
export declare const ManagedScriptCommand: Readonly<{
  RunScript: (args: ManagedScriptCommand.Parameters<ManagedScriptCommand.RunScript>) => ManagedScriptCommand.RunScript;
}>;
//#endregion
//#region src/type/ResolvedConfig.d.ts
export interface ResolvedConfig {
  readonly scripts: Record<string, {
    /**
     * Command to execute
     */
    readonly command: string;
    /**
     * File path of the configuration file that defined this script
     */
    readonly configDir: string | undefined;
    /**
     * Directory of the configuration file that defined this script
     */
    readonly configFile: string | undefined;
  }>;
}
//#endregion
//#region src/ManagedScript/execute.d.ts
declare const handlers: {
  RunScript: (command: ManagedScriptCommand.RunScript) => Promise<number>;
};
type ExecuteCommand<T extends ManagedScriptCommand> = Omit<T, 'context'> & {
  /**
   * Context is optional
   */
  context?: Partial<ManagedScriptCommand['context']>;
};
/**
 * Extract command parameter from execute handler
 */
type ExecuteCommandParameters<T extends ManagedScriptCommand> = Omit<Parameters<typeof execute<T>>[0], '_'>;
/**
 * Dispatch the command to the appropriate handler based on its type.
 *
 * @param command
 */
declare function execute<T extends ManagedScriptCommand>(command: ExecuteCommand<T>): Promise<Awaited<ReturnType<typeof handlers[T['_']]>>>;
//#endregion
//#region src/ManagedScript/runScript.d.ts
declare function runScript(options: ExecuteCommandParameters<ManagedScriptCommand.RunScript>): Promise<number>;
//#endregion
//#region src/ManagedScript.d.ts
/**
 * @namespace
 */
export declare const ManagedScript: Readonly<{
  runScript: typeof runScript;
}>;
//#endregion
//#region src/ManagedScriptEnv.d.ts
/**
 * Enum for managed script environment variables.
 *
 * @enum
 */
export declare const ManagedScriptEnv: Readonly<{
  /**
   * The color mode used for messages.
   */
  Color: "MANAGED_SCRIPT_COLOR";
  /**
   * The directory where the managed script configuration is located.
   */
  ConfigDir: "MANAGED_SCRIPT_CONFIG_DIR";
  /**
   * The file where the managed script configuration is located.
   */
  ConfigFile: "MANAGED_SCRIPT_CONFIG_FILE";
  /**
   * The invocation directory used to resolve configuration and spawn the script.
   */
  Cwd: "MANAGED_SCRIPT_CWD";
  /**
   * The resolved log level.
   */
  LogLevel: "MANAGED_SCRIPT_LOGLEVEL";
  /**
   * The name of the managed script.
   */
  Name: "MANAGED_SCRIPT_NAME";
}>;
export type ManagedScriptEnv = typeof ManagedScriptEnv[keyof typeof ManagedScriptEnv];
//#endregion
//#region src/mergeConfig.d.ts
/**
 * Merge two managed-script configs using the same heuristic as Vite and Vitest:
 * later values win, plain objects merge recursively, and arrays concatenate.
 *
 * @param defaults
 * @param overrides
 * @example
 * ```ts
 * export default defineConfig(mergeConfig(
 *   { scripts: { build: 'echo base', test: 'echo test' } },
 *   { scripts: { build: 'echo override' } },
 * ));
 * ```
 */
export declare function mergeConfig(defaults: UserConfig, overrides: UserConfig): UserConfig;
//#endregion
//#region src/meta.d.ts
export declare const meta: Readonly<{
  binaryLabel: "W5S Managed Script";
  binaryName: "managed-script";
  binaryVersion: string;
  buildNumber: 1;
  name: string;
  version: string;
}>;
//#endregion
export { CommandContext, UserConfig };
//# sourceMappingURL=index.d.ts.map