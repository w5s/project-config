//#region src/config.d.ts
declare const config: {
  parserPreset: {
    parserOpts: any;
  };
  plugins: import("@commitlint/types").Plugin[];
  rules: Partial<import("@commitlint/types").RulesConfig<import("@commitlint/types").RuleConfigQuality.Qualified>>;
};
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
export { config as default, meta };
//# sourceMappingURL=index.d.ts.map