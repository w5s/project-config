"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gitmoji = void 0;
var emoji_regex_1 = __importDefault(require("emoji-regex"));
var gitmojis_1 = require("gitmojis");
var Gitmoji;
(function (Gitmoji) {
    Gitmoji.reEmoji = (0, emoji_regex_1.default)();
    var reGitmoji = new RegExp("^".concat(Gitmoji.reEmoji.source, "$"), Gitmoji.reEmoji.flags);
    var allGitmojiCodes = new Set(gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.code; }).concat(gitmojis_1.gitmojis.map(function (gitmoji) { return gitmoji.emoji; })));
    function isUnicode(anyValue) {
        return anyValue.match(reGitmoji) != null;
    }
    Gitmoji.isUnicode = isUnicode;
    function isEmoji(anyValue) {
        return anyValue.match(/^:(\w+):$/) != null;
    }
    Gitmoji.isEmoji = isEmoji;
    function isValid(anyValue) {
        return allGitmojiCodes.has(anyValue);
    }
    Gitmoji.isValid = isValid;
})(Gitmoji = exports.Gitmoji || (exports.Gitmoji = {}));
//# sourceMappingURL=gitmoji.js.map