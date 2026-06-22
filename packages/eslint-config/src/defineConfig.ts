import { ESLintConfig } from '@w5s/dev';
import {
  e18e,
  es,
  ignores,
  imports,
  jsdoc,
  jsonc,
  markdown,
  next,
  node,
  react,
  stylistic,
  test,
  ts,
  unicorn,
  yml,
} from './config.js';
import type { Config } from './type.js';

export interface DefineConfigOptions extends ignores.Options {
  e18e?: boolean | e18e.Options;
  es?: boolean | es.Options;
  import?: boolean | imports.Options;
  markdown?: boolean | markdown.Options;
  jsdoc?: boolean | jsdoc.Options;
  jsonc?: boolean | jsonc.Options;
  next?: boolean | next.Options;
  node?: boolean | node.Options;
  react?: boolean | react.Options;
  stylistic?: boolean | stylistic.Options;
  test?: boolean | test.Options;
  ts?: boolean | ts.Options;
  unicorn?: boolean | unicorn.Options;
  yml?: boolean | yml.Options;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const stylisticOptions =
    typeof options.stylistic === 'boolean' ? { enabled: options.stylistic } : { enabled: true, ...options.stylistic };
  const withDefaultStylistic = <T>(_options: T) => ({ stylistic: stylisticOptions, ..._options });
  const toOption = <T extends {}>(optionsOrBoolean: T | boolean | undefined) =>
    withDefaultStylistic(
      (typeof optionsOrBoolean === 'boolean'
        ? { enabled: optionsOrBoolean }
        : { enabled: true, ...optionsOrBoolean }) as T & { enabled: boolean },
    );
  const includeEnabled = <T extends { enabled?: boolean }, R extends Promise<readonly Config[]>>(factory: (config: T) => R, input: T) =>
    input.enabled ? [factory(input)] : [];

  return ESLintConfig.concat(
    ...includeEnabled(e18e, toOption(options.e18e)),
    ...includeEnabled(es, toOption(options.es)),
    ...includeEnabled(ts, toOption(options.ts)),
    ...includeEnabled(ignores, toOption(options)),
    ...includeEnabled(jsonc, toOption(options.jsonc)),
    ...includeEnabled(jsdoc, toOption(options.jsdoc)),
    ...includeEnabled(react, toOption(options.react)),
    ...includeEnabled(stylistic, toOption(options.stylistic)),
    ...includeEnabled(imports, toOption(options.import)),
    ...includeEnabled(markdown, toOption(options.markdown)),
    ...includeEnabled(next, toOption(options.next)),
    ...includeEnabled(node, toOption(options.node)),
    ...includeEnabled(unicorn, toOption(options.unicorn)),
    ...includeEnabled(yml, toOption(options.yml)),
    ...includeEnabled(test, toOption(options.test)),
  );
}
