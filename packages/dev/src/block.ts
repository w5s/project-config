import { type FileOptions, file, fileSync } from './file.js';

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
  insertPosition?: ['before', 'BeginningOfFile' | RegExp] | ['after', 'EndOfFile' | RegExp];
  /**
   * Block target state
   */
  state?: 'present' | 'absent';
}

const EOF = 'EndOfFile';
const BOF = 'BeginningOfFile';
const insertAt = (str: string, index: number, toInsert: string) => str.slice(0, index) + toInsert + str.slice(index);
const matchLast = (string: string, regexp: RegExp) => {
  const matcher = new RegExp(regexp.source, `${regexp.flags}g`);
  let firstIndex = -1;
  let lastIndex = -1;
  let matches;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    matches = matcher.exec(string);
    if (matches == null) {
      break;
    }
    firstIndex = matches.index;
    lastIndex = matcher.lastIndex;
  }
  return { firstIndex, lastIndex };
};

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
      case 'before': {
        if (positionAnchor !== BOF) {
          const { firstIndex } = matchLast(fullContent, positionAnchor);
          if (firstIndex >= 0) {
            return insertAt(fullContent, firstIndex, replaceBlock + EOL);
          }
        }

        // Beginning of file
        return replaceBlock + EOL + fullContent;
      }
      case 'after': {
        // insert
        if (positionAnchor !== EOF) {
          const { lastIndex } = matchLast(fullContent, positionAnchor);
          if (lastIndex >= 0) {
            return insertAt(fullContent, lastIndex, EOL + replaceBlock);
          }
        }

        // end of file
        return fullContent + EOL + replaceBlock;
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
