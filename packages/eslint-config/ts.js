// eslint-disable-next-line import/no-unresolved
const { EXTENSIONS_WITHOUT_DOT } = require('@w5s/dev');

module.exports = {
  overrides: [
    {
      extends: [
        // require.resolve('./dist/es.js'),
        require.resolve('./dist/typescript.js'),
        require.resolve('./dist/prettier.js'),
      ],
      files: [`*.+(${EXTENSIONS_WITHOUT_DOT.filter((_) => _.includes('ts')).join('|')})`],
    },
  ],
};
