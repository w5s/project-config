import { a as RunnerScript$1, c as UserConfig, n as CommandContext, o as ScriptDefinition, r as StdioOptions, s as ShellScript$1, t as ManagedScriptCommand } from "./type-QluLeED6.js";
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
export interface ResolvedConfig {
  readonly scripts: Record<string, ResolvedConfig.Script>;
}
export declare namespace ResolvedConfig {
  /**
   * Direct executable invocation. Extra CLI arguments are appended to {@link args}.
   */
  export interface RunnerScript extends Origin {
    readonly args: ReadonlyArray<string>;
    readonly run?: undefined;
    readonly runner: string;
  }
  export type Script = RunnerScript | ShellScript;
  /**
   * Shell command. Extra CLI arguments are appended to the command string.
   */
  export interface ShellScript extends Origin {
    readonly args?: undefined;
    readonly run: string;
    readonly runner?: undefined;
  }
  interface Origin {
    /**
     * Directory of the configuration file that defined this script.
     */
    readonly configDir: string | undefined;
    /**
     * File path of the configuration file that defined this script.
     */
    readonly configFile: string | undefined;
  }
  export {};
}
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
declare function runScript(options: ExecuteCommandParameters<ManagedScriptCommand.RunScript>): Promise<number>;
/**
 * @namespace
 */
export declare const ManagedScript: Readonly<{
  runScript: typeof runScript;
}>;
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
export declare const meta: Readonly<{
  binaryLabel: "W5S Managed Script";
  binaryName: "managed-script";
  binaryVersion: string;
  buildNumber: 1;
  name: string;
  version: string;
}>;
export { CommandContext, ManagedScriptCommand, RunnerScript$1 as RunnerScript, ScriptDefinition, ShellScript$1 as ShellScript, type StdioOptions, UserConfig };
//# sourceMappingURL=index.d.ts.map