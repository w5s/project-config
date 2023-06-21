import type { ESLint, Linter } from 'eslint';
export declare namespace ESLintConfig {
    /**
     *
     * @param configs
     */
    function concat(...configs: ESLint.ConfigData[]): ESLint.ConfigData;
    /**
     * Always return 'off'. `_status` is the previous rule value.
     *
     * @param _status
     */
    function fixme(_status: Linter.RuleLevel | [Linter.RuleLevel, ...any[]] | undefined): "off";
}
//# sourceMappingURL=eslint.d.ts.map