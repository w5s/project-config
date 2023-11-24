"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const yml_js_1 = __importDefault(require("./rules/yml.js"));
const config = {
    overrides: [
        {
            ...yml_js_1.default,
            files: [
                dev_1.Project.extensionsToGlob(
                // ts only extensions
                dev_1.Project.queryExtensions(['yaml'])),
            ],
        },
    ],
};
module.exports = config;
