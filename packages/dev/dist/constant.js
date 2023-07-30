"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_GLOB_LIST = exports.IGNORE_LIST = void 0;
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
 * List of globs to find config related files
 *
 * @example
 * ```ts
 * CONFIG_GLOB_LIST // ['**\/.*.{js,cjs}', '**\/*.config.{js,cjs}']
 * ```
 */
exports.CONFIG_GLOB_LIST = ['**/.*.{js,cjs}', '**/*.config.{js,cjs}'];
//# sourceMappingURL=constant.js.map