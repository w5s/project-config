import type { InputConfig } from 'c12';

/**
 * Run an executable directly, in the same way a lefthook script uses `runner` and `args`.
 *
 * `runner` is the program, such as `node` or `bash`. `args` are its arguments.
 * Arguments passed to the managed-script CLI are appended after `args`.
 * The process is spawned directly, so the shell does not parse the arguments.
 */
export interface RunnerScript {
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
export type ScriptDefinition = RunnerScript | ShellScript | string;

/**
 * Run a shell command, in the same way as a lefthook `run`.
 * Arguments passed to the managed-script CLI are appended (shell-quoted).
 */
export interface ShellScript {
  readonly args?: undefined;
  readonly run: string;
  readonly runner?: undefined;
}

export interface UserConfig extends InputConfig<{
  readonly scripts?: Record<string, ScriptDefinition> | undefined;
}> {}
