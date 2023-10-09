export declare namespace Project {
    /**
     * A type of a file extension
     */
    type Extension = `.${string}`;
    /**
     * Object hash of all well-known file extension category to file extensions mapping
     */
    interface ExtensionRegistry {
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
//# sourceMappingURL=project.d.ts.map