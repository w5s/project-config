const { off, warn, error } = require('./_rule');

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
 * @param {string} _status
 */
// eslint-disable-next-line no-unused-vars
const performanceIssue = (_status) => {
  return off;
};

module.exports = {
  plugins: ['import'],
  rules: {
    'import/default': error,
    'import/export': error,
    'import/exports-last': off,
    'import/extensions': [
      error,
      'ignorePackages',
      {
        js: 'never',
        json: 'always',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': [error, 'absolute-first'],
    'import/group-exports': off,
    'import/max-dependencies': [
      off,
      {
        max: 10,
      },
    ],
    'import/named': error,
    'import/namespace': error,
    'import/newline-after-import': error,
    'import/no-absolute-path': error,
    'import/no-amd': error,
    'import/no-anonymous-default-export': off,
    'import/no-commonjs': off, // Still used widely by nodejs programs
    'import/no-cycle': [error, { maxDepth: Number.POSITIVE_INFINITY }], // Elm, ReasonML forbids circular dependency
    'import/no-default-export': off,
    'import/no-deprecated': performanceIssue(warn),
    'import/no-duplicates': error,
    'import/no-dynamic-require': error,
    'import/no-extraneous-dependencies': [
      error,
      {
        // https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/imports.js#L71
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.{js,ts}', // jest config
          '**/jest.setup.{js,ts}', // jest setup
          '**/vue.config.{js,ts}', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
          '**/.eslintrc.js', // eslint config,
          '**/markdown.config.js', // markdown magic config,
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-internal-modules': off,
    'import/no-mutable-exports': error,
    'import/no-named-as-default': performanceIssue(error),
    'import/no-named-as-default-member': error,
    'import/no-named-default': error,
    'import/no-named-export': off,
    'import/no-namespace': off,
    'import/no-nodejs-modules': off,
    'import/no-relative-parent-imports': off,
    'import/no-restricted-paths': off,
    'import/no-self-import': error,
    'import/no-unassigned-import': error,
    'import/no-unresolved': [error, { caseSensitive: true, commonjs: true }],
    'import/no-unused-modules': [performanceIssue(error), { unusedExports: true }],
    'import/no-useless-path-segments': error,
    'import/no-webpack-loader-syntax': error,
    'import/order': [
      error,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': off,
    'import/unambiguous': off, // Disable because proposal still in progress
  },
  settings: {
    'import/core-modules': [],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
  },
};
