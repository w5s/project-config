"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSync = exports.file = void 0;
const promises_1 = require("node:fs/promises");
const node_fs_1 = require("node:fs");
async function exists(path) {
    try {
        await (0, promises_1.access)(path, node_fs_1.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
function existsSync(path) {
    try {
        (0, node_fs_1.accessSync)(path, node_fs_1.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * await file({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
async function file(options) {
    const { path, state, update, encoding = 'utf8' } = options;
    if (state === 'present') {
        const isPresent = await exists(path);
        const previousContent = isPresent ? await (0, promises_1.readFile)(path, encoding) : '';
        const newContent = update == null ? '' : update(previousContent);
        if (newContent != null) {
            await (0, promises_1.writeFile)(path, newContent, encoding);
        }
    }
    else {
        await (0, promises_1.rm)(path, { force: true });
    }
}
exports.file = file;
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * fileSync({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
function fileSync(options) {
    const { path, state, update, encoding = 'utf8' } = options;
    if (state === 'present') {
        const isPresent = existsSync(path);
        const previousContent = isPresent ? (0, node_fs_1.readFileSync)(path, encoding) : '';
        const newContent = update == null ? '' : update(previousContent);
        if (newContent != null) {
            (0, node_fs_1.writeFileSync)(path, newContent, encoding);
        }
    }
    else {
        (0, node_fs_1.rmSync)(path, { force: true });
    }
}
exports.fileSync = fileSync;
//# sourceMappingURL=file.js.map