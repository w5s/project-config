declare const config: {
    parserPreset: {
        parserOpts: {
            headerPattern: RegExp;
            headerCorrespondence: string[];
        };
    };
    rules: Partial<import("@commitlint/types").RulesConfig<import("@commitlint/types").RuleConfigQuality.Qualified>>;
};
export default config;
//# sourceMappingURL=index.d.ts.map