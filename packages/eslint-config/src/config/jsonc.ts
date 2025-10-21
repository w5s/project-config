/* cSpell:disable */
import { interopDefault, Project } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/jsonc.js';

const defaultFiles = [`**/${Project.extensionsToGlob(['.json', '.json5', '.jsonc'])}`];

export async function jsonc(options: jsonc.Options = {}): Promise<readonly Config[]> {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser')),
  ] as const);
  const { files = defaultFiles, rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled, indent } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/jsonc/setup',
      plugins: {
        jsonc: jsoncPlugin,
      },
    },
    {
      files,
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'w5s/jsonc/rules',
      rules: {
        ...(jsoncPlugin.configs['flat/recommended-with-json'][0]?.rules),
        ...(stylisticEnabled
          ? {
              'jsonc/array-bracket-spacing': ['error', 'never'],
              'jsonc/comma-dangle': ['error', 'never'],
              'jsonc/comma-style': ['error', 'last'],
              'jsonc/indent': ['error', indent],
              'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
              'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
              'jsonc/object-curly-spacing': ['error', 'always'],
              'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
              'jsonc/quote-props': 'error',
              'jsonc/quotes': 'error',
            }
          : {}),
        ...rules,
      },
    },
    stylisticEnabled ? sortPackageJson() : {},
    stylisticEnabled ? sortTsconfigJson() : {},
  ] as [Config, Config, Config, Config] satisfies Array<Config>;
}

function sortTsconfigJson() {
  return {
    files: ['tsconfig*.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['$schema', 'display', 'extends', 'compilerOptions', 'include', 'exclude', 'files', 'references'],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '.*',
        },
      ],
    },
  };
}

function sortPackageJson() {
  return {
    files: ['package.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            '$schema',
            'name',
            'displayName',
            'version',
            'private',
            'description',
            'categories',
            'keywords',
            'homepage',
            'bugs',
            'repository',
            'funding',
            'license',
            'qna',
            'author',
            'maintainers', // Key order (per item): name, email, url
            'contributors', // Key order (per item): name, email, url
            'publisher',
            'sideEffects',
            'type',
            'imports',
            'exports',
            'main',
            'svelte',
            'umd:main',
            'jsdelivr',
            'unpkg',
            'module',
            'source',
            'jsnext:main',
            'browser',
            'react-native',
            'types',
            'typesVersions',
            'typings',
            'style',
            'example',
            'examplestyle',
            'assets',
            'bin',
            'man',
            'directories', // Key order: lib, bin, man, doc, example, test
            'files', // Unique items
            'workspaces',
            'binary', // Key order: module_name, module_path, remote_path, package_name, host
            'scripts', // Script sort
            'betterScripts', // Script sort
            'contributes',
            'activationEvents', // Unique items
            'husky', // Sorts the hooks field using git hook sort
            'simple-git-hooks', // Key sort using git hook sort
            'pre-commit',
            'commitlint',
            'lint-staged',
            'config',
            'nodemonConfig',
            'browserify',
            'babel',
            'browserslist',
            'xo',
            'prettier', // Prettier sort
            'eslintConfig', // ESLint sort
            'eslintIgnore',
            'npmpackagejsonlint', // Key sort (also recognizes: npmPackageJsonLintConfig, npmpkgjsonlint)
            'release',
            'remarkConfig',
            'stylelint',
            'ava',
            'jest',
            'mocha',
            'nyc',
            'tap',
            'resolutions',
            'dependencies',
            'devDependencies',
            'dependenciesMeta', // Key sort (deep)
            'peerDependencies',
            'peerDependenciesMeta', // Key sort (deep)
            'optionalDependencies',
            'bundledDependencies',
            'bundleDependencies',
            'extensionPack',
            'extensionDependencies',
            'flat',
            'packageManager',
            'engines',
            'engineStrict',
            'volta', // Key order: node, npm, yarn
            'languageName',
            'os',
            'cpu',
            'preferGlobal',
            'publishConfig',
            'icon',
            'badges', // Key order (per item): description, url, href
            'galleryBanner',
            'preview',
            'markdown',
          ],
          pathPattern: '^$',
        },
        {
          order: ['url', 'email'],
          pathPattern: `^bugs$`,
        },
        ...['repository', 'funding', 'license', 'author'].map((key) => ({
          order: ['type', 'name', 'email', 'url'],
          pathPattern: `^${key}$`,
        })),
        ...['scripts', 'betterScripts'].map((key) => ({
          order: { type: 'asc' },
          pathPattern: `^${key}$`,
        })),
        ...[
          'bin',
          'contributes',
          'commitlint',
          'config',
          'nodemonConfig',
          'browserify',
          'babel',
          'xo',
          'release',
          'remarkConfig',
          'ava',
          'jest',
          'mocha',
          'nyc',
          'tap',
          'resolutions',
          'engines',
          'engineStrict',
          'preferGlobal',
          'publishConfig',
          'galleryBanner',
        ].map((key) => ({
          order: { type: 'asc' },
          pathPattern: `^${key}$`,
        })),
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled|extension)?[Dd]ependencies$',
        },
        {
          order: ['types', 'require', 'import'],
          pathPattern: '^exports.*$',
        },
      ],

    },
  };
}

export namespace jsonc {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {}
}
