import type { InputConfig } from 'c12';

export interface UserConfig extends InputConfig<{
  /**
   * The path to the preset file / module
   *
   * @example
   * preset: './configurator.preset.ts'
   * preset: '@my-org/my-preset'
   */
  readonly preset?: string | undefined;

  /**
   * Whether to enable debug mode. In debug mode, the configurator will print more detailed logs to the console.
   */
  readonly debug?: boolean | undefined;

  /**
   * Whether to enable dry-run mode. In dry-run mode, configurator-core filesystem helpers skip mutations.
   */
  readonly dryRun?: boolean | undefined;
}> {}
