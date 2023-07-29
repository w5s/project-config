"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTENSIONS_RESOURCES_REGEX = exports.CONFIG_GLOB_LIST = exports.EXTENSIONS_WITHOUT_DOT = exports.IGNORE_LIST = void 0;
const project_js_1 = require("./project.js");
/**
 * Files and folders to always ignore
 *
 * @example
 * ```ts
 * IGNORE_LIST // ['node_modules/', 'build/', ...]
 * ```
 */
exports.IGNORE_LIST = [
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
];
/**
 * Supported file extensions without starting dots
 *
 * @example
 * ```ts
 * EXTENSIONS_WITHOUT_DOT // ['ts', 'js', ...]
 * ```
 */
exports.EXTENSIONS_WITHOUT_DOT = project_js_1.Project.sourceExtensions().map((ext) => ext.slice(1));
/**
 * List of globs to find config related files
 *
 * @example
 * ```ts
 * CONFIG_GLOB_LIST // ['**\/.*.{js,cjs}', '**\/*.config.{js,cjs}']
 * ```
 */
exports.CONFIG_GLOB_LIST = ['**/.*.{js,cjs}', '**/*.config.{js,cjs}'];
exports.EXTENSIONS_RESOURCES_REGEX = '\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|gql|graphql|yml|yaml)$';
//# sourceMappingURL=constant.js.map