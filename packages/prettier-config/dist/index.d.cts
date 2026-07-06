import { Config } from "prettier";

//#region src/config.d.ts
declare const config: Config;
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
export { config as default, meta };
//# sourceMappingURL=index.d.cts.map