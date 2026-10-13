export interface ResolvedConfig {
  readonly scripts: Record<string, ResolvedConfig.Script>;
}

export namespace ResolvedConfig {
  /**
   * Direct executable invocation. Extra CLI arguments are appended to {@link args}.
   */
  export interface RunnerScript extends Origin {
    readonly args: ReadonlyArray<string>;
    readonly run?: undefined;
    readonly runner: string;
  }

  export type Script = RunnerScript | ShellScript;

  /**
   * Shell command. Extra CLI arguments are appended to the command string.
   */
  export interface ShellScript extends Origin {
    readonly args?: undefined;
    readonly run: string;
    readonly runner?: undefined;
  }

  interface Origin {
    /**
     * Directory of the configuration file that defined this script.
     */
    readonly configDir: string | undefined;

    /**
     * File path of the configuration file that defined this script.
     */
    readonly configFile: string | undefined;
  }
}
