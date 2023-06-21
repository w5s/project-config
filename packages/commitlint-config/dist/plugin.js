"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitmojiPlugin = exports.typeValidGitmoji = exports.typeGitmojiStyle = void 0;
const gitmoji_js_1 = require("@w5s/conventional-changelog/dist/gitmoji.js");
const $if = (when = 'always') => (cond) => when === 'always' ? cond : !cond;
const typeGitmojiStyle = (parsed, when = 'always', value = 'unicode') => {
    const isUnicode = parsed.type != null && gitmoji_js_1.Emoji.isUnicode(parsed.type);
    const isEmoji = parsed.type != null && gitmoji_js_1.Emoji.isText(parsed.type);
    return value === 'unicode'
        ? $if(when)(isUnicode)
            ? [true]
            : [false, `Type should ${when} be an unicode character`]
        : $if(when)(isEmoji)
            ? [true]
            : [false, `Type should ${when} be an valid :emoji:`];
};
exports.typeGitmojiStyle = typeGitmojiStyle;
const typeValidGitmoji = (parsed, when = 'always') => {
    const isValidGitmoji = parsed.type != null && gitmoji_js_1.GitmojiCode.isValid(parsed.type);
    return $if(when)(isValidGitmoji)
        ? [true]
        : [false, `Type should ${when} be an valid gitmoji (see https://gitmoji.dev)`];
};
exports.typeValidGitmoji = typeValidGitmoji;
/**
 * Gitmoji plugins
 */
exports.gitmojiPlugin = {
    rules: {
        'type-gitmoji-style': exports.typeGitmojiStyle,
        'type-valid-gitmoji': exports.typeValidGitmoji,
    },
};
