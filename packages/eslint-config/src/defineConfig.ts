import { jsonc } from './config.js';
import { Config } from './type.js';

export interface DefineConfigOptions {
  jsonc?: boolean | jsonc.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const jsoncOptions = typeof options.jsonc === 'boolean' ? { enabled: options.jsonc } : { enabled: true, ...options.jsonc };

  let returnValue: Array<Config> = [];
  const append = async (config: any) =>  {
    returnValue = [...returnValue, ...await config as any]
  };

  if (jsoncOptions.enabled) {
    append(await jsonc(jsoncOptions))
    // sortPackageJson()
    // sortTsconfig()
  }



  return returnValue;
}
