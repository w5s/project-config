//#region ../../node_modules/.pnpm/c12@3.3.4/node_modules/c12/dist/index.d.mts
declare global {
  var __c12_dotenv_vars__: Map<Record<string, any>, Set<string>>;
}
//#endregion
//#region src/types.d.ts
interface ConfigLayerMeta {
  name?: string;
  [key: string]: any;
}
type UserInputConfig = Record<string, any>;
interface C12InputConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> {
  $test?: T;
  $development?: T;
  $production?: T;
  $env?: Record<string, T>;
  $meta?: MT;
}
type InputConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> = C12InputConfig<T, MT> & T;
//#endregion
//#region src/config.d.ts
declare const config: InputConfig<import("@w5s/managed-script").UserConfig, ConfigLayerMeta>;
//#endregion
//#region src/meta.d.ts
export declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
export { config as default };
//# sourceMappingURL=index.d.ts.map