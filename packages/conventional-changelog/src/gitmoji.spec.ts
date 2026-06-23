import { describe, expect, it } from 'vitest';
import { CommitConventionalType } from './data.js';
import { Emoji, GitmojiCode } from './gitmoji.js';

describe('Emoji', () => {
  describe('.isText', () => {
    it.each([
      [':sparkles:', true],
      [':sparkles :', false],
      ['💚', false],
      ['⚡️', false],
      ['any text', false],
    ])('should return true only for %s', (input, expected) => {
      expect(Emoji.isText(input)).toBe(expected);
    });
  });
  describe('.isUnicode', () => {
    it.each([
      [':sparkles:', false],
      [':sparkles :', false],
      ['💚', true],
      ['⚡️', true],
      ['any text', false],
    ])('should return true only for %s', (input, expected) => {
      expect(Emoji.isUnicode(input)).toBe(expected);
    });
  });
});
describe('GitmojiCode', () => {
  describe('isValid', () => {
    it.each([
      ['✨', true],
      ['⬇️', true],
      ['⏪️', true],
    ] as Array<[GitmojiCode, boolean]>)('should return correct values for %s', (emoji, expected) => {
      expect(GitmojiCode.isValid(emoji)).toBe(expected);
    });
  });
  describe('toConventionalCommitType', () => {
    it.each([
      ['✨', CommitConventionalType.Feat],
      [':sparkles:', CommitConventionalType.Feat],
    ] as [GitmojiCode, CommitConventionalType][])('should return correct values for %s', (gitmoji, expected) => {
      expect(GitmojiCode.toConventionalCommitType(gitmoji)).toBe(expected);
    });
  });
});
