import emojiRegexp from 'emoji-regex';
import { gitmojis } from 'gitmojis';

export type Gitmoji = Gitmoji.Unicode | Gitmoji.Emoji;
export namespace Gitmoji {
  export type Unicode = string & { '@@GitmojiStyle': 'unicode' };
  export type Emoji = string & { '@@GitmojiStyle': 'emoji' };

  export const reEmoji = emojiRegexp();

  const reGitmoji = new RegExp(`^${reEmoji.source}$`, reEmoji.flags);
  const allGitmojiCodes = new Set(
    gitmojis.map((gitmoji) => gitmoji.code).concat(gitmojis.map((gitmoji) => gitmoji.emoji))
  );

  export function isUnicode(anyValue: string): anyValue is Unicode {
    return anyValue.match(reGitmoji) != null;
  }

  export function isEmoji(anyValue: string): anyValue is Emoji {
    return anyValue.match(/^:(\w+):$/) != null;
  }

  export function isValid(anyValue: string): anyValue is Gitmoji {
    return allGitmojiCodes.has(anyValue);
  }
}
