"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendedBumpOpts = void 0;
const parser_opts_js_1 = require("./parser-opts.js");
const data_js_1 = require("./data.js");
exports.recommendedBumpOpts = {
    parserOpts: parser_opts_js_1.parserOpts,
    whatBump: (commits) => {
        let level = 2;
        let breakings = 0;
        let features = 0;
        for (const commit of commits) {
            if (commit.notes.length > 0) {
                breakings += commit.notes.length;
                level = 0;
            }
            else if (commit.type === data_js_1.CommitConventionalType.Feat) {
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
