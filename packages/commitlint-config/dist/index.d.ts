import * as _commitlint_types0 from "@commitlint/types";

//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/index.d.ts
declare const config: {
  parserPreset: {
    parserOpts: any;
  };
  rules: Partial<_commitlint_types0.RulesConfig<_commitlint_types0.RuleConfigQuality.Qualified>>;
  plugins: _commitlint_types0.Plugin[];
};
//#endregion
export { config as default, meta };
//# sourceMappingURL=index.d.ts.map