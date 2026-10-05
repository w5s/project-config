import { file, type FileOptions, fileSync } from './file.js';
import { resolveCommentStyle, type ResolvedCommentStyle } from './internal/resolveCommentStyle.js';

export type BlockCommentStyle = '#' | '/*' | '//' | '<!--' | 'auto';

export interface BlockMarkerOptions {
  /**
   * Comment opener used for the marker lines: `'auto'` (from file name),
   * `'#'`, `'//'`, slash-star, or `'<!--'`.
   *
   * @default 'auto'
   */
  commentStyle?: BlockCommentStyle;

  /**
   * Identity after `BEGIN:` / `END:`, so multiple blocks in one file do not collide.
   *
   * @default 'managed-block'
   */
  topic?: string;
}

export interface BlockOptions {
  /**
   * Block content to insert
   */
  block: string;

  /**
   * Insert position
   */
  insertPosition?: ['after', 'EndOfFile' | RegExp] | ['before', 'BeginningOfFile' | RegExp];

  /**
   * Marker configuration, or a function that returns the full marker line.
   *
   * @default `{ commentStyle: 'auto', topic: 'managed-block' }`
   */
  marker?: ((mark: 'Begin' | 'End') => string) | BlockMarkerOptions;

  /**
   * File path
   */
  path: string;

  /**
   * Block target state
   */
  state?: 'absent' | 'present';
}

const EOF = 'EndOfFile';
const BOF = 'BeginningOfFile';
const DEFAULT_TOPIC = 'managed-block';

const insertAt = (str: string, index: number, toInsert: string) => str.slice(0, index) + toInsert + str.slice(index);
const matchLast = (string: string, regexp: RegExp) => {
  const matcher = new RegExp(regexp.source, `${regexp.flags}g`);
  let firstIndex = -1;
  let lastIndex = -1;
  let matches;

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

function formatMarker(style: ResolvedCommentStyle, mark: 'Begin' | 'End', topic: string): string {
  const inner = `${mark.toUpperCase()}:${topic}`;
  switch (style) {
    case '#': {
      return `# ${inner}`;
    }
    case '/*': {
      return `/* ${inner} */`;
    }
    case '//': {
      return `// ${inner}`;
    }
    case '<!--': {
      return `<!-- ${inner} -->`;
    }
    default: {
      throw new Error(`Unsupported comment style ${String(style)}`);
    }
  }
}

function toFileOptions(options: BlockOptions): FileOptions {
  const { block: blockName, insertPosition = ['after', EOF], marker, path, state = 'present' } = options;

  const EOL = '\n';
  const markerFn = toMarkerFn(marker, path);
  const beginBlock = markerFn('Begin');
  const endBlock = markerFn('End');

  /**
   * @param content
   */
  function findBlock(content: string) {
    const startIndex = content.indexOf(beginBlock);
    const endIndex = content.indexOf(endBlock) + endBlock.length;

    return {
      endIndex,
      exists: startIndex !== -1 && endIndex >= 0,
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
        if (positionAnchor !== EOF) {
          const { lastIndex } = matchLast(fullContent, positionAnchor);
          if (lastIndex >= 0) {
            return insertAt(fullContent, lastIndex, EOL + replaceBlock);
          }
        }

        // end of file
        return fullContent + EOL + replaceBlock;
      }
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

function toMarkerFn(marker: BlockOptions['marker'], path: string): (mark: 'Begin' | 'End') => string {
  if (typeof marker === 'function') {
    return marker;
  }

  const commentStyle = marker?.commentStyle ?? 'auto';
  const topic = marker?.topic ?? DEFAULT_TOPIC;
  const resolvedStyle = commentStyle === 'auto' ? resolveCommentStyle(path) : commentStyle;

  return (mark) => formatMarker(resolvedStyle, mark, topic);
}
