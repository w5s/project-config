import type { LogLevel } from '../internal/Logger.js';
import type { CommandContext } from '../type.js';

import { ManagedScriptEnv } from '../ManagedScriptEnv.js';

export function defaultContext(context: Partial<CommandContext> | undefined): CommandContext {
  const {
    cli = {},
    cwd,
    dryRun,
    env = process.env,
    logLevel,
    stderr = process.stderr,
    stdout = process.stdout,
  } = context ?? {};
  const envLogLevel = env[ManagedScriptEnv.LogLevel];
  return {
    cli,
    cwd: cwd ?? cli.cwd ?? env[ManagedScriptEnv.Cwd] ?? process.cwd(),
    dryRun: dryRun ?? cli.dryRun ?? false,
    env,
    logLevel: logLevel ?? cli.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : 'info'),
    stderr,
    stdout,
  };
}

const knownLogLevels = new Set<LogLevel>(['debug', 'error', 'info', 'silent', 'warn']);

function isLogLevel(value: string | undefined): value is LogLevel {
  return knownLogLevels.has(value as LogLevel);
}
