// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [
        require.resolve('./rules/base'),
        require.resolve('./rules/jsdoc'),
        require.resolve('./rules/import'),
        require.resolve('./rules/unicorn'),
        'plugin:import/typescript',
        require.resolve('./rules/typescript'),
        require.resolve('./rules/prettier'),
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
