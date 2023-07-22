"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const base_js_1 = __importDefault(require("./es/base.js"));
const promise_js_1 = __importDefault(require("./es/promise.js"));
const jsdoc_js_1 = __importDefault(require("./es/jsdoc.js"));
const import_js_1 = __importDefault(require("./es/import.js"));
const unicorn_js_1 = __importDefault(require("./es/unicorn.js"));
// import prettierConfig from './prettier.js';
const config = dev_1.ESLintConfig.concat(base_js_1.default, promise_js_1.default, jsdoc_js_1.default, import_js_1.default, unicorn_js_1.default
// prettierConfig
);
module.exports = config;
