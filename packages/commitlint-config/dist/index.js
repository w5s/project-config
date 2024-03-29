"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@commitlint/types");
const conventional_changelog_1 = __importDefault(require("@w5s/conventional-changelog"));
const plugin_js_1 = require("./plugin.js");
const { Error, Warning, Disabled } = types_1.RuleConfigSeverity;
const parserPreset = {
    parserOpts: conventional_changelog_1.default.parserOpts,
};
const rules = {
    'body-leading-blank': [Warning, 'always'],
    'body-max-line-length': [Error, 'always', 100],
    'footer-leading-blank': [Warning, 'always'],
    'footer-max-line-length': [Error, 'always', 100],
    'header-max-length': [Error, 'always', 100],
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
const config = {
    parserPreset,
    rules,
    plugins: [plugin_js_1.gitmojiPlugin],
};
exports.default = config;
