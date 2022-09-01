/* cspell:disable */
module.exports = {
  extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  plugins: ['yml'],
};
