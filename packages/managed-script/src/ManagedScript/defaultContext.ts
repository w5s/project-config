import type { CommandContext } from '../type.js';

export function defaultContext(context: Partial<CommandContext> | undefined): CommandContext {
  const { cli = {}, cwd, dryRun, env = process.env } = context ?? {};
  return {
    cli,
    cwd: cwd ?? cli.cwd ?? env['MANAGED_SCRIPT_CWD'] ?? process.cwd(),
    dryRun: dryRun ?? cli.dryRun ?? false,
    env,
  };
}
