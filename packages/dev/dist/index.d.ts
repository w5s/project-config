import { ESLint } from "eslint";

//#region src/ESLintConfig.d.ts
declare namespace ESLintConfig {
  /**
   *
   * @param configs
   */
  function concat(...configs: ESLint.ConfigData[]): ESLint.ConfigData;
  /**
   * Always return 'off'. `_status` is the previous rule value.
   *
   * @param _status
   */
  function fixme(_status: string | number | [string | number, ...any[]] | undefined): "off";
  /**
   * Renames rules in the given object according to the given map.
   *
   * Given a map `{ 'old-prefix': 'new-prefix' }`, and a rule object
   * `{ 'old-prefix/rule-name': 'error' }`, this function will return
   * `{ 'new-prefix/rule-name': 'error' }`.
   *
   * @param rules The object containing the rules to rename.
   * @param map The object containing the rename map.
   */
  function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any>;
}
//#endregion
//#region src/interopDefault.d.ts
/**
 * Resolves a module or promise-like object, returning the default export if available.
 *
 * @example
 * ```ts
 * // modules.ts
 * export default {
 *   foo: true
 * };
 * // Async API
 * const modPromise = import('./module');
 * interopDefault(modPromise); // == Promise.resolve({ foo: true })
 * // Sync API
 * const mod = await import('./module');
 * interopDefault(mod); // == { foo: true }
 * ```
 *
 * @template T - The type of the module or promise-like object.
 * @param m The module or promise-like object to resolve.
 */
declare function interopDefault<T>(m: PromiseLike<T>): Promise<T extends {
  default: infer U;
} ? U : T>;
declare function interopDefault<T>(m: T): T extends {
  default: infer U;
} ? U : T;
//#endregion
//#region src/LanguageId.d.ts
interface LanguageIdMap {
  css: true;
  graphql: true;
  javascript: true;
  javascriptreact: true;
  jpeg: true;
  json: true;
  jsonc: true;
  less: true;
  markdown: true;
  sass: true;
  scss: true;
  typescript: true;
  typescriptreact: true;
  vue: true;
  yaml: true;
}
/**
 * A list of "vscode-like" language identifiers (i.e. "javascript", "javascriptreact")
 */
type LanguageId = keyof LanguageIdMap;
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/Project.d.ts
declare namespace Project {
  /**
   * A type of a file extension
   */
  type Extension = `.${string}`;
  /**
   * Object hash of all well-known file extension category to file extensions mapping
   */
  type ExtensionRegistry = { [K in LanguageId]: readonly Extension[] };
  /**
   * Supported ECMA version
   *
   * @example
   * ```ts
   * Project.ecmaVersion() // 2022
   * ```
   */
  function ecmaVersion(): 2022;
  /**
   * Return a list of extensions
   *
   * @example
   * ```ts
   * Project.queryExtensions(['javascript']); // ['.js', '.cjs', ...]
   * Project.queryExtensions(['typescript', 'typescriptreact']); // ['.ts', '.mts', ..., '.tsx']
   * ```
   *
   * @param languages
   */
  function queryExtensions(languages: LanguageId[]): readonly Extension[];
  /**
   * Supported file extensions
   *
   * @example
   * ```ts
   * Project.sourceExtensions() // ['.ts', '.js', ...]
   * ```
   */
  function sourceExtensions(): readonly `.${string}`[];
  /**
   * Resource file extensions
   *
   * @example
   * ```ts
   * Project.resourceExtensions() // ['.css', '.sass', ...]
   * ```
   */
  function resourceExtensions(): readonly `.${string}`[];
  /**
   * Files and folders to always ignore
   *
   * @example
   * ```ts
   * IGNORED // ['node_modules/', 'build/', ...]
   * ```
   */
  function ignored(): readonly string[];
  /**
   * Return a RegExp that will match any list of extensions
   *
   * @param extensions
   * @example
   * ```ts
   * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
   * ```
   */
  function extensionsToMatcher(extensions: readonly Extension[]): RegExp;
  /**
   * Return a glob matcher that will match any list of extensions
   *
   * @param extensions
   * @example
   * ```ts
   * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
   * ```
   */
  function extensionsToGlob(extensions: readonly Extension[]): string;
}
//#endregion
//#region src/ProjectScript.d.ts
/**
 * Project common scripts
 */
declare const ProjectScript: {
  readonly Build: "build";
  readonly Clean: "clean";
  readonly CodeAnalysis: "code-analysis";
  readonly Coverage: "coverage";
  readonly Develop: "develop";
  readonly Docs: "docs";
  readonly Format: "format";
  readonly Install: "install";
  readonly Lint: "lint";
  readonly Prepare: "prepare";
  readonly Release: "release";
  readonly Rescue: "rescue";
  readonly Spellcheck: "spellcheck";
  readonly Test: "test";
  readonly Validate: "validate";
};
type ProjectScript = (typeof ProjectScript)[keyof typeof ProjectScript];
//#endregion
export { ESLintConfig, LanguageId, LanguageIdMap, Project, ProjectScript, interopDefault, meta };
//# sourceMappingURL=index.d.ts.map