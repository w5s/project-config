import { Project } from './project.js';

/**
 * Files and folders to always ignore
 *
 * @example
 * ```ts
 * IGNORE_LIST // ['node_modules/', 'build/', ...]
 * ```
 */
export const IGNORE_LIST = [
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
export const EXTENSIONS_WITHOUT_DOT = Project.sourceExtensions().map((ext) => ext.slice(1));

/**
 * List of globs to find config related files
 *
 * @example
 * ```ts
 * CONFIG_GLOB_LIST // ['**\/.*.{js,cjs}', '**\/*.config.{js,cjs}']
 * ```
 */
export const CONFIG_GLOB_LIST = ['**/.*.{js,cjs}', '**/*.config.{js,cjs}'];
