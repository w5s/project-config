import { $ as zxFn } from 'zx';

import type { CommandContext, StdioOptions } from '../type.js';
import type { ZXShell } from './ZXShell.js';

import { ZXOptions } from './ZXOptions.js';

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
   * Standard I/O used to write instrumented command logs (index `1` for command lines and output, index `2` for the rest).
   */
  readonly stdio?: StdioOptions | undefined;
}

/**
 * Creates a zx `$` preset configured from managed-script context and environment variables.
 *
 * @param options
 */
export function zx(options: CreateZXOptions = {}): ZXShell {
  const env = options.env == null ? process.env : { ...process.env, ...options.env };

  return zxFn(ZXOptions.create({
    env,
    ...(options.cwd == null ? {} : { cwd: options.cwd }),
    ...(options.logLevel == null ? {} : { logLevel: options.logLevel }),
    ...(options.stdio == null ? {} : { stdio: options.stdio }),
  }));
}
