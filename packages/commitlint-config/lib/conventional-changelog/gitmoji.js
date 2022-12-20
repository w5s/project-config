"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitmojiCode = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
var emoji_regex_1 = __importDefault(require("emoji-regex"));
var gitmojis_1 = require("gitmojis");
var GitmojiCode;
(function (GitmojiCode) {
    GitmojiCode.reEmoji = (0, emoji_regex_1.default)();
    var reGitmoji = new RegExp("^".concat(GitmojiCode.reEmoji.source, "$"), GitmojiCode.reEmoji.flags);
    var allGitmojiCodes = new Set(gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.code; }).concat(gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.emoji; })));
    var index = {
        // code: createIndex(gitmojis, 'code'),
        emoji: createIndex(gitmojis_1.gitmojis, 'emoji'),
    };
    function createIndex(list, key) {
        return new Map(list.map(function (gitmoji) { return [gitmoji[key], gitmoji]; }));
    }
    function isUnicode(anyValue) {
        return anyValue.match(reGitmoji) != null;
    }
    GitmojiCode.isUnicode = isUnicode;
    function isEmoji(anyValue) {
        return anyValue.match(/^:(\w+):$/) != null;
    }
    GitmojiCode.isEmoji = isEmoji;
    function isValid(anyValue) {
        return allGitmojiCodes.has(anyValue);
    }
    GitmojiCode.isValid = isValid;
    var defaultType = 'chore';
    var conversionMap = (function () {
        var data = {
            feat: ['✨', '♿️', '🚸'],
            fix: ['🐛'],
            docs: ['📝'],
            style: ['🎨', '🚨'],
            refactor: ['♻️', '🏗️'],
            test: ['✅'],
            perf: ['⚡️'],
            revert: ['⏪️'],
            ci: ['👷', '💚'],
            wip: ['🚧'],
            build: [],
            chore: [],
        };
        var entries = Array.from(
        // @ts-ignore
        Object.entries(data));
        return new Map(entries.reduce(function (acc, _a) {
            var commitType = _a[0], gitmojiUnicodes = _a[1];
            return acc
                .concat(gitmojiUnicodes.map(function (gitmojiUnicode) { return [gitmojiUnicode, commitType]; }))
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .concat(gitmojiUnicodes.map(function (gitmojiUnicode) { var _a; return [(_a = index.emoji.get(gitmojiUnicode)) === null || _a === void 0 ? void 0 : _a.code, commitType]; }));
        }, []));
    })();
    function toConventionalCommitType(gitmoji) {
        var _a;
        return (_a = conversionMap.get(gitmoji)) !== null && _a !== void 0 ? _a : defaultType;
    }
    GitmojiCode.toConventionalCommitType = toConventionalCommitType;
})(GitmojiCode = exports.GitmojiCode || (exports.GitmojiCode = {}));
//# sourceMappingURL=gitmoji.js.map