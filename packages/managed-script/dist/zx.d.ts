import { t as CommandContext } from "./type-DQiyX1q_.js";
import { Options as ZXOptions, Shell as ZXShell } from "zx";
//#region src/zx/zx.d.ts
export interface CreateZXOptions {
  /**
   * Working directory for spawned commands. Defaults to `MANAGED_SCRIPT_CWD`, then `process.cwd()`.
   */
  readonly cwd?: string | undefined;
  /**
   * Environment variables passed to spawned commands. Merged over `process.env`.
   */
  readonly env?: NodeJS.ProcessEnv | undefined;
  /**
   * Log level used to derive zx `verbose` / `quiet` and command instrumentation.
   * Defaults to `MANAGED_SCRIPT_LOGLEVEL`, then `info`.
   */
  readonly logLevel?: CommandContext['logLevel'] | undefined;
  /**
   * Stream used to write instrumented command logs at the error and warn levels.
   */
  readonly stderr?: NodeJS.WritableStream | undefined;
  /**
   * Stream used to write instrumented command logs at the info and debug levels.
   */
  readonly stdout?: NodeJS.WritableStream | undefined;
}
/**
 * Creates a zx `$` preset configured from managed-script context and environment variables.
 *
 * @param options
 */
export declare function zx(options?: CreateZXOptions): ZXShell;
//#endregion
//#region src/zx.d.ts
/**
 * Default `$` preset for scripts launched by managed-script.
 * Reads `MANAGED_SCRIPT_*` from the process environment at import time.
 *
 * @example
 * ```ts
 * import { $ } from '@w5s/managed-script/zx';
 * await $`echo Hello, world!`;
 * ```
 */
export declare const $: ZXShell;
//#endregion
export type { ZXOptions, ZXShell };
//# sourceMappingURL=zx.d.ts.map