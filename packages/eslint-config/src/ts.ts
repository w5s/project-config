import type eslint from 'eslint';
import { EXTENSIONS_WITHOUT_DOT, ESLintConfig } from '@w5s/dev';
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
      files: [`*.+(${EXTENSIONS_WITHOUT_DOT.filter((_) => _.includes('ts')).join('|')})`],
    },
  ],
};

export = config;
