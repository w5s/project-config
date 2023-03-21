declare const _default: {
    parserOpts: import("./parser-opts").ParserOptions;
    writerOpts: import("./writer-opts").WriterOptions;
    recommendedBumpOpts: {
        parserOpts: import("./parser-opts").ParserOptions;
        whatBump: (commits: readonly import("./recommended-bump-opts").Commit[]) => {
            level: number;
            reason: string;
        };
    };
    gitRawCommitOpts: {
        format: string;
    };
};
export default _default;
