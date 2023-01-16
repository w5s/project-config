"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disable = exports.fixme = exports.concatESConfig = void 0;
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
function concatESConfig(...configs) {
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
        overrides: [],
        plugins: [],
        rules: {},
        settings: {},
    });
}
exports.concatESConfig = concatESConfig;
function fixme(_status) {
    return 'off';
}
exports.fixme = fixme;
function disable(_status, _explanation) {
    return 'off';
}
exports.disable = disable;
