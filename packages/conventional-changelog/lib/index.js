"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_opts_1 = require("./parser-opts");
const recommended_bump_opts_1 = require("./recommended-bump-opts");
const writer_opts_1 = require("./writer-opts");
exports.default = {
    parserOpts: parser_opts_1.parserOpts,
    writerOpts: writer_opts_1.writerOpts,
    recommendedBumpOpts: recommended_bump_opts_1.recommendedBumpOpts,
};
