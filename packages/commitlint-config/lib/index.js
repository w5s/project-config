"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var types_1 = require("@commitlint/types");
var gitmojis_1 = require("gitmojis");
var emoji_regex_1 = __importDefault(require("emoji-regex"));
var allGitmojiCodes = __spreadArray(__spreadArray([], gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.code; }), true), gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.emoji; }), true);
var Error = types_1.RuleConfigSeverity.Error, Warning = types_1.RuleConfigSeverity.Warning;
var parserPreset = {
    parserOpts: {
        // eslint-disable-next-line unicorn/no-unsafe-regex, prefer-regex-literals
        headerPattern: new RegExp("^(:\\w*:|".concat(String((0, emoji_regex_1.default)().source), ") (?:\\((.*)\\):? )?(.*)$")),
        headerCorrespondence: ['type', 'scope', 'subject'],
    },
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
    'type-enum': [Error, 'always', allGitmojiCodes],
};
var config = {
    parserPreset: parserPreset,
    rules: rules,
};
exports.default = config;
//# sourceMappingURL=index.js.map