"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitmojiCode = exports.Emoji = void 0;
const emoji_regex_1 = __importDefault(require("emoji-regex"));
const gitmojis_1 = require("gitmojis");
var Emoji;
(function (Emoji) {
    Emoji.reEmojiUnicode = (0, emoji_regex_1.default)();
    Emoji.reEmojiText = /:\w*:/;
    const reMatchOnly = (input) => new RegExp(`^${input.source}$`, '');
    const _reEmojiUnicode = reMatchOnly(Emoji.reEmojiUnicode);
    const _reEmojiText = reMatchOnly(Emoji.reEmojiText);
    function isUnicode(anyValue) {
        return _reEmojiUnicode.test(anyValue);
    }
    Emoji.isUnicode = isUnicode;
    function isText(anyValue) {
        return _reEmojiText.test(anyValue);
    }
    Emoji.isText = isText;
    function hasInstance(anyValue) {
        return isText(anyValue) || isUnicode(anyValue);
    }
    Emoji.hasInstance = hasInstance;
})(Emoji || (exports.Emoji = Emoji = {}));
var GitmojiCode;
(function (GitmojiCode) {
    // export const reEmoji = emojiRegexp();
    const allGitmojiCodes = new Set(gitmojis_1.gitmojis
        .map((gitmoji) => gitmoji.code)
        .concat(gitmojis_1.gitmojis.map((gitmoji) => gitmoji.emoji)));
    const index = {
        // code: createIndex(gitmojis, 'code'),
        emoji: createIndex(gitmojis_1.gitmojis, 'emoji'),
    };
    function createIndex(list, key) {
        return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
    }
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
            test: ['✅', '🧪'],
            perf: ['⚡️'],
            revert: ['⏪️'],
            ci: ['👷', '💚'],
            wip: ['🚧'],
            build: [],
            chore: ['🔧'],
        };
        const entries = Array.from(
        // @ts-ignore entries are not well typed
        Object.entries(data));
        return new Map(entries.reduce((acc, [commitType, gitmojiUnicodeArray]) => acc
            .concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [gitmojiUnicode, commitType]))
            .concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
            index.emoji.get(gitmojiUnicode)?.code,
            commitType,
        ])), []));
    })();
    function toConventionalCommitType(gitmoji) {
        return conversionMap.get(gitmoji) ?? defaultType;
    }
    GitmojiCode.toConventionalCommitType = toConventionalCommitType;
})(GitmojiCode || (exports.GitmojiCode = GitmojiCode = {}));
