import type { Config } from 'prettier';

export const config: Config = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
