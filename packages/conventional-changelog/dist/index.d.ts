declare const _default: {
    parserOpts: import("./parser-opts.js").ParserOptions;
    writerOpts: import("./writer-opts.js").WriterOptions;
    recommendedBumpOpts: {
        parserOpts: import("./parser-opts.js").ParserOptions;
        whatBump: (commits: ReadonlyArray<import("./recommended-bump-opts.js").Commit>) => {
            level: number;
            reason: string;
        };
    };
    gitRawCommitOpts: {
        format: string;
    };
};
export default _default;
