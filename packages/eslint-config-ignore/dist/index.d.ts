//#region src/eslintIgnores.d.ts
interface ESLintIgnoreConfig {
  /**
   * The file globs to ignore
   */
  ignores: Array<string>;
  /**
   * The configuration name
   */
  name: string;
}
interface ESLintIgnoreOptions {
  /**
   * Override current working directory
   */
  cwd?: string;
  /**
   * Whether to ignore git submodules (default: true)
   */
  ignoreGitModules?: boolean;
  /**
   * Override or customize ignore patterns.
   * - If passed an array, it appends patterns to the merged ignore list.
   * - If passed a function, it receives the merged list and returns the final array.
   */
  ignores?: ((ignores: ESLintIgnoreConfig['ignores']) => ESLintIgnoreConfig['ignores']) | ESLintIgnoreConfig['ignores'];
  /**
   * Override configuration name
   */
  name?: ESLintIgnoreConfig['name'];
  /**
   * Include recommended settings and default ignored files
   */
  recommended?: boolean | undefined;
}
/**
 * Create a new eslint configuration object
 *
 * @example
 * ```ts
 * // eslint.config.js
 * export default [
 *   await eslintIgnores({
 *     ignores: [
 *       // Add custom paths here
 *     ]
 *   })
 * ];
 * ```
 *
 * @param options
 */
declare function eslintIgnores(options?: ESLintIgnoreOptions): Promise<ESLintIgnoreConfig>;
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
export { ESLintIgnoreConfig, ESLintIgnoreOptions, type ESLintIgnoreOptions as Options, eslintIgnores as default, eslintIgnores, meta };
//# sourceMappingURL=index.d.ts.map