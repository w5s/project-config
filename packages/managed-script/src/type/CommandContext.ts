export interface CommandContext {
  /**
   * Command-line arguments passed to the script.
   */
  readonly cli: {
    cwd?: string | undefined;
  };

  /**
   * Current working directory of the script.
   */
  readonly cwd: string;

  /**
   * Environment variables available to the script.
   */
  readonly env: NodeJS.ProcessEnv;
}
