import type { LogLevel } from '../internal/Logger.js';

export interface CommandContext {
  /**
   * Command-line arguments passed to the script.
   */
  readonly cli: {
    cwd?: string | undefined;
    dryRun?: boolean | undefined;
    logLevel?: LogLevel | undefined;
  };

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
   * Stream used to write log messages.
   */
  readonly stderr: NodeJS.WritableStream;
}
