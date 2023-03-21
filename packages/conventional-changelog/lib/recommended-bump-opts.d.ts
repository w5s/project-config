import type { Commit as CommitBase } from 'conventional-commits-parser';
export type Commit = CommitBase;
export declare const recommendedBumpOpts: {
    parserOpts: import("./parser-opts").ParserOptions;
    whatBump: (commits: ReadonlyArray<Commit>) => {
        level: number;
        reason: string;
    };
};
