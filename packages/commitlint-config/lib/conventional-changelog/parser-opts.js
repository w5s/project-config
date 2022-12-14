"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gitmoji_1 = require("../gitmoji");
var parserOpts = {
    headerPattern: new RegExp("^(:\\w*:|".concat(gitmoji_1.Gitmoji.reEmoji.source, ") (?:\\((.*)\\):? )?(.*)$")),
    headerCorrespondence: ['type', 'scope', 'subject'],
    revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
    revertCorrespondence: ["header", "hash"],
};
exports.default = parserOpts;
//# sourceMappingURL=parser-opts.js.map