import { Command, Option } from 'clipanion';

import type { LogLevel } from '../internal/Logger.js';

import { ManagedScript } from '../ManagedScript.js';

const knownLogLevels = new Set<LogLevel>(['debug', 'error', 'info', 'silent', 'warn']);

export class RootCommand extends Command {
  static override paths = [Command.Default];
  static override usage = Command.Usage({
    description: 'Run a script from the managed-script configuration.',
    details: 'Resolves the script name from --name, MANAGED_SCRIPT_NAME or npm_lifecycle_event, then executes it. Use --dry-run,-n to print the resolved command without executing it. Use --loglevel, --silent,-s or --verbose,-v to control status messages, forwarded to the script as MANAGED_SCRIPT_LOGLEVEL.',
  });

  readonly cwd = Option.String('--cwd', {
    description: 'Working directory used to resolve configuration and run the script.',
    required: false,
  });

  readonly dryRun = Option.Boolean('--dry-run,-n', false, {
    description: 'Print the resolved command instead of executing it.',
  });

  readonly loglevel = Option.String('--loglevel', {
    description: 'Set the log level (silent, error, warn, info, debug). Default: info.',
    required: false,
  });

  readonly name = Option.String('--name', {
    description: 'Script name to run (overrides MANAGED_SCRIPT_NAME / npm_lifecycle_event).',
    required: false,
  });

  readonly silent = Option.Boolean('--silent,-s', false, {
    description: 'Alias for --loglevel silent.',
  });

  readonly verbose = Option.Boolean('--verbose,-v', false, {
    description: 'Alias for --loglevel debug.',
  });

  async execute(): Promise<number> {
    let logLevel: LogLevel | undefined;
    if (this.silent) {
      logLevel = 'silent';
    } else if (this.verbose) {
      logLevel = 'debug';
    } else if (this.loglevel != null) {
      if (!knownLogLevels.has(this.loglevel as LogLevel)) {
        this.context.stderr.write(
          `Invalid --loglevel value "${this.loglevel}". Expected one of: ${[...knownLogLevels].join(', ')}.\n`,
        );
        return 1;
      }
      logLevel = this.loglevel as LogLevel;
    }

    try {
      await ManagedScript.runScript({
        context: {
          cli: { cwd: this.cwd, dryRun: this.dryRun, logLevel },
          stderr: this.context.stderr,
        },
        parameters: {
          scriptName: this.name,
        },
      });
      return 0;
    } catch (error) {
      this.context.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
      return 1;
    }
  }
}
