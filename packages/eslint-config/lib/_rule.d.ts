import type { ESLint, Linter } from 'eslint';
export declare function concatESConfig(...configs: ESLint.ConfigData[]): ESLint.ConfigData;
export declare function fixme(_status: Linter.RuleLevel | [Linter.RuleLevel, ...any[]] | undefined): "off";
export declare function disable(_status: Linter.RuleLevel | [Linter.RuleLevel, ...any[]] | undefined, _explanation: string): "off";
