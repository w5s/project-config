import { GitmojiUnicode, GitmojiEmoji } from 'gitmojis';
import type { CommitConventionalType } from './data';
export type GitmojiCode = GitmojiCode.Unicode | GitmojiCode.Emoji;
export declare namespace GitmojiCode {
    type Unicode = GitmojiUnicode;
    type Emoji = GitmojiEmoji;
    const reEmoji: RegExp;
    function isUnicode(anyValue: string): anyValue is Unicode;
    function isEmoji(anyValue: string): anyValue is Emoji;
    function isValid(anyValue: string): anyValue is GitmojiCode;
    function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType;
}
