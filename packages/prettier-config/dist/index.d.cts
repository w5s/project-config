import { Config } from "prettier";

//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/index.d.ts
declare const prettierConfig: Config;
//#endregion
export { prettierConfig as default, meta };
//# sourceMappingURL=index.d.cts.map