import emojiRegexp from 'emoji-regex';
import { type Gitmoji, gitmojis } from 'gitmojis';

import type { CommitConventionalType } from './data.js';

export type Emoji = Emoji.Text | Emoji.Unicode;
export namespace Emoji {
  export type Text = string & { '@@EmojiStyle': 'text' };
  export type Unicode = string & { '@@EmojiStyle': 'unicode' };
}

const reEmojiUnicode = emojiRegexp();
const reEmojiText = /:\w*:/;

const reMatchOnly = (input: RegExp) => new RegExp(`^${input.source}$`, '');
const _reEmojiUnicode = reMatchOnly(reEmojiUnicode);
const _reEmojiText = reMatchOnly(reEmojiText);

function hasInstance(anyValue: string): anyValue is Emoji {
  return isText(anyValue) || isUnicode(anyValue);
}

function isText(anyValue: string): anyValue is Emoji.Text {
  return _reEmojiText.test(anyValue);
}

function isUnicode(anyValue: string): anyValue is Emoji.Unicode {
  return _reEmojiUnicode.test(anyValue);
}

/**
 * @namespace
 */
export const Emoji = Object.freeze({
  hasInstance,
  isText,
  isUnicode,
  reEmojiText,
  reEmojiUnicode,
});

export type GitmojiCode = Emoji & { '@@Gitmoji': true };
export namespace GitmojiCode {
  export type Emoji = Emoji.Text & { '@@Gitmoji': true };
  export type Unicode = Emoji.Unicode & { '@@Gitmoji': true };
}

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

function isValid(anyValue: string): anyValue is GitmojiCode {
  return allGitmojiCodes.has(anyValue as GitmojiCode);
}

const defaultType = 'chore';
const conversionMap: ReadonlyMap<GitmojiCode, CommitConventionalType> = (() => {
  const data: Record<CommitConventionalType, GitmojiCode.Unicode[]> = {
    build: [] as GitmojiCode.Unicode[],
    chore: ['🔧'] as GitmojiCode.Unicode[],
    ci: ['👷', '💚'] as GitmojiCode.Unicode[],
    docs: ['📝'] as GitmojiCode.Unicode[],
    feat: ['✨', '♿️', '🚸'] as GitmojiCode.Unicode[],
    fix: ['🐛'] as GitmojiCode.Unicode[],
    perf: ['⚡️'] as GitmojiCode.Unicode[],
    refactor: ['♻️', '🏗️'] as GitmojiCode.Unicode[],
    revert: ['⏪️'] as GitmojiCode.Unicode[],
    style: ['🎨', '🚨'] as GitmojiCode.Unicode[],
    test: ['✅', '🧪'] as GitmojiCode.Unicode[],
    wip: ['🚧'] as GitmojiCode.Unicode[],
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
              // eslint-disable-next-line ts/no-non-null-assertion, ts/no-non-null-asserted-optional-chain
              index.emoji.get(gitmojiUnicode)?.code! as GitmojiCode,
              commitType,
            ]),
          ),
      [],
    ),
  );
})();

function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType {
  return conversionMap.get(gitmoji) ?? defaultType;
}

/**
 * @namespace
 */
export const GitmojiCode = Object.freeze({
  isValid,
  toConventionalCommitType,
});
