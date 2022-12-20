"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var transform_js_1 = require("./transform.js");
var basePath = (0, node_path_1.resolve)(__dirname, './templates');
var template = (0, node_fs_1.readFileSync)("".concat(basePath, "/template.hbs"), 'utf8');
var header = (0, node_fs_1.readFileSync)("".concat(basePath, "/header.hbs"), 'utf8');
var commit = (0, node_fs_1.readFileSync)("".concat(basePath, "/commit.hbs"), 'utf8');
var footer = (0, node_fs_1.readFileSync)("".concat(basePath, "/footer.hbs"), 'utf8');
var author = (0, node_fs_1.readFileSync)("".concat(basePath, "/author.hbs"), 'utf8');
var writerOpts = {
    transform: (0, transform_js_1.createTransform)({}),
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate: template,
    headerPartial: header,
    commitPartial: commit.replace(/{{gitUserInfo}}/g, author),
    footerPartial: footer,
};
exports.default = writerOpts;
//# sourceMappingURL=writer-opts.js.map