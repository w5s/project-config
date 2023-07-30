import type eslint from 'eslint';
import { Project } from '@w5s/dev';
import jestConfig from './rules/jest.js';

const sourceGlob = Project.extensionsToGlob(Project.sourceExtensions());
const config: eslint.Linter.Config = {
  overrides: [
    {
      ...jestConfig,
      files: [
        `**/__mocks__/**/${sourceGlob}`,
        `**/__tests__/**/${sourceGlob}`,
        `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`,
      ],
    },
  ],
};
export = config;
