// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [
        require.resolve('./lib/base.js'),
        require.resolve('./lib/jsdoc.js'),
        require.resolve('./lib/import.js'),
        require.resolve('./lib/unicorn.js'),
        'plugin:import/typescript',
        require.resolve('./lib/typescript.js'),
        require.resolve('./lib/prettier.js'),
      ],
      files: ['*.+(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      settings: {
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],

        // Resolve type definition packages
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],

        // Apply special parsing for TypeScript files
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },

        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
          node: {
            extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
          },
        },
      },
    },
  ],
};
