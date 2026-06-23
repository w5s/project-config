import { Config } from "prettier";

//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region src/config.d.ts
declare const config: Config;
//#endregion
export { config as default, meta };
//# sourceMappingURL=index.d.cts.map