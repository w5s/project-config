import { describe, expect, it } from 'vitest';

import { type Commit, CommitConventionalType } from './data.js';
import { whatBump } from './whatBump.js';

const generateCommit = (commit: Partial<Commit>): Commit => ({
  body: null,
  footer: null,
  hash: null,
  header: '',
  mentions: [],
  merge: null,
  notes: [],
  references: [],
  revert: null,
  scope: null,
  subject: null,
  type: null,
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
