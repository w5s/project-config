"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directory = directory;
exports.directorySync = directorySync;
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
async function exists(path) {
    try {
        await (0, promises_1.access)(path, promises_1.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directory({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
async function directory(options) {
    const { path, state } = options;
    const isPresent = await exists(path);
    if (state === 'present') {
        if (!isPresent) {
            await (0, promises_1.mkdir)(path, { recursive: true });
        }
    }
    else if (isPresent) {
        await (0, promises_1.rmdir)(path, { recursive: true });
    }
}
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directorySync({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
function directorySync(options) {
    const { path, state } = options;
    const isPresent = (0, node_fs_1.existsSync)(path);
    if (state === 'present') {
        if (!isPresent) {
            (0, node_fs_1.mkdirSync)(path, { recursive: true });
        }
    }
    else if (isPresent) {
        (0, node_fs_1.rmdirSync)(path, { recursive: true });
    }
}
//# sourceMappingURL=directory.js.map