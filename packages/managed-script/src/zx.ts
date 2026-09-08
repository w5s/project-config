import type { Shell } from 'zx';

import { $ as zx, log as zxLog } from 'zx';

import type { CommandContext } from './type.js';

import { Logger } from './internal/Logger.js';
import { defaultContext } from './ManagedScript/defaultContext.js';

export interface Create$Options {
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
   * Stream used to write instrumented command logs.
   */
  readonly stderr?: NodeJS.WritableStream | undefined;
}

/**
 * Creates a zx `$` preset configured from managed-script context and environment variables.
 *
 * @param options
 */
export function create$(options: Create$Options = {}): Shell {
  const env = options.env == null ? process.env : { ...process.env, ...options.env };
  const context = defaultContext({
    env,
    ...(options.cwd == null ? {} : { cwd: options.cwd }),
    ...(options.logLevel == null ? {} : { logLevel: options.logLevel }),
    ...(options.stderr == null ? {} : { stderr: options.stderr }),
  });
  const logger = Logger.create({ level: context.logLevel, stream: context.stderr });

  return zx({
    cwd: context.cwd,
    env: context.env,
    log: (entry) => {
      if (entry.kind === 'cmd') {
        logger.info(entry.cmd);
        return;
      }
      zxLog(entry);
    },
    preferLocal: true,
    quiet: context.logLevel === 'silent',
    stdio: 'inherit',
    verbose: context.logLevel === 'debug',
  });
}

/**
 * Default `$` preset for scripts launched by managed-script.
 * Reads `MANAGED_SCRIPT_*` from the process environment at import time.
 */
export const $: Shell = create$();

export type Managed$ = Shell;
