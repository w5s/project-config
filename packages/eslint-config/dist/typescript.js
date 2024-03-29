"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const prettier_js_1 = __importDefault(require("./rules/prettier.js"));
const config = {
    overrides: [
        {
            ...dev_1.ESLintConfig.concat({
                extends: [require.resolve('./rules/typescript.js')],
            }, prettier_js_1.default),
            files: [
                dev_1.Project.extensionsToGlob(
                // ts only extensions
                dev_1.Project.queryExtensions(['typescript', 'typescriptreact'])),
            ],
        },
    ],
};
module.exports = config;
