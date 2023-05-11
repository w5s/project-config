"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendedBumpOpts = void 0;
const parser_opts_js_1 = require("./parser-opts.js");
const data_js_1 = require("./data.js");
const gitmoji_js_1 = require("./gitmoji.js");
function toConventionalCommitType(text) {
    return gitmoji_js_1.GitmojiCode.isValid(text)
        ? gitmoji_js_1.GitmojiCode.toConventionalCommitType(text)
        : data_js_1.CommitConventionalType.hasInstance(text)
            ? text
            : undefined;
}
exports.recommendedBumpOpts = {
    parserOpts: parser_opts_js_1.parserOpts,
    whatBump: (commits) => {
        let level = 2;
        let breakings = 0;
        let features = 0;
        for (const { type, notes } of commits) {
            const conventionalType = type == null ? type : toConventionalCommitType(type);
            if (notes.length > 0) {
                breakings += notes.length;
                level = 0;
            }
            else if (conventionalType === data_js_1.CommitConventionalType.Feat) {
                features += 1;
                if (level === 2) {
                    level = 1;
                }
            }
        }
        return {
            level,
            reason: breakings === 1
                ? `There is ${breakings} BREAKING CHANGE and ${features} features`
                : `There are ${breakings} BREAKING CHANGES and ${features} features`,
        };
    },
};
