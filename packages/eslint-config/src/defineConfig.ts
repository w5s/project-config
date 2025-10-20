import { jsdoc, jsonc, ignores, imports, node, ts, yml, unicorn, stylistic, es } from './config.js';
import type { Config } from './type.js';

export interface DefineConfigOptions extends ignores.Options {
  es?: boolean | es.Options;
  import?: boolean | imports.Options;
  jsdoc?: boolean | jsdoc.Options;
  jsonc?: boolean | jsonc.Options;
  node?: boolean | node.Options;
  stylistic?: boolean | stylistic.Options;
  ts?: boolean | ts.Options;
  unicorn?: boolean | unicorn.Options;
  yml?: boolean | yml.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const stylisticOptions = typeof options.stylistic === 'boolean' ? { enabled: options.stylistic } : { enabled: true, ...options.stylistic };
  const withDefaultStylistic = <T>(options: T) => ({ stylistic: stylisticOptions, ...options });
  const toOption = <T extends {}>(optionsOrBoolean: T | boolean | undefined) => withDefaultStylistic((typeof optionsOrBoolean === 'boolean' ? { enabled: optionsOrBoolean } : ({ enabled: true, ...optionsOrBoolean })) as T & { enabled: boolean });
  const esOptions = toOption(options.es);
  const importOptions = toOption(options.import);
  const jsdocOptions = toOption(options.jsdoc);
  const jsoncOptions = toOption(options.jsonc);
  const nodeOptions = toOption(options.node);
  const tsOptions = toOption(options.ts);
  const unicornOptions = toOption(options.unicorn);
  const ymlOptions = toOption(options.yml);

  let returnValue: Array<Config> = [];
  const append = async (config: ReadonlyArray<any>) => {
    returnValue = [...returnValue, ...config as any];
  };
  append(await es(esOptions));
  append(await ignores(options));

  if (jsoncOptions.enabled) {
    append(await jsonc(jsoncOptions));
    // sortPackageJson()
    // sortTsconfig()
  }
  if (jsdocOptions.enabled) {
    append(await jsdoc(jsdocOptions));
  }
  if (stylisticOptions.enabled) {
    append(await stylistic(stylisticOptions));
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
