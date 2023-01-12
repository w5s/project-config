"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTENSIONS_RESOURCES_REGEX = exports.CONFIG_GLOB_LIST = exports.EXTENSIONS_WITHOUT_DOT = exports.EXTENSIONS = exports.IGNORE_LIST = exports.ECMA_VERSION = void 0;
/**
 * Supported ECMA version
 *
 * @example
 * ```ts
 * ECMA_VERSION // 2022
 * ```
 */
exports.ECMA_VERSION = 2022;
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
 * Supported file extensions
 *
 * @example
 * ```ts
 * EXTENSIONS // ['.ts', '.js', ...]
 * ```
 */
exports.EXTENSIONS = ['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx', '.cjs', '.mjs'];
/**
 * Supported file extensions without starting dots
 *
 * @example
 * ```ts
 * EXTENSIONS_WITHOUT_DOT // ['ts', 'js', ...]
 * ```
 */
exports.EXTENSIONS_WITHOUT_DOT = exports.EXTENSIONS.map((ext) => ext.slice(1));
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
//# sourceMappingURL=index.js.map