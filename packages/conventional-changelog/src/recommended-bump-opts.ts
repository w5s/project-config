import type { Commit as CommitBase } from 'conventional-commits-parser';
import { parserOpts } from './parser-opts.js';
import { CommitConventionalType } from './data.js';
import { GitmojiCode } from './gitmoji.js';

function toConventionalCommitType(text: string) {
  return GitmojiCode.isValid(text)
    ? GitmojiCode.toConventionalCommitType(text)
    : CommitConventionalType.hasInstance(text)
      ? text
      : undefined;
}

export type Commit = CommitBase;

export const recommendedBumpOpts = {
  parserOpts,
  whatBump: (commits: ReadonlyArray<Commit>) => {
    let level = 2;
    let breakings = 0;
    let features = 0;

    for (const { type, notes } of commits) {
      const conventionalType = type == null ? type : toConventionalCommitType(type);
      if (notes.length > 0) {
        breakings += notes.length;
        level = 0;
      } else if (conventionalType === CommitConventionalType.Feat) {
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
