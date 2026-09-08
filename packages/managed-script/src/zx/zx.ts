import { $ as zxDefault } from 'zx';

import type { CommandContext } from '../type.js';
import type { ZXShell } from './ZXShell.js';

import { defaultZXOptions } from './defaultZXOptions.js';

export interface CreateZXOptions {
  /**
   * Working directory for spawned commands. Defaults to `MANAGED_SCRIPT_CWD`, then `process.cwd()`.
   */
  readonly cwd?: string | undefined;

  /**
   * Environment variables passed to spawned commands. Merged over `process.env`.
   */
  readonly env?: NodeJS.ProcessEnv | undefined;

  /**
   * Log level used to derive zx `verbose` / `quiet` and command instrumentation.
   * Defaults to `MANAGED_SCRIPT_LOGLEVEL`, then `info`.
   */
  readonly logLevel?: CommandContext['logLevel'] | undefined;

  /**
   * Stream used to write instrumented command logs at the error and warn levels.
   */
  readonly stderr?: NodeJS.WritableStream | undefined;

  /**
   * Stream used to write instrumented command logs at the info and debug levels.
   */
  readonly stdout?: NodeJS.WritableStream | undefined;
}

/**
 * Creates a zx `$` preset configured from managed-script context and environment variables.
 *
 * @param options
 */
export function zx(options: CreateZXOptions = {}): ZXShell {
  const env = options.env == null ? process.env : { ...process.env, ...options.env };

  return zxDefault(defaultZXOptions({
    env,
    ...(options.cwd == null ? {} : { cwd: options.cwd }),
    ...(options.logLevel == null ? {} : { logLevel: options.logLevel }),
    ...(options.stderr == null ? {} : { stderr: options.stderr }),
    ...(options.stdout == null ? {} : { stdout: options.stdout }),
  }));
}
