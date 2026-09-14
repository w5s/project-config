import type { ColorMode, LogLevel } from '../internal/Logger.js';

export interface CommandContext {
  /**
   * Command-line arguments passed to the script.
   */
  readonly cli: {
    color?: ColorMode | undefined;
    cwd?: string | undefined;
    dryRun?: boolean | undefined;
    logLevel?: LogLevel | undefined;
  };

  /**
   * Color mode used for status messages.
   */
  readonly color: ColorMode;

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
   * Stream used to write error log messages.
   */
  readonly stderr: NodeJS.WritableStream;

  /**
   * Stream used to write standard log messages.
   */
  readonly stdout: NodeJS.WritableStream;
}
