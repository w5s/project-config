import { Linter } from "eslint";

//#region src/ESLintConfig.d.ts
/**
 * Concat multiple flat configs into a single flat config array.
 *
 * It also resolves promises and flattens the result.
 *
 * @example
 *
 * ```ts
 * import eslint from '@eslint/js'
 *
 * export default ESLintConfig.concat(
 *   {
 *     plugins: {},
 *     rules: {},
 *   },
 *   // It can also takes a array of configs:
 *   [
 *     {
 *       plugins: {},
 *       rules: {},
 *     }
 *    // ...
 *   ],
 *   // Or promises:
 *   Promise.resolve({
 *     files: ['*.ts'],
 *     rules: {},
 *   })
 * );
 * ```
 * @param configs
 */
declare function concat<T extends Linter.Config = Linter.Config>(...configs: Array<Promise<ReadonlyArray<T>> | Promise<T> | ReadonlyArray<T> | T>): Promise<Array<T>>;
/**
 * Always return 'off'. `_status` is the previous rule value.
 *
 * @param _status
 */
declare function fixme(_status: [number | string, ...Array<any>] | number | string | undefined): "off";
/**
 * Return a new merged flat configuration
 *
 * @param configs
 */
declare function merge<T extends Linter.Config = Linter.Config>(...configs: Array<T>): T;
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
declare function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any>;
/**
 * @namespace
 */
declare const ESLintConfig: Readonly<{
  concat: typeof concat;
  fixme: typeof fixme;
  merge: typeof merge;
  renameRules: typeof renameRules;
}>;
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
/**
 * A list of "vscode-like" language identifiers (i.e. "javascript", "javascriptreact")
 */
type LanguageId = keyof LanguageIdMap;
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
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
//#region src/Project.d.ts
/**
 * A type of a file extension
 */
type Extension = `.${string}`;
/**
 * Object hash of all well-known file extension category to file extensions mapping
 */
type ExtensionRegistry = Record<LanguageId, ReadonlyArray<Extension>>;
/**
 * Supported ECMA version
 *
 * @example
 * ```ts
 * Project.ecmaVersion() // 2022
 * ```
 */
declare function ecmaVersion(): 2022;
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
declare function queryExtensions(languages: Array<LanguageId>): ReadonlyArray<Extension>;
/**
 * Supported file extensions
 *
 * @example
 * ```ts
 * Project.sourceExtensions() // ['.ts', '.js', ...]
 * ```
 */
declare function sourceExtensions(): readonly `.${string}`[];
/**
 * Resource file extensions
 *
 * @example
 * ```ts
 * Project.resourceExtensions() // ['.css', '.sass', ...]
 * ```
 */
declare function resourceExtensions(): readonly `.${string}`[];
/**
 * Return a RegExp that will match any list of extensions
 *
 * @param extensions
 * @example
 * ```ts
 * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
 * ```
 */
declare function extensionsToMatcher(extensions: ReadonlyArray<Extension>): RegExp;
/**
 * Files and folders to always ignore
 *
 * @example
 * ```ts
 * IGNORED // ['node_modules/', 'build/', ...]
 * ```
 */
declare function ignored(): readonly string[];
/**
 * Return a glob matcher that will match any list of extensions
 *
 * @param extensions
 * @example
 * ```ts
 * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
 * ```
 */
declare function extensionsToGlob(extensions: ReadonlyArray<Extension>): string;
declare const Project: Readonly<{
  ecmaVersion: typeof ecmaVersion;
  extensionsToGlob: typeof extensionsToGlob;
  extensionsToMatcher: typeof extensionsToMatcher;
  ignored: typeof ignored;
  queryExtensions: typeof queryExtensions;
  resourceExtensions: typeof resourceExtensions;
  sourceExtensions: typeof sourceExtensions;
}>;
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
  readonly Typecheck: "typecheck";
  readonly Validate: "validate";
};
type ProjectScript = (typeof ProjectScript)[keyof typeof ProjectScript];
//#endregion
export { ESLintConfig, Extension, ExtensionRegistry, LanguageId, LanguageIdMap, Project, ProjectScript, interopDefault, meta };
//# sourceMappingURL=index.d.cts.map