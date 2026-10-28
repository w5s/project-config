import { InputConfig } from "c12";
import { StdioOptions } from "node:child_process";
/**
 * Run an executable directly, in the same way a lefthook script uses `runner` and `args`.
 *
 * `runner` is the program, such as `node` or `bash`. `args` are its arguments.
 * Arguments passed to the managed-script CLI are appended after `args`.
 * The process is spawned directly, so the shell does not parse the arguments.
 */
interface RunnerScript {
  /**
   * Arguments passed to {@link RunnerScript.runner}.
   */
  readonly args?: ReadonlyArray<string> | undefined;
  readonly run?: undefined;
  /**
   * Executable name or path. A multi-word command belongs in {@link RunnerScript.args}:
   * `{ runner: "go", args: ["run", "main.go"] }`.
   */
  readonly runner: string;
}
/**
 * A shell command string (shorthand for `{ run }`), a {@link ShellScript} or a direct {@link RunnerScript}.
 */
type ScriptDefinition = RunnerScript | ShellScript | string;
/**
 * Run a shell command, in the same way as a lefthook `run`.
 * Arguments passed to the managed-script CLI are appended (shell-quoted).
 */
interface ShellScript {
  readonly args?: undefined;
  readonly run: string;
  readonly runner?: undefined;
}
interface UserConfig extends InputConfig<{
  readonly scripts?: Record<string, ScriptDefinition> | undefined;
}> {}
type ColorMode = 'always' | 'auto' | 'never';
type LogLevel = 'debug' | 'error' | 'info' | 'silent' | 'warn';
interface CommandContext {
  /**
   * Command-line arguments passed to the script.
   */
  readonly cli: {
    color?: ColorMode | undefined;
    cwd?: string | undefined;
    dryRun?: boolean | undefined;
    logLevel?: LogLevel | undefined;
  };
  /**
   * Color mode used for status messages.
   */
  readonly color: ColorMode;
  /**
   * Current working directory of the script.
   */
  readonly cwd: string;
  /**
   * When `true`, the resolved command is printed instead of being executed.
   */
  readonly dryRun: boolean;
  /**
   * Environment variables available to the script.
   */
  readonly env: NodeJS.ProcessEnv;
  /**
   * Resolved log level used to filter status messages.
   */
  readonly logLevel: LogLevel;
  /**
   * Standard I/O configuration. Index `1` is used to write standard output (resolved command)
   * and index `2` to write status messages (stderr).
   *
   * @default 'inherit'
   */
  readonly stdio: StdioOptions;
}
type ManagedScriptCommand = ManagedScriptCommand.RunScript;
declare namespace ManagedScriptCommand {
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
declare const ManagedScriptCommand: Readonly<{
  RunScript: (args: ManagedScriptCommand.Parameters<ManagedScriptCommand.RunScript>) => ManagedScriptCommand.RunScript;
}>;
export { RunnerScript as a, UserConfig as c, LogLevel as i, CommandContext as n, ScriptDefinition as o, StdioOptions as r, ShellScript as s, ManagedScriptCommand as t };
//# sourceMappingURL=type-QluLeED6.d.ts.map