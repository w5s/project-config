function escapeRegExp(value: string) {
  return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&'); // $& means the whole matched string
}

export namespace Project {
  /**
   * A type of a file extension
   */
  export type Extension = `.${string}`;

  /**
   * Object hash of all well-known file extension category to file extensions mapping
   */
  export interface ExtensionRegistry {
    javascript: readonly Extension[];
    javascriptreact: readonly Extension[];
    typescript: readonly Extension[];
    typescriptreact: readonly Extension[];
  }

  /**
   * A list of "vscode-like" extension category
   */
  export type ExtensionQuery = keyof ExtensionRegistry;

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

  const registry: { [key: string]: readonly Extension[] } = {
    javascript: ['.js', '.cjs', '.mjs'],
    javascriptreact: ['.jsx'],
    typescript: ['.ts', '.cts', '.mts'],
    typescriptreact: ['.tsx'],
  };

  /**
   * Return a list of extensions
   *
   * @example
   * ```ts
   * Project.queryExtensions(['javascript']); // ['.js', '.cjs', ...]
   * Project.queryExtensions(['typescript', 'typescriptreact']); // ['.ts', '.mts', ..., '.tsx']
   * ```
   *
   * @param query
   */
  export function queryExtensions(query: ExtensionQuery[]): readonly Extension[] {
    return query
      .reduce<Extension[]>(
        (previousValue, currentValue) => previousValue.concat(registry[currentValue] ?? ([] as Extension[])),
        []
      )
      .sort();
  }

  /**
   * Supported file extensions
   *
   * @example
   * ```ts
   * Project.sourceExtensions() // ['.ts', '.js', ...]
   * ```
   */
  export function sourceExtensions() {
    return queryExtensions(['javascript', 'javascriptreact', 'typescript', 'typescriptreact']);
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
  export function ignored() {
    return IGNORED;
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
