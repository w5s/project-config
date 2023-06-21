import { type LintOptions } from '@commitlint/types';
declare const config: {
    parserPreset: LintOptions;
    rules: Partial<import("@commitlint/types").RulesConfig<import("@commitlint/types").RuleConfigQuality.Qualified>>;
    plugins: import("@commitlint/types").Plugin[];
};
export default config;
