import { ESLint } from "eslint";

//#region src/directory.d.ts
interface DirectoryOptions {
  /**
   * Directory path
   */
  readonly path: string;
  /**
   * Directory target state
   */
  readonly state: 'present' | 'absent';
}
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directory({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
declare function directory(options: DirectoryOptions): Promise<void>;
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directorySync({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
declare function directorySync(options: DirectoryOptions): void;
//#endregion
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
   * @param rules - The object containing the rules to rename.
   * @param map - The object containing the rename map.
   * @returns The object with the renamed rules.
   */
  function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any>;
}
//#endregion
//#region src/block.d.ts
interface BlockOptions {
  /**
   * The marker builder function that will take either `markerBegin` or `markerEnd`
   *
   * @default '# ${mark} MANAGED BLOCK'
   */
  marker?: (mark: 'Begin' | 'End') => string;
  /**
   * File path
   */
  path: string;
  /**
   * Block content to insert
   */
  block: string;
  /**
   * Insert position
   */
  insertPosition?: ['before', 'BeginningOfFile' | RegExp] | ['after', 'EndOfFile' | RegExp];
  /**
   * Block target state
   */
  state?: 'present' | 'absent';
}
/**
 * Replace asynchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
declare function block(options: BlockOptions): Promise<void>;
/**
 * Replace synchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
declare function blockSync(options: BlockOptions): void;
//#endregion
//#region src/file.d.ts
interface FileOptions {
  /**
   * File path
   */
  readonly path: string;
  /**
   * File target state
   */
  readonly state: 'present' | 'absent';
  /**
   * File content mapping function
   *
   * @param content
   */
  readonly update?: ((content: string) => string | undefined) | undefined;
  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;
}
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * await file({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
declare function file(options: FileOptions): Promise<void>;
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * fileSync({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
declare function fileSync(options: FileOptions): void;
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
 * @param m - The module or promise-like object to resolve.
 * @returns A promise resolving to the default export if present, otherwise the module itself.
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
//#region src/json.d.ts
type JSONValue = null | number | string | boolean | JSONValue[] | {
  [key: string]: JSONValue;
};
interface JSONOption<V = JSONValue> {
  /**
   * File path
   */
  readonly path: string;
  /**
   * File target state
   */
  readonly state: 'present' | 'absent';
  /**
   * File content mapping function
   *
   * @param content
   */
  readonly update?: ((content: V | undefined) => V | undefined) | undefined;
  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;
}
/**
 * Ensure file is present/absent asynchronously with content value initialized or modified with `update`
 *
 * @param options
 */
declare function json<Value>(options: JSONOption<Value>): Promise<void>;
/**
 * Ensure file is present/absent synchronously with content value initialized or modified with `update`
 *
 * @param options
 */
declare function jsonSync<Value>(options: JSONOption<Value>): void;
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
//#region src/yarnConfig.d.ts
interface YarnConfigOptions {
  /**
   * Configuration key
   */
  readonly key: string;
  /**
   * Option target state
   */
  readonly state: 'present' | 'absent';
  /**
   * File content mapping function
   *
   * @param content
   */
  readonly update?: ((content: string) => string | undefined) | undefined;
}
/**
 * Synchronous version of {@link yarnConfig}
 *
 * @param options
 * @example
 * yarnConfigSync({
 *   key: 'nodeLinker',
 *   state: 'present',
 *   update: (content) => content.replace('node-modules', 'hoisted'),
 * })
 */
declare function yarnConfigSync(options: YarnConfigOptions): void;
/**
 * Set/Unset yarn configuration value
 *
 * @param options
 * @example
 * await yarnConfig({
 *   key: 'nodeLinker',
 *   state: 'present',
 *   update: (content) => content.replace('node-modules', 'hoisted'),
 * })
 */
declare function yarnConfig(options: YarnConfigOptions): Promise<void>;
//#endregion
//#region src/yarnVersion.d.ts
type YarnVersionKind = 'berry' | 'classic';
interface YarnVersionOptions {
  /**
   * Option target state
   */
  readonly state: 'present' | 'absent';
  /**
   * Version mapping function
   *
   * @param content
   */
  readonly update?: (() => YarnVersionKind | undefined) | undefined;
}
/**
 * Synchronous version of {@link yarnVersion}
 *
 * @param options
 * @example
 * yarnVersionSync({
 *   state: 'present',
 *   update: () => 'berry', // or 'classic'
 * })
 */
declare function yarnVersionSync(options: YarnVersionOptions): void;
/**
 * Set/Unset yarn configuration value
 *
 * @param options
 * @example
 * await yarnVersion({
 *   state: 'present',
 *   update: () => 'berry', // or 'classic'
 * })
 */
declare function yarnVersion(options: YarnVersionOptions): Promise<void>;
//#endregion
export { BlockOptions, DirectoryOptions, ESLintConfig, FileOptions, JSONOption, JSONValue, LanguageId, LanguageIdMap, Project, ProjectScript, YarnConfigOptions, YarnVersionKind, YarnVersionOptions, block, blockSync, directory, directorySync, file, fileSync, interopDefault, json, jsonSync, yarnConfig, yarnConfigSync, yarnVersion, yarnVersionSync };
//# sourceMappingURL=index.d.cts.map