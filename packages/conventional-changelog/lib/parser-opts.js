"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parserOpts = void 0;
const gitmoji_1 = require("./gitmoji");
exports.parserOpts = {
    headerPattern: new RegExp(`^(:\\w*:|${gitmoji_1.Emoji.reEmojiUnicode.source}) (?:\\((.*)\\):? )?(.*)$`),
    headerCorrespondence: ['type', 'scope', 'subject'],
    revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
    revertCorrespondence: [`header`, `hash`],
};
