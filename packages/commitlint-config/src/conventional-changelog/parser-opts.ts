import type { ParserOptions } from '@commitlint/types';
import { Emoji } from './gitmoji';

const parserOpts: ParserOptions = {
  headerPattern: new RegExp(`^(:\\w*:|${Emoji.reEmojiUnicode.source}) (?:\\((.*)\\):? )?(.*)$`),
  headerCorrespondence: ['type', 'scope', 'subject'],
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
};
export default parserOpts;
