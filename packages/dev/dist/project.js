"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
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
    const SOURCE_EXTENSIONS = Object.freeze(['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx', '.cjs', '.mjs']);
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
})(Project || (exports.Project = Project = {}));
//# sourceMappingURL=project.js.map