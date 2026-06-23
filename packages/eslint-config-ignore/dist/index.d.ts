//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/eslintIgnores.d.ts
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
interface ESLintIgnoreConfig {
  /**
   * The configuration name
   */
  name: string;
  /**
   * The file globs to ignore
   */
  ignores: Array<string>;
}
interface ESLintIgnoreOptions {
  /**
   * Override configuration name
   */
  name?: ESLintIgnoreConfig['name'];
  /**
   * Override current working directory
   */
  cwd?: string;
  /**
   * Override or customize ignore patterns.
   * - If passed an array, it appends patterns to the merged ignore list.
   * - If passed a function, it receives the merged list and returns the final array.
   */
  ignores?: ESLintIgnoreConfig['ignores'] | ((ignores: ESLintIgnoreConfig['ignores']) => ESLintIgnoreConfig['ignores']);
  /**
   * Include recommended settings and default ignored files
   */
  recommended?: boolean | undefined;
}
//#endregion
export { ESLintIgnoreConfig, ESLintIgnoreOptions, type ESLintIgnoreOptions as Options, eslintIgnores as default, eslintIgnores, meta };
//# sourceMappingURL=index.d.ts.map