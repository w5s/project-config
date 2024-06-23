"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = json;
exports.jsonSync = jsonSync;
const file_js_1 = require("./file.js");
function toFileOption({ update, ...otherOptions }) {
    return {
        ...otherOptions,
        update: update == null
            ? update
            : (content) => {
                const jsonValue = content === '' ? undefined : JSON.parse(content);
                return JSON.stringify(update(jsonValue));
            },
    };
}
/**
 * Ensure file is present/absent asynchronously with content value initialized or modified with `update`
 *
 * @param options
 */
async function json(options) {
    return (0, file_js_1.file)(toFileOption(options));
}
/**
 * Ensure file is present/absent synchronously with content value initialized or modified with `update`
 *
 * @param options
 */
function jsonSync(options) {
    return (0, file_js_1.fileSync)(toFileOption(options));
}
//# sourceMappingURL=json.js.map