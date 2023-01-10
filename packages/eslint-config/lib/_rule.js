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
    return configs.reduce((returnValue, config) => Object.assign({}, returnValue, config, {
        env: Object.assign({}, returnValue.env, config.env),
        extends: concatArray(returnValue.extends, config.extends),
        overrides: concatArray(returnValue.overrides, config.overrides),
        plugins: concatArray(returnValue.plugins, config.plugins),
        rules: Object.assign({}, returnValue.rules, config.rules),
        settings: Object.assign({}, returnValue.settings, config.settings),
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
//# sourceMappingURL=_rule.js.map