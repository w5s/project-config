"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const transform_js_1 = require("./transform.js");
const basePath = (0, node_path_1.resolve)(__dirname, './templates');
const template = (0, node_fs_1.readFileSync)(`${basePath}/template.hbs`, 'utf8');
const header = (0, node_fs_1.readFileSync)(`${basePath}/header.hbs`, 'utf8');
const commit = (0, node_fs_1.readFileSync)(`${basePath}/commit.hbs`, 'utf8');
const footer = (0, node_fs_1.readFileSync)(`${basePath}/footer.hbs`, 'utf8');
const author = (0, node_fs_1.readFileSync)(`${basePath}/author.hbs`, 'utf8');
const writerOpts = {
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
