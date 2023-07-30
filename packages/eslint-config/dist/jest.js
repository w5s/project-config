"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const jest_js_1 = __importDefault(require("./rules/jest.js"));
const sourceGlob = dev_1.Project.extensionsToGlob(dev_1.Project.sourceExtensions());
const config = {
    overrides: [
        {
            ...jest_js_1.default,
            files: [
                `**/__mocks__/**/${sourceGlob}`,
                `**/__tests__/**/${sourceGlob}`,
                `**/?(*.)+(spec|test)${sourceGlob.slice(1)}`,
            ],
        },
    ],
};
module.exports = config;
