import type { Commit as CommitBase } from 'conventional-commits-parser';
import { parserOpts } from './parser-opts';

export type Commit = CommitBase;

export const recommendedBumpOpts = {
  parserOpts,
  whatBump: (commits: ReadonlyArray<Commit>) => {
    let level = 2;
    let breakings = 0;
    let features = 0;

    for (const commit of commits) {
      if (commit.notes.length > 0) {
        breakings += commit.notes.length;
        level = 0;
      } else if (commit.type === 'feat') {
        features += 1;
        if (level === 2) {
          level = 1;
        }
      }
    }

    return {
      level,
      reason:
        breakings === 1
          ? `There is ${breakings} BREAKING CHANGE and ${features} features`
          : `There are ${breakings} BREAKING CHANGES and ${features} features`,
    };
  },
};
