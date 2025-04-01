import { ParserOptions as ParserOptions$1, Commit as Commit$2 } from 'conventional-commits-parser';
import { Options } from 'conventional-changelog-writer';

interface ParserOptions extends ParserOptions$1 {
}

type Commit$1 = Commit$2;

type Commit = Commit$2 & {
    type: string | null;
    subject: string | null;
    scope: string | null;
    hash: string | null;
};
type CommitConventionalType = 'build' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'revert' | 'style' | 'test' | 'wip' | 'chore';
declare const CommitConventionalType: {
    hasInstance: (anyValue: unknown) => anyValue is CommitConventionalType;
    getData: (commitType: CommitConventionalType) => CommitConventionalTypeData;
    values: () => readonly CommitConventionalType[];
    parse: (anyValue: string) => CommitConventionalType | undefined;
    findWhere: (predicate: (data: CommitConventionalTypeData) => boolean) => CommitConventionalType[];
    Build: "build";
    CI: "ci";
    Docs: "docs";
    Feat: "feat";
    Fix: "fix";
    Perf: "perf";
    Refactor: "refactor";
    Revert: "revert";
    Style: "style";
    Test: "test";
    WIP: "wip";
    Chore: "chore";
};
interface CommitConventionalTypeData {
    emoji: string;
    'en-US': string;
    changelog: boolean;
}

interface WriterOptions extends Options<Commit> {
}

type Emoji = Emoji.Unicode | Emoji.Text;
declare namespace Emoji {
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
type GitmojiCode = Emoji & {
    '@@Gitmoji': true;
};
declare namespace GitmojiCode {
    type Unicode = Emoji.Unicode & {
        '@@Gitmoji': true;
    };
    type Emoji = Emoji.Text & {
        '@@Gitmoji': true;
    };
    function isValid(anyValue: string): anyValue is GitmojiCode;
    function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType;
}

declare const _default: {
    Emoji: typeof Emoji;
    GitmojiCode: typeof GitmojiCode;
    parserOpts: ParserOptions;
    writerOpts: WriterOptions;
    recommendedBumpOpts: {
        parserOpts: ParserOptions;
        whatBump: (commits: ReadonlyArray<Commit$1>) => {
            level: number;
            reason: string;
        };
    };
    gitRawCommitOpts: {
        format: string;
    };
};

export { _default as default };
