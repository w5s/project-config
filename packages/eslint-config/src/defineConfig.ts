import type eslint from 'eslint';

import { ESLintConfig } from '@w5s/dev';

import type { Config } from './type.js';

import {
  e18e,
  es,
  ignores,
  imports,
  jsdoc,
  jsonc,
  jsx,
  markdown,
  next,
  node,
  perfectionist,
  react,
  stylistic,
  test,
  ts,
  unicorn,
  yml,
} from './config.js';

export interface DefineConfigOptions extends ignores.Options {
  /**
   * Plugins configuration
   */
  plugins?: {
    e18e?: boolean | e18e.Options;
    es?: boolean | es.Options;
    import?: boolean | imports.Options;
    jsdoc?: boolean | jsdoc.Options;
    jsonc?: boolean | jsonc.Options;
    jsx?: boolean | jsx.Options;
    markdown?: boolean | markdown.Options;
    next?: boolean | next.Options;
    node?: boolean | node.Options;
    perfectionist?: boolean | perfectionist.Options;
    react?: boolean | react.Options;
    stylistic?: boolean | stylistic.Options;
    test?: boolean | test.Options;
    ts?: boolean | ts.Options;
    unicorn?: boolean | unicorn.Options;
    yml?: boolean | yml.Options;
  };

  /**
   * Override rules
   */
  rules?: eslint.Linter.RulesRecord;
}

export async function defineConfig(options: DefineConfigOptions = {}) {
  const { plugins = {}, rules } = options;
  const stylisticOptions =
    typeof plugins.stylistic === 'boolean' ? { enabled: plugins.stylistic } : { enabled: true, ...plugins.stylistic };
  const withDefaultStylistic = <T>(_options: T) => ({ stylistic: stylisticOptions, ..._options });
  const toOption = <T extends {}>(
    optionsOrBoolean: boolean | T | undefined,
    defaultEnabled = true,
  ) =>
    withDefaultStylistic(
      (typeof optionsOrBoolean === 'boolean'
        ? { enabled: optionsOrBoolean }
        : optionsOrBoolean === undefined
          ? { enabled: defaultEnabled }
          : { enabled: defaultEnabled, ...optionsOrBoolean }) as T & { enabled: boolean },
    );
  const includeEnabled = <T extends { enabled?: boolean }, R extends Promise<ReadonlyArray<Config>>>(factory: (config: T) => R, input: T) =>
    input.enabled ? [factory(input)] : [];

  return ESLintConfig.concat(
    ...includeEnabled(e18e, toOption(plugins.e18e)),
    ...includeEnabled(es, toOption(plugins.es)),
    ...includeEnabled(ts, toOption(plugins.ts)),
    ...includeEnabled(ignores, toOption(options)),
    ...includeEnabled(jsonc, toOption(plugins.jsonc)),
    ...includeEnabled(jsdoc, toOption(plugins.jsdoc)),
    ...includeEnabled(jsx, toOption(plugins.jsx)),
    ...includeEnabled(react, toOption(plugins.react)),
    ...includeEnabled(stylistic, toOption(plugins.stylistic)),
    ...includeEnabled(imports, toOption(plugins.import)),
    ...includeEnabled(markdown, toOption(plugins.markdown)),
    ...includeEnabled(next, toOption(plugins.next, false)),
    ...includeEnabled(node, toOption(plugins.node)),
    ...includeEnabled(perfectionist, toOption(plugins.perfectionist)),
    ...includeEnabled(unicorn, toOption(plugins.unicorn)),
    ...includeEnabled(yml, toOption(plugins.yml)),
    ...includeEnabled(test, toOption(plugins.test)),
    ...(rules ? [{ rules }] : []),
  );
}
