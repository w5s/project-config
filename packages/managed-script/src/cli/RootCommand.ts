import { Command, Option } from 'clipanion';
import { isEnum } from 'typanion';

import type { ColorMode, LogLevel } from '../internal/Logger.js';

import { ManagedScript } from '../ManagedScript.js';

const isLogLevel = isEnum(['debug', 'error', 'info', 'silent', 'warn'] as const);

const isColorModes = isEnum(['always', 'auto', 'never'] as const);

export class RootCommand extends Command {
  static override paths = [Command.Default];
  static override usage = Command.Usage({
    description: 'Run a script from the managed-script configuration.',
    details: 'Resolves the script name from the first positional argument, MANAGED_SCRIPT_NAME or npm_lifecycle_event, then executes it. Use --dry-run,-n to print the resolved command without executing it. Use --loglevel, --silent,-s or --verbose,-v to control status messages, forwarded to the script as MANAGED_SCRIPT_LOGLEVEL. Use --color[=WHEN] or --no-color to control ANSI colors (WHEN: auto, always, never).',
  });

  readonly color = Option.String('--color', {
    description: 'Control ANSI colors (auto, always, never). Bare --color means always.',
    required: false,
    tolerateBoolean: true,
    validator: isColorModes,
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
    validator: isLogLevel,
  });

  readonly scriptArgs = Option.Rest();

  readonly silent = Option.Boolean('--silent,-s', false, {
    description: 'Alias for --loglevel silent.',
  });

  readonly verbose = Option.Boolean('--verbose,-v', false, {
    description: 'Alias for --loglevel debug.',
  });

  async execute(): Promise<number> {
    const [scriptName, ...scriptArgs] = this.scriptArgs;
    let color: ColorMode | undefined;
    if (this.color === true) {
      color = 'always';
    } else if (this.color === false) {
      color = 'never';
    } else if (this.color != null) {
      color = this.color;
    }
    let logLevel: LogLevel | undefined;
    if (this.silent) {
      logLevel = 'silent';
    } else if (this.verbose) {
      logLevel = 'debug';
    } else if (this.loglevel != null) {
      logLevel = this.loglevel;
    }

    try {
      await ManagedScript.runScript({
        context: {
          cli: { color, cwd: this.cwd, dryRun: this.dryRun, logLevel },
          stderr: this.context.stderr,
          stdout: this.context.stdout,
        },
        parameters: {
          scriptArgs,
          scriptName,
        },
      });
      return 0;
    } catch (error) {
      this.context.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
      return 1;
    }
  }
}
