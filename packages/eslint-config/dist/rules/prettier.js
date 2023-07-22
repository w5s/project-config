"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const prettier_config_1 = __importDefault(require("@w5s/prettier-config"));
const config = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettier_config_1.default],
    },
};
module.exports = config;
