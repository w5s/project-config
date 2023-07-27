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
 * Supported file extensions
 *
 * @example
 * ```ts
 * EXTENSIONS // ['.ts', '.js', ...]
 * ```
 */
export const EXTENSIONS = ['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx', '.cjs', '.mjs'];

/**
 * Supported file extensions without starting dots
 *
 * @example
 * ```ts
 * EXTENSIONS_WITHOUT_DOT // ['ts', 'js', ...]
 * ```
 */
export const EXTENSIONS_WITHOUT_DOT = EXTENSIONS.map((ext) => ext.slice(1));

/**
 * List of globs to find config related files
 *
 * @example
 * ```ts
 * CONFIG_GLOB_LIST // ['**\/.*.{js,cjs}', '**\/*.config.{js,cjs}']
 * ```
 */
export const CONFIG_GLOB_LIST = ['**/.*.{js,cjs}', '**/*.config.{js,cjs}'];

export const EXTENSIONS_RESOURCES_REGEX = '\\.(css|sass|scss|less|gif|png|jpg|jpeg|svg|gql|graphql|yml|yaml)$';
