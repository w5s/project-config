export type Gitmoji = Gitmoji.Unicode | Gitmoji.Emoji;
export declare namespace Gitmoji {
    type Unicode = string & {
        '@@GitmojiStyle': 'unicode';
    };
    type Emoji = string & {
        '@@GitmojiStyle': 'emoji';
    };
    const reEmoji: RegExp;
    function isUnicode(anyValue: string): anyValue is Unicode;
    function isEmoji(anyValue: string): anyValue is Emoji;
    function isValid(anyValue: string): anyValue is Gitmoji;
}
//# sourceMappingURL=gitmoji.d.ts.map