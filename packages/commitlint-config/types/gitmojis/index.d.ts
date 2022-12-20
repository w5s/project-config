/* eslint-disable @typescript-eslint/naming-convention */
declare module 'gitmojis' {
  type GitmojiUnicode = string & { '@@GitmojiStyle': 'unicode' };

  type GitmojiEmoji = string & { '@@GitmojiStyle': 'emoji' };

  interface Gitmoji {
    /**
     * Gitmoji unicode code
     *
     * @example
     * ```ts
     * '🐛'
     * ```
     */
    readonly emoji: GitmojiUnicode;
    readonly entity: string;
    readonly description: string;
    readonly name: string;
    readonly semver: null | 'patch' | 'minor' | 'major';
    /**
     * Gitmoji string code formatted as `:my_emoji:`
     *
     * @example
     * ```ts
     * ':bug:'
     * ```
     */
    readonly code: GitmojiEmoji;
  }
  export const gitmojis: ReadonlyArray<Gitmoji>;
}
