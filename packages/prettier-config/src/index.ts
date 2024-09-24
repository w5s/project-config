import type { Config } from 'prettier';

const prettierConfig: Config = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

// eslint-disable-next-line import/no-default-export
export default prettierConfig;
