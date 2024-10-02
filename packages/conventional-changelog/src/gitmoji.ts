import emojiRegexp from 'emoji-regex';
import { type Gitmoji, gitmojis } from 'gitmojis';
import type { CommitConventionalType } from './data.js';

export type Emoji = Emoji.Unicode | Emoji.Text;
export namespace Emoji {
  export const reEmojiUnicode = emojiRegexp();

  export const reEmojiText = /:\w*:/;

  const reMatchOnly = (input: RegExp) => new RegExp(`^${input.source}$`, '');
  const _reEmojiUnicode = reMatchOnly(reEmojiUnicode);
  const _reEmojiText = reMatchOnly(reEmojiText);

  export type Unicode = string & { '@@EmojiStyle': 'unicode' };
  export type Text = string & { '@@EmojiStyle': 'text' };

  export function isUnicode(anyValue: string): anyValue is Unicode {
    return _reEmojiUnicode.test(anyValue);
  }

  export function isText(anyValue: string): anyValue is Text {
    return _reEmojiText.test(anyValue);
  }

  export function hasInstance(anyValue: string): anyValue is Emoji {
    return isText(anyValue) || isUnicode(anyValue);
  }
}

export type GitmojiCode = Emoji & { '@@Gitmoji': true };
export namespace GitmojiCode {
  export type Unicode = Emoji.Unicode & { '@@Gitmoji': true };
  export type Emoji = Emoji.Text & { '@@Gitmoji': true };

  // export const reEmoji = emojiRegexp();

  const allGitmojiCodes = new Set(
    gitmojis
      .map((gitmoji) => gitmoji.code as GitmojiCode)
      .concat(gitmojis.map((gitmoji) => gitmoji.emoji as GitmojiCode)),
  );
  const index = {
    // code: createIndex(gitmojis, 'code'),
    emoji: createIndex(gitmojis, 'emoji'),
  };

  function createIndex<K extends keyof Gitmoji>(list: readonly Gitmoji[], key: K): ReadonlyMap<Gitmoji[K], Gitmoji> {
    return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
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
      test: ['✅', '🧪'] as GitmojiCode.Unicode[],
      perf: ['⚡️'] as GitmojiCode.Unicode[],
      revert: ['⏪️'] as GitmojiCode.Unicode[],
      ci: ['👷', '💚'] as GitmojiCode.Unicode[],
      wip: ['🚧'] as GitmojiCode.Unicode[],
      build: [] as GitmojiCode.Unicode[],
      chore: ['🔧'] as GitmojiCode.Unicode[],
    };

    const entries = Array.from<[CommitConventionalType, GitmojiCode.Unicode[]]>(
      // @ts-ignore entries are not well typed
      Object.entries(data),
    );
    return new Map(
      entries.reduce<Array<[GitmojiCode, CommitConventionalType]>>(
        (acc, [commitType, gitmojiUnicodeArray]) =>
          acc
            .concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [gitmojiUnicode, commitType]))

            .concat(
              gitmojiUnicodeArray.map((gitmojiUnicode) => [
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
                index.emoji.get(gitmojiUnicode)?.code! as GitmojiCode,
                commitType,
              ]),
            ),
        [],
      ),
    );
  })();

  export function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType {
    return conversionMap.get(gitmoji) ?? defaultType;
  }
}
