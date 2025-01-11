import { jsonc, imports, node, yml } from './config.js';
import { Config } from './type.js';

export interface DefineConfigOptions {
  import?: boolean | imports.Options;
  jsonc?: boolean | jsonc.Options;
  node?: boolean | node.Options;
  yml?: boolean | yml.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const importOptions = typeof options.import === 'boolean' ? { enabled: options.import } : { enabled: true, ...options.import };
  const jsoncOptions = typeof options.jsonc === 'boolean' ? { enabled: options.jsonc } : { enabled: true, ...options.jsonc };
  const nodeOptions = typeof options.node === 'boolean' ? { enabled: options.node } : { enabled: true, ...options.node };
  const ymlOptions = typeof options.yml === 'boolean' ? { enabled: options.yml } : { enabled: false, ...options.yml };

  let returnValue: Array<Config> = [];
  const append = async (config: any[]) =>  {
    returnValue = [...returnValue, ...config as any];
  };

  if (jsoncOptions.enabled) {
    append(await jsonc(jsoncOptions));
    // sortPackageJson()
    // sortTsconfig()
  }
  if (importOptions.enabled) {
    append(await imports(importOptions));
  }
  if (nodeOptions.enabled) {
    append(await node(nodeOptions));
  }
  if (ymlOptions.enabled) {
    append(await yml(ymlOptions));
  }
  return returnValue;
}
