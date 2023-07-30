export declare namespace Project {
    type Extension = `.${string}`;
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