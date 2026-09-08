import type { LogLevel } from '../internal/Logger.js';
import type { CommandContext } from '../type.js';

import { ManagedScriptEnv } from '../ManagedScriptEnv.js';

export function defaultContext(context: Partial<CommandContext> | undefined): CommandContext {
  const { cli = {}, cwd, dryRun, env = process.env, logLevel, stderr = process.stderr } = context ?? {};
  const envLogLevel = env[ManagedScriptEnv.LogLevel];
  return {
    cli,
    cwd: cwd ?? cli.cwd ?? env['MANAGED_SCRIPT_CWD'] ?? process.cwd(),
    dryRun: dryRun ?? cli.dryRun ?? false,
    env,
    logLevel: logLevel ?? cli.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : 'info'),
    stderr,
  };
}

const knownLogLevels: ReadonlyArray<LogLevel> = ['silent', 'error', 'warn', 'info', 'debug'];

function isLogLevel(value: string | undefined): value is LogLevel {
  return knownLogLevels.includes(value as LogLevel);
}
