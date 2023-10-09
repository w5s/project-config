import type eslint from 'eslint';
import { ESLintConfig, Project } from '@w5s/dev';
import prettierConfig from './rules/prettier.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...ESLintConfig.concat(
        {
          extends: [require.resolve('./rules/typescript.js')],
        },
        prettierConfig
      ),
      files: [
        Project.extensionsToGlob(
          // ts only extensions
          Project.queryExtensions(['typescript', 'typescriptreact'])
        ),
      ],
    },
  ],
};

export = config;
