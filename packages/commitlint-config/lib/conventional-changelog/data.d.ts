import type { Commit as CommitDefault } from 'conventional-commits-parser';
export type Commit = CommitDefault<never> & {
    hash?: string;
};
export type CommitConventionalType = 'build' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'revert' | 'style' | 'test' | 'wip' | 'chore';
export declare const CommitConventionalType: {
    hasInstance: (anyValue: unknown) => anyValue is CommitConventionalType;
    getData: (commitType: CommitConventionalType) => CommitConventionalTypeData;
    values: () => readonly CommitConventionalType[];
    parse: (anyValue: string) => CommitConventionalType | undefined;
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
export interface CommitConventionalTypeData {
    emoji: string;
    'en-US': string;
}
