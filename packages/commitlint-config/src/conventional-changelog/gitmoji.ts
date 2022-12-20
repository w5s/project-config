/* eslint-disable @typescript-eslint/naming-convention */
import emojiRegexp from 'emoji-regex';
import { Gitmoji, gitmojis, GitmojiUnicode, GitmojiEmoji } from 'gitmojis';
import type { CommitConventionalType } from './data';

export type GitmojiCode = GitmojiCode.Unicode | GitmojiCode.Emoji;
export namespace GitmojiCode {
  export type Unicode = GitmojiUnicode;
  export type Emoji = GitmojiEmoji;

  export const reEmoji = emojiRegexp();

  const reGitmoji = new RegExp(`^${reEmoji.source}$`, reEmoji.flags);
  const allGitmojiCodes = new Set(
    gitmojis.map((gitmoji) => gitmoji.code as GitmojiCode).concat(gitmojis.map((gitmoji) => gitmoji.emoji))
  );
  const index = {
    // code: createIndex(gitmojis, 'code'),
    emoji: createIndex(gitmojis, 'emoji'),
  };

  function createIndex<K extends keyof Gitmoji>(list: readonly Gitmoji[], key: K): ReadonlyMap<Gitmoji[K], Gitmoji> {
    return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
  }

  export function isUnicode(anyValue: string): anyValue is Unicode {
    return anyValue.match(reGitmoji) != null;
  }

  export function isEmoji(anyValue: string): anyValue is Emoji {
    return anyValue.match(/^:(\w+):$/) != null;
  }

  export function isValid(anyValue: string): anyValue is GitmojiCode {
    return allGitmojiCodes.has(anyValue as GitmojiCode);
  }

  const defaultType = 'chore';
  const conversionMap: ReadonlyMap<GitmojiCode, CommitConventionalType> = (() => {
    const data: Record<CommitConventionalType, GitmojiCode.Unicode[]> = {
      feat: ['✨', '♿️', '🚸'] as GitmojiCode.Unicode[],
      fix: ['🐛'] as GitmojiCode.Unicode[],
      docs: ['📝'] as GitmojiCode.Unicode[],
      style: ['🎨', '🚨'] as GitmojiCode.Unicode[],
      refactor: ['♻️', '🏗️'] as GitmojiCode.Unicode[],
      test: ['✅'] as GitmojiCode.Unicode[],
      perf: ['⚡️'] as GitmojiCode.Unicode[],
      revert: ['⏪️'] as GitmojiCode.Unicode[],
      ci: ['👷', '💚'] as GitmojiCode.Unicode[],
      wip: ['🚧'] as GitmojiCode.Unicode[],
      build: [] as GitmojiCode.Unicode[],
      chore: [] as GitmojiCode.Unicode[],
    };

    const entries = Array.from<[CommitConventionalType, GitmojiCode.Unicode[]]>(
      // @ts-ignore
      Object.entries(data)
    );
    return new Map(
      entries.reduce<Array<[GitmojiCode, CommitConventionalType]>>(
        (acc, [commitType, gitmojiUnicodes]) =>
          acc
            .concat(gitmojiUnicodes.map((gitmojiUnicode) => [gitmojiUnicode, commitType]))
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .concat(gitmojiUnicodes.map((gitmojiUnicode) => [index.emoji.get(gitmojiUnicode)?.code!, commitType])),
        []
      )
    );
  })();

  export function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType {
    return conversionMap.get(gitmoji) ?? defaultType;
  }
}
