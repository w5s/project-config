import type { Options } from 'conventional-commits-parser';
import { Emoji } from './gitmoji';

export interface ParserOptions extends Options {}

export const parserOpts: ParserOptions = {
  headerPattern: new RegExp(`^(${Emoji.reEmojiText.source}|${Emoji.reEmojiUnicode.source})? (?:\\((.*)\\):? )?(.*)$`),
  headerCorrespondence: ['type', 'scope', 'subject'],
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
};
