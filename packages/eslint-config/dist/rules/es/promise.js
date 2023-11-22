"use strict";
const dev_1 = require("@w5s/dev");
const config = dev_1.ESLintConfig.concat({
    extends: ['plugin:promise/recommended'],
    plugins: ['promise'],
    rules: {
        'promise/prefer-await-to-callbacks': dev_1.ESLintConfig.fixme('error'), // https://github.com/xjamundx/eslint-plugin-promise/issues/212
        'promise/prefer-await-to-then': 'error',
    },
});
module.exports = config;
