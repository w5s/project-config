import type { CommitConventionalType } from './data.js';
export type Emoji = Emoji.Unicode | Emoji.Text;
export declare namespace Emoji {
    const reEmojiUnicode: RegExp;
    const reEmojiText: RegExp;
    type Unicode = string & {
        '@@EmojiStyle': 'unicode';
    };
    type Text = string & {
        '@@EmojiStyle': 'text';
    };
    function isUnicode(anyValue: string): anyValue is Unicode;
    function isText(anyValue: string): anyValue is Text;
    function hasInstance(anyValue: string): anyValue is Emoji;
}
export type GitmojiCode = Emoji & {
    '@@Gitmoji': true;
};
export declare namespace GitmojiCode {
    type Unicode = Emoji.Unicode & {
        '@@Gitmoji': true;
    };
    type Emoji = Emoji.Text & {
        '@@Gitmoji': true;
    };
    function isValid(anyValue: string): anyValue is GitmojiCode;
    function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType;
}
