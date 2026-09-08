export interface ResolvedConfig {
  readonly scripts: Record<string, {
    /**
     * Command to execute
     */
    readonly command: string;

    /**
     * File path of the configuration file that defined this script
     */
    readonly configDir: string | undefined;

    /**
     * Directory of the configuration file that defined this script
     */
    readonly configFile: string | undefined;
  }>;
}
