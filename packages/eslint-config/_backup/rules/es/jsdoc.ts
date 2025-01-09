import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/no-undefined-types': 'off', // https://github.com/gajus/eslint-plugin-jsdoc/issues/839
    'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
    'jsdoc/valid-types': 'off', // FIXME: reports lots of false positive
    strict: ['error', 'safe'],
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};

export = config;
