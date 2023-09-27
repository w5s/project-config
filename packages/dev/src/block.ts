import { FileOptions, file, fileSync } from './file.js';

export interface BlockOptions {
  /**
   * The marker builder function that will take either `markerBegin` or `markerEnd`
   *
   * @default '# ${mark} MANAGED BLOCK'
   */
  marker?: (mark: 'Begin' | 'End') => string;
  /**
   * File path
   */
  path: string;
  /**
   * Block content to insert
   */
  block: string;
  /**
   * Insert position
   */
  insertPosition?: ['before', 'BeginningOfFile'] | ['after', 'EndOfFile'];
  /**
   * Block target state
   */
  state?: 'present' | 'absent';
}

const EOF = 'EndOfFile';
const BOF = 'BeginningOfFile';

function toFileOptions(options: BlockOptions): FileOptions {
  const {
    marker = (mark) => `# ${mark.toUpperCase()} MANAGED BLOCK`,
    path,
    block: blockName,
    insertPosition = ['after', EOF],
    state = 'present',
  } = options;

  const EOL = '\n';
  const beginBlock = marker('Begin');
  const endBlock = marker('End');

  /**
   * @param content
   */
  function findBlock(content: string) {
    const startIndex = content.indexOf(beginBlock);
    const endIndex = content.indexOf(endBlock) + endBlock.length;

    return {
      endIndex,
      exists: startIndex >= 0 && endIndex >= 0,
      startIndex,
    };
  }

  function apply(fullContent: string, blockContent: string) {
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
export function block(options: BlockOptions) {
  return file(toFileOptions(options));
}

/**
 * Replace synchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
export function blockSync(options: BlockOptions) {
  return fileSync(toFileOptions(options));
}
