import { i as LogLevel, n as CommandContext, r as StdioOptions } from "./type-C2YifKOA.js";
import { Options as ZXDefaultOptions, ProcessOutput, ProcessPromise } from "zx";
//#region src/zx/ZXOptions.d.ts
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
//#endregion
//#region src/zx/ZXShell.d.ts
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
//#endregion
//#region src/zx/defaults.d.ts
/**
 * Default ZX options for the managed script environment.
 */
export declare const defaults: Partial<ZXOptions>;
//#endregion
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
export type { ZXDefaultOptions, ZXOptions, ZXShell };
//# sourceMappingURL=zx.d.ts.map