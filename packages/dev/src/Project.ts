import type { LanguageId } from './LanguageId.js';

function escapeRegExp(value: string) {
  // eslint-disable-next-line unicorn/prefer-string-raw
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
  export type ExtensionRegistry = { [K in LanguageId]: readonly Extension[] };

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

  const registry: ExtensionRegistry = {
    css: ['.css'],
    graphql: ['.gql', '.graphql'],
    javascript: ['.js', '.cjs', '.mjs'],
    javascriptreact: ['.jsx'],
    jpeg: ['.jpg', '.jpeg'],
    json: ['.json'],
    jsonc: ['.jsonc'],
    less: ['.less'],
    markdown: ['.markdown', '.mdown', '.mkd', '.md'],
    sass: ['.sass'],
    scss: ['.scss'],
    typescript: ['.ts', '.cts', '.mts'],
    typescriptreact: ['.tsx'],
    vue: ['.vue'],
    yaml: ['.yaml', '.yml'],
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
   * @param languages
   */
  export function queryExtensions(languages: LanguageId[]): readonly Extension[] {
    return languages
      .reduce<Extension[]>((previousValue, currentValue) =>
        // eslint-disable-next-line unicorn/prefer-spread
        previousValue.concat(registry[currentValue] ?? ([] as Extension[])), [])
      // eslint-disable-next-line unicorn/no-array-sort
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
    '.gif',
    '.png',
    '.svg',
    ...queryExtensions(['css', 'graphql', 'jpeg', 'less', 'sass', 'sass', 'yaml']),
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
   * @param extensions
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
   * @param extensions
   * @example
   * ```ts
   * Project.extensionsToGlob(['.js', '.ts']) // '*.+(js|ts)'
   * ```
   */
  export function extensionsToGlob(extensions: readonly Extension[]): string {
    return `*.+(${extensions.map((_) => _.replace(/^\./, '')).join('|')})`;
  }
}
