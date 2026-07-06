import type { Config } from 'prettier';

export const config: Config = {
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
  singleQuote: true,
  trailingComma: 'all',
};
