export interface CommandContext {
  /**
   * Command-line arguments passed to the script.
   */
  readonly cli: {
    cwd?: string | undefined;
    dryRun?: boolean | undefined;
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
}
