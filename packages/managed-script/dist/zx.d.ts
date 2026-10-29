import { i as LogLevel, n as CommandContext, r as StdioOptions } from "./type-QluLeED6.js";
import { Options as ZXDefaultOptions, ProcessOutput, ProcessPromise } from "zx";
interface ZXOptions extends ZXDefaultOptions {
  /**
   *
   */
  logLevel?: LogLevel | undefined;
}
/**
 * @namespace
 */
declare const ZXOptions: {
  create(options: Partial<ZXOptions>): Partial<ZXOptions>;
};
/**
 * Shell interface with some extensions
 */
interface ZXShell<S = false, R = S extends true ? ProcessOutput : ProcessPromise> {
  (pieces: TemplateStringsArray, ...args: Array<any>): R;
  <O extends Partial<ZXOptions> = Partial<ZXOptions>, R = O extends {
    sync: true;
  } ? ZXShell<true> : ZXShell>(opts: O): R;
  sync: {
    (pieces: TemplateStringsArray, ...args: Array<any>): ProcessOutput;
    (opts: Partial<Omit<ZXOptions, 'sync'>>): ZXShell<true>;
  };
}
/**
 * Default ZX options for the managed script environment.
 */
export declare const defaults: Partial<ZXOptions>;
/**
 * Determines if the current environment is a CI (Continuous Integration) environment.
 * Checks the `CI` and `CONTINUOUS_INTEGRATION` environment variables to determine if the current environment is a CI environment.
 *
 * @example
 * ```ts
 * const ci = isCI();
 * ```
 * @returns `true` if the current environment is a CI environment, otherwise `false`
 */
export declare const isCI: () => boolean;
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
   * Standard I/O used to write instrumented command logs (index `1` for command lines and output, index `2` for the rest).
   */
  readonly stdio?: StdioOptions | undefined;
}
/**
 * Creates a zx `$` preset configured from managed-script context and environment variables.
 *
 * @param options
 */
export declare function zx(options?: CreateZXOptions): ZXShell;
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
export type { ZXDefaultOptions, ZXOptions, ZXShell };
//# sourceMappingURL=zx.d.ts.map