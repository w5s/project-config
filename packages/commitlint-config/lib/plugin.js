"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitmojiPlugin = exports.typeValidGitmoji = exports.typeGitmojiStyle = void 0;
var gitmoji_1 = require("./conventional-changelog/gitmoji");
var $if = function (when) {
    if (when === void 0) { when = 'always'; }
    return function (cond) {
        return when === 'always' ? cond : !cond;
    };
};
var typeGitmojiStyle = function (parsed, when, value) {
    if (when === void 0) { when = 'always'; }
    if (value === void 0) { value = 'unicode'; }
    var isUnicode = parsed.type != null && gitmoji_1.GitmojiCode.isUnicode(parsed.type);
    var isEmoji = parsed.type != null && gitmoji_1.GitmojiCode.isEmoji(parsed.type);
    return value === 'unicode'
        ? $if(when)(isUnicode)
            ? [true]
            : [false, "Type should ".concat(when, " be an unicode character")]
        : $if(when)(isEmoji)
            ? [true]
            : [false, "Type should ".concat(when, " be an valid :emoji:")];
};
exports.typeGitmojiStyle = typeGitmojiStyle;
var typeValidGitmoji = function (parsed, when) {
    if (when === void 0) { when = 'always'; }
    var isValidGitmoji = parsed.type != null && gitmoji_1.GitmojiCode.isValid(parsed.type);
    return $if(when)(isValidGitmoji)
        ? [true]
        : [false, "Type should ".concat(when, " be an valid gitmoji (see https://gitmoji.dev)")];
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
//# sourceMappingURL=plugin.js.map