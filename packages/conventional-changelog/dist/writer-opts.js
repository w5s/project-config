"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writerOpts = exports.defaultDisplayTypes = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const transform_js_1 = require("./transform.js");
const data_js_1 = require("./data.js");
const basePath = (0, node_path_1.resolve)((0, node_path_1.dirname)(__dirname), './template');
const template = (0, node_fs_1.readFileSync)(`${basePath}/template.hbs`, 'utf8');
const header = (0, node_fs_1.readFileSync)(`${basePath}/header.hbs`, 'utf8');
const commit = (0, node_fs_1.readFileSync)(`${basePath}/commit.hbs`, 'utf8');
const footer = (0, node_fs_1.readFileSync)(`${basePath}/footer.hbs`, 'utf8');
const author = (0, node_fs_1.readFileSync)(`${basePath}/author.hbs`, 'utf8');
exports.defaultDisplayTypes = data_js_1.CommitConventionalType.findWhere((_) => _.changelog);
exports.writerOpts = {
    transform: (0, transform_js_1.createTransform)({
        displayTypes: exports.defaultDisplayTypes,
    }),
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate: template,
    headerPartial: header,
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    commitPartial: commit.replace(/{{gitUserInfo}}/g, author),
    footerPartial: footer,
};
