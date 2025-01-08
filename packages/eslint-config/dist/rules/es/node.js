"use strict";
const config = {
    extends: [],
    plugins: ['n'],
    rules: {
        // 'n/handle-callback-err': ['error', '^(err|error|_error)$'],
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-sync': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/console': ['error', 'always'],
        // 'n/prefer-global/process': ['error', 'never'],
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/process-exit-as-throw': 'error',
    },
};
module.exports = config;
