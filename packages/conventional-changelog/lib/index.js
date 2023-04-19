"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-import-module-exports */
const git_raw_commit_opts_1 = require("./git-raw-commit-opts");
const parser_opts_1 = require("./parser-opts");
const recommended_bump_opts_1 = require("./recommended-bump-opts");
const writer_opts_1 = require("./writer-opts");
exports.default = {
    parserOpts: parser_opts_1.parserOpts,
    writerOpts: writer_opts_1.writerOpts,
    recommendedBumpOpts: recommended_bump_opts_1.recommendedBumpOpts,
    gitRawCommitOpts: git_raw_commit_opts_1.gitRawCommitOpts,
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
module.exports = exports.default;
