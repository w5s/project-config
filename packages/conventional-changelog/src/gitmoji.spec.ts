import { describe, expect, it } from 'vitest';
import { CommitConventionalType } from './data.js';
import { GitmojiCode } from './gitmoji.js';

describe('GitmojiCode', () => {
  describe('toConventionalCommitType', () => {
    it.each([
      ['✨', CommitConventionalType.Feat],
      [':sparkles:', CommitConventionalType.Feat],
    ] as [GitmojiCode, CommitConventionalType][])('should return correct values for %s', (gitmoji, expected) => {
      expect(GitmojiCode.toConventionalCommitType(gitmoji)).toBe(expected);
    });
  });
});
