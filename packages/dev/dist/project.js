"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
function escapeRegExp(value) {
    return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&'); // $& means the whole matched string
}
var Project;
(function (Project) {
    /**
     * Supported ECMA version
     *
     * @example
     * ```ts
     * Project.ecmaVersion() // 2022
     * ```
     */
    function ecmaVersion() {
        return 2022;
    }
    Project.ecmaVersion = ecmaVersion;
    const SOURCE_EXTENSIONS = Object.freeze([
        '.ts',
        '.tsx',
        '.cts',
        '.mts',
        '.js',
        '.jsx',
        '.cjs',
        '.mjs',
    ]);
    /**
     * Supported file extensions
     *
     * @example
     * ```ts
     * Project.sourceExtensions() // ['.ts', '.js', ...]
     * ```
     */
    function sourceExtensions() {
        return SOURCE_EXTENSIONS;
    }
    Project.sourceExtensions = sourceExtensions;
    const RESOURCE_EXTENSIONS = Object.freeze([
        '.css',
        '.sass',
        '.scss',
        '.less',
        '.gif',
        '.png',
        '.jpg',
        '.jpeg',
        '.svg',
        '.gql',
        '.graphql',
        '.yml',
        '.yaml',
    ]);
    /**
     * Resource file extensions
     *
     * @example
     * ```ts
     * Project.resourceExtensions() // ['.css', '.sass', ...]
     * ```
     */
    function resourceExtensions() {
        return RESOURCE_EXTENSIONS;
    }
    Project.resourceExtensions = resourceExtensions;
    const IGNORED = Object.freeze([
        'node_modules/',
        'build/',
        'cjs/',
        'coverage/',
        'dist/',
        'dts/',
        'esm/',
        'lib/',
        'mjs/',
        'umd/',
    ]);
    /**
     * Files and folders to always ignore
     *
     * @example
     * ```ts
     * IGNORED // ['node_modules/', 'build/', ...]
     * ```
     */
    function ignored() {
        return IGNORED;
    }
    Project.ignored = ignored;
    /**
     * Return a RegExp that will match any list of extensions
     *
     * @example
     * ```ts
     * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
     * ```
     */
    function extensionsToMatcher(extensions) {
        return new RegExp(`(${extensions.map(escapeRegExp).join('|')})$`);
    }
    Project.extensionsToMatcher = extensionsToMatcher;
    /**
     * Return a glob matcher that will match any list of extensions
     *
     * @example
     * ```ts
     * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
     * ```
     */
    function extensionsToGlob(extensions) {
        return `*.+(${extensions.map((_) => _.replace(/^\./, '')).join('|')})`;
    }
    Project.extensionsToGlob = extensionsToGlob;
})(Project || (exports.Project = Project = {}));
//# sourceMappingURL=project.js.map