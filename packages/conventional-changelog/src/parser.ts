import type { ParserOptions as ParserOptionsDefault } from 'conventional-commits-parser';

export interface ParserOptions extends ParserOptionsDefault {}

export const createParserOpts = (): ParserOptions => ({
  headerPattern: new RegExp(
    // Type
    // eslint-disable-next-line unicorn/prefer-string-raw
    `^(?<type>\\S*)? ` +
    // Scope
    // eslint-disable-next-line unicorn/prefer-string-raw
    `(?:\\((?<scope>.*)\\):? )?` +
    // Subject
    `(?<subject>.*)$`,
    'u',
  ),
  headerCorrespondence: ['type', 'scope', 'subject'],
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
});
