import { InputConfig } from "c12";
//#region src/type/UserConfig.d.ts
interface UserConfig extends InputConfig<{
  readonly scripts?: Record<string, string> | undefined;
}> {}
//#endregion
//#region src/internal/Logger.d.ts
type ColorMode = 'always' | 'auto' | 'never';
type LogLevel = 'debug' | 'error' | 'info' | 'silent' | 'warn';
//#endregion
//#region src/type/CommandContext.d.ts
interface CommandContext {
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
//#endregion
export { UserConfig as n, CommandContext as t };
//# sourceMappingURL=type-DQiyX1q_.d.ts.map