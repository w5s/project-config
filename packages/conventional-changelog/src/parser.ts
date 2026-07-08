export interface ParserOptions {
  headerCorrespondence?: Array<string> | null | string;
  headerPattern?: null | RegExp | string;
  noteKeywords?: Array<string> | null | string;
  revertCorrespondence?: Array<string> | null | string;
  revertPattern?: null | RegExp | string;
}

export const createParserOpts = (): ParserOptions => ({
  headerCorrespondence: ['type', 'scope', 'subject'],
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
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
  // eslint-disable-next-line e18e/prefer-static-regex
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
});
