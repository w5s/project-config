// eslint-disable-next-line import/no-unresolved
const { EXTENSIONS_WITHOUT_DOT } = require('@w5s/dev');

const extensions = EXTENSIONS_WITHOUT_DOT.join('|');

module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/jest.js')],
      files: [
        `**/__mocks__/**/*.+(${extensions})`,
        `**/__tests__/**/*.+(${extensions})`,
        `**/?(*.)+(spec|test).+(${extensions})`,
      ],
    },
  ],
};
