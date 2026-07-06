declare module 'gitmojis' {
  interface Gitmoji {
    /**
     * Gitmoji string code formatted as `:my_emoji:`
     *
     * @example
     * ```ts
     * ':bug:'
     * ```
     */
    readonly code: GitmojiEmoji;
    readonly description: string;

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
    readonly name: string;

    readonly semver: 'major' | 'minor' | 'patch' | null;
  }

  type GitmojiEmoji = string;

  type GitmojiUnicode = string;
  export const gitmojis: ReadonlyArray<Gitmoji>;
}
