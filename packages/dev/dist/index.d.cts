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
 * Maps rule names and values using the provided mapping function.
 *
 * @example
 * ```ts
 * ESLintConfig.mapRules(
 *   {
 *     'rule-name': 'error',
 *     'rule-to-drop': 'error',
 *   },
 *   (rule, value) => {
 *     if (rule === 'rule-name') return ['new-rule-name', value];
 *     return undefined;
 *   }
 * ); // { 'new-rule-name': 'error' }
 * ```
 * @param rules
 * @param mapFn
 */
declare function mapRules(rules: Record<string, any>, mapFn: (rule: string, value: any) => [string, any] | undefined): Record<string, any>;
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
export declare const ESLintConfig: Readonly<{
  concat: typeof concat;
  fixme: typeof fixme;
  mapRules: typeof mapRules;
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
export declare function interopDefault<T>(m: PromiseLike<T>): Promise<T extends {
  default: infer U;
} ? U : T>;
export declare function interopDefault<T>(m: T): T extends {
  default: infer U;
} ? U : T;
//#endregion
//#region src/LanguageId.d.ts
/**
 * A list of "vscode-like" language identifiers (i.e. "javascript", "javascriptreact")
 */
export type LanguageId = keyof LanguageIdMap;
export interface LanguageIdMap {
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
export declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
//#region src/Project.d.ts
/**
 * A type of a file extension
 */
export type Extension = `.${string}`;
/**
 * Object hash of all well-known file extension category to file extensions mapping
 */
export type ExtensionRegistry = Record<LanguageId, ReadonlyArray<Extension>>;
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
 * Return a glob matcher that will match any list of extensions
 *
 * @param extensions
 * @param options
 * @param options.compoundExtensions optional dotted segments before the language extension (e.g. `.stories`, `.spec`)
 * @param options.nested whether to match files in nested folders
 * @example
 * ```ts
 * Project.extensionsToGlob(['.js', '.ts']) // '*.@(js|ts)'
 * Project.extensionsToGlob(['.js', '.ts'], { nested: true }) // Matches nested JavaScript and TypeScript files
 * Project.extensionsToGlob(['.ts', '.tsx'], { compoundExtensions: ['.stories', '.story'] })
 * // '*.@(stories|story).@(ts|tsx)'
 * ```
 *
 * @deprecated Use `Project.glob` instead.
 */
declare function extensionsToGlob(extensions: ReadonlyArray<Extension>, options?: extensionToGlob.Options): string;
/**
 * Return a RegExp that will match any list of extensions
 *
 * @param extensions
 * @example
 * ```ts
 * Project.extensionsToRegExp(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
 * ```
 */
declare function extensionsToRegExp(extensions: ReadonlyArray<Extension>): RegExp;
/**
 * Create a new glob pattern based on the provided options.
 *
 * @param options The glob options to use when generating the glob pattern.
 *
 * @example
 * ```ts
 * Project.glob({ fileExtensions: ['.js', '.ts'] }); // '*.@(js|ts)'
 * Project.glob({ fileExtensions: '.js', nested: true }); // '** /*.js'
 * ```
 */
declare function glob(options: Project.glob.Options): string;
/**
 * Files and folders to always ignore
 *
 * @example
 * ```ts
 * IGNORED // ['node_modules/', 'build/', ...]
 * ```
 */
declare function ignored(): readonly string[];
export declare namespace extensionToGlob {
  /**
   * Options for the `extensionsToGlob` function.
   */
  interface Options {
    /**
     * Optional dotted segments before the language extension (e.g. `.stories`, `.spec`)
     * Compound extensions are used to match files like `Component.stories.ts` where `.stories` is a compound extension.
     */
    compoundExtensions?: ReadonlyArray<Extension> | undefined;
    /**
     * Whether to match files in nested folders.
     *
     * @default false
     */
    nested?: boolean | undefined;
  }
}
/**
 * Return a list of test glob matchers for a list of extensions.
 * This is useful to generate globs for vitest/jest matchers
 *
 * @param extensions
 * @param options
 * @param options.testExtensions dotted compound extensions (e.g. `.spec`, `.test`)
 * @param options.testFolders
 * @example
 * ```ts
 * Project.extensionsToTestGlob(['.js', '.ts']);
 * // ['<tests-folder-glob>', '<test-suffix-glob>']
 *
 * Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['.unit'] });
 * // ['<tests-folder-glob>', '<custom-test-suffix-glob>']
 * ```
 */
declare function extensionsToTestGlob(extensions: ReadonlyArray<Extension>, options?: {
  testExtensions?: ReadonlyArray<Extension>;
  testFolders?: ReadonlyArray<string>;
}): Array<string>;
export declare const Project: Readonly<{
  ecmaVersion: typeof ecmaVersion;
  extensionsToGlob: typeof extensionsToGlob;
  extensionsToRegExp: typeof extensionsToRegExp;
  extensionsToTestGlob: typeof extensionsToTestGlob;
  glob: typeof glob;
  ignored: typeof ignored;
  queryExtensions: typeof queryExtensions;
  resourceExtensions: typeof resourceExtensions;
  sourceExtensions: typeof sourceExtensions;
}>;
export declare namespace Project {
  namespace glob {
    interface Options {
      /**
       * An extension stack
       *
       * @example
       * ```ts
       * Project.glob({ fileExtensions: [['.js']] }); // '*.js'
       * Project.glob({ fileExtensions: ['.@(js|ts)'] }); // '*.@(js|ts)'
       * Project.glob({ fileExtensions: [['.js', '.ts']] }); // '*.@(js|ts)'
       * Project.glob({ fileExtensions: [['.spec', '.test'], ['.js', '.ts', '.tsx']] }); // '*.@(spec|test).@(js|ts|tsx)'
       * Project.glob({ fileExtensions: [] }); // '*'
       * ```
       */
      fileExtensions?: ReadonlyArray<ReadonlyArray<Extension> | string> | undefined;
      /**
       * The stem (basename without extension) of the file to match.
       *
       * @example
       * ```ts
       * Project.glob({ fileStem: 'index', fileExtensions: ['.*'] }); // 'index.*'
       * ```
       */
      fileStem?: ReadonlyArray<string> | string | undefined;
      /**
       * Ancestor folders to include in the glob pattern.
       *
       * @example
       * ```ts
       * Project.glob({ ancestorFolders: ['src'] }); // 'src/**​/*'
       * ```
       */
      folderAncestors?: ReadonlyArray<string> | string | undefined;
      /**
       * Parent folders to include in the glob pattern (immediate parent folders).
       *
       * @example
       * ```ts
       * Project.glob({ folderParents: ['src'] }); // 'src/*'
       * ```
       */
      folderParents?: ReadonlyArray<string> | string | undefined;
      /**
       * Whether to match files in nested folders.
       *
       * @default false
       * @example
       * ```ts
       * Project.glob({ nested: true }); // '* /*'
       * Project.glob({ nested: true, fileExtensions: [['.js']] }); // '**\/*.js'
       * ```
       */
      nested?: boolean | undefined;
    }
  }
}
//#endregion
//#region src/ProjectScript.d.ts
/**
 * Project common scripts
 */
export declare const ProjectScript: {
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
export type ProjectScript = (typeof ProjectScript)[keyof typeof ProjectScript];
//#endregion
//# sourceMappingURL=index.d.cts.map