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
     * Return a RegExp that will any list of extensions
     *
     * @example
     * ```ts
     * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
     * ```
     */
    function extensionsToMatcher(extensions: readonly Extension[]): RegExp;
}
//# sourceMappingURL=project.d.ts.map