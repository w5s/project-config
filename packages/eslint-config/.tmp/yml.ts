import type eslint from 'eslint';
import { Project } from '@w5s/dev';
import ymlConfig from '../_backup/rules/yml.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...ymlConfig,
      files: [
        Project.extensionsToGlob(
          // ts only extensions
          Project.queryExtensions(['yaml']),
        ),
      ],
    },
  ],
};
export = config;
