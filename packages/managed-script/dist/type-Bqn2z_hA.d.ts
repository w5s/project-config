import { InputConfig } from "c12";
//#region src/type/UserConfig.d.ts
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
//#endregion
//#region src/internal/Logger.d.ts
type ColorMode = 'always' | 'auto' | 'never';
type LogLevel = 'debug' | 'error' | 'info' | 'silent' | 'warn';
//#endregion
//#region src/type/CommandContext.d.ts
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
   * Stream used to write error log messages.
   */
  readonly stderr: NodeJS.WritableStream;
  /**
   * Stream used to write standard log messages.
   */
  readonly stdout: NodeJS.WritableStream;
}
//#endregion
export { UserConfig as a, ShellScript as i, RunnerScript as n, ScriptDefinition as r, CommandContext as t };
//# sourceMappingURL=type-Bqn2z_hA.d.ts.map