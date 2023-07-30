function escapeRegExp(value: string) {
  return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&'); // $& means the whole matched string
}

export namespace Project {
  export type Extension = `.${string}`;

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

  const SOURCE_EXTENSIONS: readonly Extension[] = Object.freeze([
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
  export function sourceExtensions() {
    return SOURCE_EXTENSIONS;
  }

  const RESOURCE_EXTENSIONS: readonly Extension[] = Object.freeze([
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

  /**
   * Return a RegExp that will match any list of extensions
   *
   * @example
   * ```ts
   * Project.extensionsToMatcher(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
   * ```
   */
  export function extensionsToMatcher(extensions: readonly Extension[]): RegExp {
    return new RegExp(`(${extensions.map(escapeRegExp).join('|')})$`);
  }

  /**
   * Return a glob matcher that will match any list of extensions
   *
   * @example
   * ```ts
   * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
   * ```
   */
  export function extensionsToGlob(extensions: readonly Extension[]): string {
    return `*.+(${extensions.map((_) => _.replace(/^\./, '')).join('|')})`;
  }
}
