import * as _commitlint_types from '@commitlint/types';

declare const config: {
    parserPreset: {
        parserOpts: any;
    };
    rules: Partial<_commitlint_types.RulesConfig<_commitlint_types.RuleConfigQuality.Qualified>>;
    plugins: _commitlint_types.Plugin[];
};

export { config as default };
