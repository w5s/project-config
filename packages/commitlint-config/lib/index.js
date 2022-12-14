"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var types_1 = require("@commitlint/types");
var index_js_1 = __importDefault(require("./conventional-changelog/index.js"));
var plugin_js_1 = require("./plugin.js");
var Error = types_1.RuleConfigSeverity.Error, Warning = types_1.RuleConfigSeverity.Warning, Disabled = types_1.RuleConfigSeverity.Disabled;
var parserPreset = {
    parserOpts: index_js_1.default.parserOpts,
};
var rules = {
    'body-leading-blank': [Warning, 'always'],
    'body-max-line-length': [Error, 'always', 100],
    'footer-leading-blank': [Warning, 'always'],
    'footer-max-line-length': [Error, 'always', 100],
    'header-max-length': [Error, 'always', 72],
    'scope-case': [Error, 'always', 'lower-case'],
    'subject-case': [Error, 'always', ['sentence-case']],
    'subject-empty': [Error, 'never'],
    'subject-exclamation-mark': [Error, 'never'],
    'subject-full-stop': [Error, 'never', '.'],
    'type-case': [Error, 'always', 'lower-case'],
    'type-empty': [Error, 'never'],
    'type-enum': [Disabled],
    'type-gitmoji-style': [Error, 'always', 'unicode'],
    'type-valid-gitmoji': [Error, 'always'],
};
var config = {
    parserPreset: parserPreset,
    rules: rules,
    plugins: [plugin_js_1.gitmojiPlugin],
};
exports.default = config;
//# sourceMappingURL=index.js.map