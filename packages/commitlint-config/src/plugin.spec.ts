/* eslint-disable ts/consistent-type-assertions */
import { describe, expect, it } from 'vitest';

import { typeGitmojiStyle, typeValidGitmoji } from './plugin.js';

type ParsedCommit = Parameters<typeof typeGitmojiStyle>[0];

const generateCommit = (properties: Partial<ParsedCommit>): ParsedCommit => ({
  body: null,
  footer: null,
  header: '',
  mentions: [],
  merge: null,
  notes: [],
  raw: '',
  references: [],
  revert: null,
  scope: null,
  subject: null,
  type: null,
  ...(properties as any),
} as ParsedCommit);
const anyEmoji = ':bug:';
const anyGitmojiUnicode = '🐛';

describe('typeGitmojiStyle', () => {
  it('should return correct values when value="emoji"', () => {
    expect(typeGitmojiStyle(generateCommit({ type: anyEmoji }), undefined, 'emoji')).toEqual([true]);
    expect(typeGitmojiStyle(generateCommit({ type: anyGitmojiUnicode }), undefined, 'emoji')).toEqual([
      false,
      'Type should always be an valid :emoji:',
    ]);
  });
  it('should return correct values when value="unicode"', () => {
    expect(typeGitmojiStyle(generateCommit({ type: anyEmoji }), undefined, 'unicode')).toEqual([
      false,
      'Type should always be an unicode character',
    ]);

    expect(typeGitmojiStyle(generateCommit({ type: anyGitmojiUnicode }), undefined, 'unicode')).toEqual([true]);
    // expect(typeGitmojiStyle(generateCommit({ type: ` ${anyGitmojiUnicode}` }), undefined, 'unicode')).toEqual([
    //   false,
    //   'Type should always be an unicode character',
    // ]);
  });
});
describe('typeValidGitmoji', () => {
  it('should return correct values', () => {
    expect(typeValidGitmoji(generateCommit({ type: anyEmoji }), undefined)).toEqual([true]);
    expect(typeValidGitmoji(generateCommit({ type: anyGitmojiUnicode }), undefined)).toEqual([true]);
    expect(typeValidGitmoji(generateCommit({ type: 'blah' }), undefined)).toEqual([
      false,
      'Type should always be an valid gitmoji (see https://gitmoji.dev)',
    ]);
  });
});
