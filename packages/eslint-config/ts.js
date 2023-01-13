// eslint-disable-next-line import/no-unresolved
const { EXTENSIONS_WITHOUT_DOT } = require('@w5s/dev');

module.exports = {
  overrides: [
    {
      extends: [
        // require.resolve('./lib/es.js'),
        require.resolve('./lib/typescript.js'),
        require.resolve('./lib/prettier.js'),
      ],
      files: [`*.+(${EXTENSIONS_WITHOUT_DOT.filter((_) => _.includes('ts')).join('|')})`],
    },
  ],
};
