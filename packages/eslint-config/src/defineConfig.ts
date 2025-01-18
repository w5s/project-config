import { jsonc, ignores, imports, node, ts, yml, unicorn } from './config.js';
import type { Config } from './type.js';

export interface DefineConfigOptions extends ignores.Options {
  import?: boolean | imports.Options;
  jsonc?: boolean | jsonc.Options;
  node?: boolean | node.Options;
  ts?: boolean | ts.Options;
  unicorn?: boolean | unicorn.Options;
  yml?: boolean | yml.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const importOptions = typeof options.import === 'boolean' ? { enabled: options.import } : { enabled: true, ...options.import };
  const jsoncOptions = typeof options.jsonc === 'boolean' ? { enabled: options.jsonc } : { enabled: true, ...options.jsonc };
  const nodeOptions = typeof options.node === 'boolean' ? { enabled: options.node } : { enabled: true, ...options.node };
  const tsOptions = typeof options.ts === 'boolean' ? { enabled: options.ts } : { enabled: true, ...options.ts };
  const unicornOptions = typeof options.unicorn === 'boolean' ? { enabled: options.unicorn } : { enabled: true, ...options.unicorn };
  const ymlOptions = typeof options.yml === 'boolean' ? { enabled: options.yml } : { enabled: false, ...options.yml };

  let returnValue: Array<Config> = [];
  const append = async (config: any[]) =>  {
    returnValue = [...returnValue, ...config as any];
  };

  append(await ignores(options));

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
  if (tsOptions.enabled) {
    append(await ts(tsOptions));
  }
  if (ymlOptions.enabled) {
    append(await yml(ymlOptions));
  }
  if (unicornOptions.enabled) {
    append(await unicorn(unicornOptions));
  }
  return returnValue;
}
