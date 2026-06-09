export interface ParserOptions {
  headerPattern?: RegExp | string | null;
  headerCorrespondence?: string[] | string | null;
  revertPattern?: RegExp | string | null;
  revertCorrespondence?: string[] | string | null;
  noteKeywords?: string[] | string | null;
}

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
  // eslint-disable-next-line e18e/prefer-static-regex
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`],
});
