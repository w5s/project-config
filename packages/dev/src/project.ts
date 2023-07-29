export namespace Project {
  /**
   * Supported ECMA version
   *
   * @example
   * ```ts
   * Project.ecmaVersion() // 2022
   * ```
   */
  export function ecmaVersion() {
    return 2022 as const;
  }

  const SOURCE_EXTENSIONS = Object.freeze(['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx', '.cjs', '.mjs']);

  /**
   * Supported file extensions
   *
   * @example
   * ```ts
   * Project.sourceExtensions() // ['.ts', '.js', ...]
   * ```
   */
  export function sourceExtensions() {
    return SOURCE_EXTENSIONS;
  }

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
  export function resourceExtensions() {
    return RESOURCE_EXTENSIONS;
  }
}
