import type { ParserOptions } from '@commitlint/types';
import { Gitmoji } from '../gitmoji';

const parserOpts: ParserOptions = {
  headerPattern: new RegExp(`^(:\\w*:|${Gitmoji.reEmoji.source}) (?:\\((.*)\\):? )?(.*)$`),
  headerCorrespondence: ['type', 'scope', 'subject'],
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
};
export default parserOpts;
