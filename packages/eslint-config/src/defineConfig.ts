import { jsonc, imports } from './config.js';
import { Config } from './type.js';

export interface DefineConfigOptions {
  import?: boolean | imports.Options;
  jsonc?: boolean | jsonc.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const importOptions = typeof options.import === 'boolean' ? { enabled: options.import } : { enabled: true, ...options.import };
  const jsoncOptions = typeof options.jsonc === 'boolean' ? { enabled: options.jsonc } : { enabled: true, ...options.jsonc };

  let returnValue: Array<Config> = [];
  const append = async (config: any[]) =>  {
    returnValue = [...returnValue, ...config as any]
  };

  if (jsoncOptions.enabled) {
    append(await jsonc(jsoncOptions))
    // sortPackageJson()
    // sortTsconfig()
  }
  if (importOptions.enabled) {
    append(await imports(importOptions))
  }



  return returnValue;
}
