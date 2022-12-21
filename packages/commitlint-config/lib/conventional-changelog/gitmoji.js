"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitmojiCode = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const emoji_regex_1 = __importDefault(require("emoji-regex"));
const gitmojis_1 = require("gitmojis");
var GitmojiCode;
(function (GitmojiCode) {
    GitmojiCode.reEmoji = (0, emoji_regex_1.default)();
    const reGitmoji = new RegExp(`^${GitmojiCode.reEmoji.source}$`, GitmojiCode.reEmoji.flags);
    const allGitmojiCodes = new Set(gitmojis_1.gitmojis.map((gitmoji) => gitmoji.code).concat(gitmojis_1.gitmojis.map((gitmoji) => gitmoji.emoji)));
    const index = {
        // code: createIndex(gitmojis, 'code'),
        emoji: createIndex(gitmojis_1.gitmojis, 'emoji'),
    };
    function createIndex(list, key) {
        return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
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
    const defaultType = 'chore';
    const conversionMap = (() => {
        const data = {
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
        const entries = Array.from(
        // @ts-ignore
        Object.entries(data));
        return new Map(entries.reduce((acc, [commitType, gitmojiUnicodes]) => acc
            .concat(gitmojiUnicodes.map((gitmojiUnicode) => [gitmojiUnicode, commitType]))
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .concat(gitmojiUnicodes.map((gitmojiUnicode) => [index.emoji.get(gitmojiUnicode)?.code, commitType])), []));
    })();
    function toConventionalCommitType(gitmoji) {
        return conversionMap.get(gitmoji) ?? defaultType;
    }
    GitmojiCode.toConventionalCommitType = toConventionalCommitType;
})(GitmojiCode = exports.GitmojiCode || (exports.GitmojiCode = {}));
//# sourceMappingURL=gitmoji.js.map