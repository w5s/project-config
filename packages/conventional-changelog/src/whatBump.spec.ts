import { describe, expect, it } from 'vitest';
import { CommitConventionalType, type Commit } from './data.js';
import { whatBump } from './whatBump.js';

const generateCommit = (commit: Partial<Commit>): Commit => ({
  header: '',
  type: null,
  subject: null,
  scope: null,
  hash: null,
  notes: [],
  references: [],
  mentions: [],
  body: null,
  footer: null,
  merge: null,
  revert: null,
  ...commit,
});
describe(whatBump, () => {
  it('should return default values', () => {
    expect(whatBump([])).toEqual({
      level: 2,
      reason: 'There are 0 BREAKING CHANGES and 0 features',
    });
  });
  it('should handle feat type', () => {
    expect(
      whatBump([
        generateCommit({ type: CommitConventionalType.Feat }),
        generateCommit({ type: CommitConventionalType.Feat }),
      ]),
    ).toEqual({
      level: 1,
      reason: 'There are 0 BREAKING CHANGES and 2 features',
    });
  });
});
