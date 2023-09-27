"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockSync = exports.block = void 0;
const file_js_1 = require("./file.js");
const EOF = 'EndOfFile';
const BOF = 'BeginningOfFile';
function toFileOptions(options) {
    const { marker = (mark) => `# ${mark.toUpperCase()} MANAGED BLOCK`, path, block: blockName, insertPosition = ['after', EOF], state = 'present', } = options;
    const EOL = '\n';
    const beginBlock = marker('Begin');
    const endBlock = marker('End');
    /**
     * @param content
     */
    function findBlock(content) {
        const startIndex = content.indexOf(beginBlock);
        const endIndex = content.indexOf(endBlock) + endBlock.length;
        return {
            endIndex,
            exists: startIndex >= 0 && endIndex >= 0,
            startIndex,
        };
    }
    function apply(fullContent, blockContent) {
        const found = findBlock(fullContent);
        const remove = state === 'absent';
        const replaceBlock = remove ? '' : beginBlock + EOL + blockContent + EOL + endBlock;
        const [positionDirection, positionAnchor] = insertPosition;
        if (found.exists) {
            return fullContent.slice(0, found.startIndex) + replaceBlock + fullContent.slice(found.endIndex);
        }
        if (remove) {
            return fullContent;
        }
        switch (positionDirection) {
            case 'after': {
                // insert
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (positionAnchor === EOF) {
                    return fullContent + EOL + replaceBlock;
                }
                return fullContent;
            }
            case 'before': {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (positionAnchor === BOF) {
                    return replaceBlock + EOL + fullContent;
                }
                return fullContent;
            }
            default: {
                throw new Error(`Unsupported position ${String(positionDirection)}`);
            }
        }
    }
    return {
        path,
        state: 'present',
        update: (sourceContent) => apply(sourceContent, blockName),
    };
}
/**
 * Replace asynchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
function block(options) {
    return (0, file_js_1.file)(toFileOptions(options));
}
exports.block = block;
/**
 * Replace synchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
function blockSync(options) {
    return (0, file_js_1.fileSync)(toFileOptions(options));
}
exports.blockSync = blockSync;
//# sourceMappingURL=block.js.map