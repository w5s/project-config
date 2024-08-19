import { ESLint, Linter } from 'eslint';

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
    function fixme(_status: Linter.RuleLevel | [Linter.RuleLevel, ...any[]] | undefined): "off";
}

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
    readonly update?: (content: string) => string | undefined;
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
    readonly update?: (content: V | undefined) => V | undefined;
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

declare namespace Project {
    /**
     * A type of a file extension
     */
    type Extension = `.${string}`;
    /**
     * Object hash of all well-known file extension category to file extensions mapping
     */
    interface ExtensionRegistry {
        graphql: readonly Extension[];
        jpeg: readonly Extension[];
        javascript: readonly Extension[];
        javascriptreact: readonly Extension[];
        typescript: readonly Extension[];
        typescriptreact: readonly Extension[];
        yaml: readonly Extension[];
    }
    /**
     * A list of "vscode-like" language identifiers (i.e. "javascript", "javascriptreact")
     */
    type LanguageId = keyof ExtensionRegistry;
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
     * @example
     * ```ts
     * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
     * ```
     */
    function extensionsToMatcher(extensions: readonly Extension[]): RegExp;
    /**
     * Return a glob matcher that will match any list of extensions
     *
     * @example
     * ```ts
     * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
     * ```
     */
    function extensionsToGlob(extensions: readonly Extension[]): string;
}

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

export { type BlockOptions, type DirectoryOptions, ESLintConfig, type FileOptions, type JSONOption, type JSONValue, Project, ProjectScript, block, blockSync, directory, directorySync, file, fileSync, json, jsonSync };
