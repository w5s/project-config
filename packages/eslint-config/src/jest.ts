import type eslint from 'eslint';
import { EXTENSIONS_WITHOUT_DOT } from '@w5s/dev';
import jestConfig from './rules/jest.js';

const extensions = EXTENSIONS_WITHOUT_DOT.join('|');
const config: eslint.Linter.Config = {
  overrides: [
    {
      ...jestConfig,
      files: [
        `**/__mocks__/**/*.+(${extensions})`,
        `**/__tests__/**/*.+(${extensions})`,
        `**/?(*.)+(spec|test).+(${extensions})`,
      ],
    },
  ],
};
export = config;
