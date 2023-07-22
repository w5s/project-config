"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonc_js_1 = __importDefault(require("./rules/jsonc.js"));
const config = {
    overrides: [
        {
            ...jsonc_js_1.default,
            files: ['*.json', '*.json5', '*.jsonc'],
        },
    ],
};
module.exports = config;
