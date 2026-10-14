import type { ColorMode, LogLevel } from '../internal/Logger.js';
import type { StdioOptions } from './StdOptions.js';

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
   * Standard I/O configuration. Index `1` is used to write standard output (resolved command)
   * and index `2` to write status messages (stderr).
   *
   * @default 'inherit'
   */
  readonly stdio: StdioOptions;
}
