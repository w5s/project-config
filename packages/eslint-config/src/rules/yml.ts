import { Project } from '@w5s/dev';
import type eslint from 'eslint';

const yamlExtensions = Project.queryExtensions(['yaml']);
const config: eslint.Linter.Config = {
  extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
  overrides: [
    {
      files: [
        ...yamlExtensions.map((ext) => `docker-compose*${ext}`),
        ...yamlExtensions.map((ext) => `compose-*${ext}`),
        ...yamlExtensions.map((ext) => `compose${ext}`),
      ],
      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ],
  parser: 'yaml-eslint-parser',
  plugins: ['yml'],
};
export = config;
