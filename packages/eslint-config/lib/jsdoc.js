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
//# sourceMappingURL=jsdoc.js.map