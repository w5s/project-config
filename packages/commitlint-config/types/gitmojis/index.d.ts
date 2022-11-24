declare module 'gitmojis' {
  interface Gitmoji {
    readonly emoji: string;
    readonly entity: string;
    readonly code: string;
    readonly description: string;
    readonly name: string;
    readonly semver: null | 'patch';
    /**
     * Gitmoji code
     *
     * @example
     * ```ts
     * ':bug:'
     * ```
     */
    readonly code: string;
  }
  export const gitmojis: ReadonlyArray<Gitmoji>;
}
