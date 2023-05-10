"use strict";
const config = {
    extends: ['plugin:jsdoc/recommended'],
    plugins: ['jsdoc'],
    rules: {
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
        'jsdoc/valid-types': 'off',
        strict: ['error', 'safe'],
    },
    settings: {
        jsdoc: {
            mode: 'typescript',
        },
    },
};
module.exports = config;
