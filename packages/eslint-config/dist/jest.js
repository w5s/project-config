"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const jest_js_1 = __importDefault(require("./rules/jest.js"));
const extensions = dev_1.EXTENSIONS_WITHOUT_DOT.join('|');
const config = {
    overrides: [
        {
            ...jest_js_1.default,
            files: [
                `**/__mocks__/**/*.+(${extensions})`,
                `**/__tests__/**/*.+(${extensions})`,
                `**/?(*.)+(spec|test).+(${extensions})`,
            ],
        },
    ],
};
module.exports = config;
