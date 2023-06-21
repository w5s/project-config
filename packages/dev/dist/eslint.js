"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLintConfig = void 0;
function toArray(value) {
    if (value == null) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value];
}
function concatArray(left, right) {
    return toArray(left).concat(toArray(right));
}
var ESLintConfig;
(function (ESLintConfig) {
    /**
     *
     * @param configs
     */
    function concat(...configs) {
        return configs.reduce((returnValue, config) => ({
            ...returnValue,
            ...config,
            env: { ...returnValue.env, ...config.env },
            extends: concatArray(returnValue.extends, config.extends),
            globals: { ...returnValue.globals, ...config.globals },
            overrides: concatArray(returnValue.overrides, config.overrides),
            parserOptions: { ...returnValue.parserOptions, ...config.parserOptions },
            plugins: concatArray(returnValue.plugins, config.plugins),
            rules: { ...returnValue.rules, ...config.rules },
            settings: { ...returnValue.settings, ...config.settings },
        }), {
            env: {},
            extends: [],
            globals: {},
            overrides: [],
            parserOptions: {},
            plugins: [],
            rules: {},
            settings: {},
        });
    }
    ESLintConfig.concat = concat;
    /**
     * Always return 'off'. `_status` is the previous rule value.
     *
     * @param _status
     */
    function fixme(_status) {
        return 'off';
    }
    ESLintConfig.fixme = fixme;
})(ESLintConfig || (exports.ESLintConfig = ESLintConfig = {}));
//# sourceMappingURL=eslint.js.map