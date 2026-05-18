//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/config.d.ts
declare const config: {
  parserPreset: {
    parserOpts: any;
  };
  rules: Partial<import("@commitlint/types").RulesConfig<import("@commitlint/types").RuleConfigQuality.Qualified>>;
  plugins: import("@commitlint/types").Plugin[];
};
//#endregion
export { config as default, meta };
//# sourceMappingURL=index.d.ts.map