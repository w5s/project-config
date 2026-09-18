import type { LanguageId } from './LanguageId.js';

const reExtension = /^\./;

/**
 * A type of a file extension
 */
export type Extension = `.${string}`;

/**
 * Object hash of all well-known file extension category to file extensions mapping
 */
export type ExtensionRegistry = Record<LanguageId, ReadonlyArray<Extension>>;

/**
 * Supported ECMA version
 *
 * @example
 * ```ts
 * Project.ecmaVersion() // 2022
 * ```
 */
function ecmaVersion() {
  return 2022 as const;
}

function escapeRegExp(value: string) {
  // eslint-disable-next-line unicorn/prefer-string-raw
  return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&'); // $& means the whole matched string
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
function queryExtensions(languages: Array<LanguageId>): ReadonlyArray<Extension> {
  return languages
    .reduce<Array<Extension>>((previousValue, currentValue) =>

      previousValue.concat(registry[currentValue] ?? ([] as Array<Extension>)), [])
    // eslint-disable-next-line unicorn/no-array-sort
    .sort((left, right) => left.localeCompare(right));
}

/**
 * Supported file extensions
 *
 * @example
 * ```ts
 * Project.sourceExtensions() // ['.ts', '.js', ...]
 * ```
 */
function sourceExtensions() {
  return queryExtensions(['javascript', 'javascriptreact', 'typescript', 'typescriptreact']);
}

const RESOURCE_EXTENSIONS: ReadonlyArray<Extension> = Object.freeze([
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
function resourceExtensions() {
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
 * Return a RegExp that will match any list of extensions
 *
 * @param extensions
 * @example
 * ```ts
 * Project.extensionsToRegExp(['.js', '.ts']) // RegExp = /(\.js|\.ts)$/
 * ```
 */
function extensionsToRegExp(extensions: ReadonlyArray<Extension>): RegExp {
  return new RegExp(`(${extensions.map(escapeRegExp).join('|')})$`);
}

/**
 * Return a list of test glob matchers for a list of extensions.
 * This is useful to generate globs for vitest/jest matchers
 *
 * @param extensions
 * @param options
 * @param options.testExtensions dotted compound extensions (e.g. `.spec`, `.test`)
 * @param options.testFolders
 * @example
 * ```ts
 * Project.extensionsToTestGlob(['.js', '.ts']);
 * // ['<tests-folder-glob>', '<test-suffix-glob>']
 *
 * Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['.unit'] });
 * // ['<tests-folder-glob>', '<custom-test-suffix-glob>']
 * ```
 */
function extensionsToTestGlob(
  extensions: ReadonlyArray<Extension>,
  options: {
    testExtensions?: ReadonlyArray<Extension>;
    testFolders?: ReadonlyArray<string>;
  } = {},
): Array<string> {
  const {
    testExtensions = ['.spec', '.test'],
    testFolders = ['__tests__'],
  } = options;

  return [
    ...(testFolders.length === 0 ? [] : [glob({ fileExtensions: [extensions], folderAncestors: testFolders, nested: true })]),
    ...(testExtensions.length === 0
      ? []
      : [glob({ fileExtensions: [testExtensions, extensions], nested: true })]),
  ];
}

/**
 * Create a new glob pattern based on the provided options.
 *
 * @param options The glob options to use when generating the glob pattern.
 *
 * @example
 * ```ts
 * Project.glob({ fileExtensions: [['.js', '.ts']] }); // '*.@(js|ts)'
 * Project.glob({ fileExtensions: [['.js']], nested: true }); // '**\/*.js'
 * ```
 */
function glob(options: Project.glob.Options) {
  const { fileExtensions = [], fileStem = '*', folderAncestors = [], folderParents = [], nested = false } = options;
  const nestedGlob = nested === true ? '**/' : '';
  const ancestorGlob = globAppendIfNotEmpty(globFrom(folderAncestors), '/**/');
  const parentGlob = globAppendIfNotEmpty(globFrom(folderParents), '/');
  const stemGlob = typeof fileStem === 'string' ? fileStem : fileStem.length === 0 ? '*' : globOr(fileStem);
  let extensionsGlob = '';
  for (const extensionExpression of fileExtensions) {
    const extensionGlob = typeof extensionExpression === 'string' ? extensionExpression : globExt(extensionExpression);
    extensionsGlob += extensionGlob;
  }

  return `${nestedGlob}${ancestorGlob}${parentGlob}${stemGlob}${extensionsGlob}`;
}

function globAppendIfNotEmpty(base: string, append: string): string {
  return base.length === 0 ? base : `${base}${append}`;
}

function globExt(extensions: ReadonlyArray<Extension>): string {
  const ext = globOr(extensions.map((_) => _.replace(reExtension, '')));
  return ext === '' ? '' : `.${ext}`;
}

function globFrom(expression: ReadonlyArray<string> | string): string {
  return typeof expression === 'string' ? expression : globOr(expression);
}

function globOr(values: ReadonlyArray<string>): string {
  // eslint-disable-next-line ts/no-non-null-assertion
  return values.length === 0 ? '' : values.length === 1 ? values[0]! : `@(${values.join('|')})`;
}

/**
 * Files and folders to always ignore
 *
 * @example
 * ```ts
 * IGNORED // ['node_modules/', 'build/', ...]
 * ```
 */
function ignored() {
  return IGNORED;
}

export const Project = Object.freeze({
  ecmaVersion,
  extensionsToRegExp,
  extensionsToTestGlob,
  glob,
  ignored,
  queryExtensions,
  resourceExtensions,
  sourceExtensions,
});
export namespace Project {
  // eslint-disable-next-line ts/no-shadow
  export namespace glob {
    export interface Options {

      /**
       * An extension stack
       *
       * @example
       * ```ts
       * Project.glob({ fileExtensions: [['.js']] }); // '*.js'
       * Project.glob({ fileExtensions: ['.@(js|ts)'] }); // '*.@(js|ts)'
       * Project.glob({ fileExtensions: [['.js', '.ts']] }); // '*.@(js|ts)'
       * Project.glob({ fileExtensions: [['.spec', '.test'], ['.js', '.ts', '.tsx']] }); // '*.@(spec|test).@(js|ts|tsx)'
       * Project.glob({ fileExtensions: [] }); // '*'
       * ```
       */
      fileExtensions?: ReadonlyArray<ReadonlyArray<Extension> | string> | undefined;

      /**
       * The stem (basename without extension) of the file to match.
       *
       * @example
       * ```ts
       * Project.glob({ fileStem: 'index', fileExtensions: ['.*'] }); // 'index.*'
       * ```
       */
      fileStem?: ReadonlyArray<string> | string | undefined;

      /**
       * Ancestor folders to include in the glob pattern.
       *
       * @example
       * ```ts
       * Project.glob({ ancestorFolders: ['src'] }); // 'src/**​/*'
       * ```
       */
      folderAncestors?: ReadonlyArray<string> | string | undefined;

      /**
       * Parent folders to include in the glob pattern (immediate parent folders).
       *
       * @example
       * ```ts
       * Project.glob({ folderParents: ['src'] }); // 'src/*'
       * ```
       */
      folderParents?: ReadonlyArray<string> | string | undefined;

      /**
       * Whether to match files in nested folders.
       *
       * @default false
       * @example
       * ```ts
       * Project.glob({ nested: true }); // '* /*'
       * Project.glob({ nested: true, fileExtensions: [['.js']] }); // '**\/*.js'
       * ```
       */
      nested?: boolean | undefined;
    }
  }
}
