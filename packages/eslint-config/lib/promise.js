"use strict";
const _rule_js_1 = require("./_rule.js");
const config = (0, _rule_js_1.concatESConfig)({
    extends: ['plugin:promise/recommended'],
    plugins: ['promise'],
    rules: {
        // https://github.com/xjamundx/eslint-plugin-promise/issues/212
        'promise/prefer-await-to-callbacks': (0, _rule_js_1.fixme)('error'),
        'promise/prefer-await-to-then': 'error',
    },
});
module.exports = config;
//# sourceMappingURL=promise.js.map