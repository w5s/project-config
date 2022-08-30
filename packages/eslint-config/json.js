/* cspell:disable */
// https://github.com/keithamus/sort-package-json/blob/master/defaultRules.md
module.exports = {
  extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
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
              'binary', //	Key order: module_name, module_path, remote_path, package_name, host
              'scripts', // Script sort
              'betterScripts', // Script sort
              'contributes',
              'activationEvents', // Unique items
              'husky', //	Sorts the hooks field using git hook sort
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
              'dependenciesMeta', //	Key sort (deep)
              'peerDependencies',
              'peerDependenciesMeta', //	Key sort (deep)
              'optionalDependencies',
              'bundledDependencies',
              'bundleDependencies',
              'extensionPack',
              'extensionDependencies',
              'flat',
              'packageManager',
              'engines',
              'engineStrict',
              'volta', //	Key order: node, npm, yarn
              'languageName',
              'os',
              'cpu',
              'preferGlobal',
              'publishConfig',
              'icon',
              'badges', //	Key order (per item): description, url, href
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
    },
  ],
  rules: {
    // 'jsonc/sort-keys': 'error',
  },
};
