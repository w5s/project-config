import type eslint from 'eslint';

import { ESLintConfig } from '@w5s/dev';

import type { Config } from './type.js';

import * as config from './config.js';

export interface DefineConfigOptions extends config.ignores.Options {
  /**
   * Plugins configuration
   */
  plugins?: {
    'e18e'?: boolean | config.e18e.Options | undefined;
    'es'?: boolean | config.es.Options | undefined;
    'import'?: boolean | config.imports.Options | undefined;
    'jsdoc'?: boolean | config.jsdoc.Options | undefined;
    'jsonc'?: boolean | config.jsonc.Options | undefined;
    'jsx'?: boolean | config.jsx.Options | undefined;
    'markdown'?: boolean | config.markdown.Options | undefined;
    'next'?: boolean | config.next.Options | undefined;
    'node'?: boolean | config.node.Options | undefined;
    'perfectionist'?: boolean | config.perfectionist.Options | undefined;
    'react'?: boolean | config.react.Options | undefined;
    'stylistic'?: boolean | config.stylistic.Options | undefined;
    'test'?: boolean | config.test.Options | undefined;
    'ts'?: boolean | config.ts.Options | undefined;
    'unicorn'?: boolean | config.unicorn.Options | undefined;
    'unused-imports'?: boolean | config.unusedImports.Options | undefined;
    'yml'?: boolean | config.yml.Options | undefined;
  };

  /**
   * Override rules
   */
  rules?: eslint.Linter.RulesRecord;
}

export async function defineConfig(options: DefineConfigOptions = {}): Promise<Array<Config>> {
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
  const includeEnabled = <T extends { enabled?: boolean | undefined }, R extends Promise<ReadonlyArray<Config>>>(factory: (config: T) => R, input: T) =>
    input.enabled ? [factory(input)] : [];

  return ESLintConfig.concat<Config>(
    // ignore files
    ...includeEnabled(config.ignores, toOption(options)),

    // js and ts
    ...includeEnabled(config.es, toOption(plugins.es)),
    ...includeEnabled(config.ts, toOption(plugins.ts)),
    // js and ts extensions
    ...includeEnabled(config.e18e, toOption(plugins.e18e)),
    ...includeEnabled(config.jsx, toOption(plugins.jsx)),
    ...includeEnabled(config.unusedImports, toOption(plugins['unused-imports'])),
    ...includeEnabled(config.imports, toOption(plugins.import)),
    ...includeEnabled(config.perfectionist, toOption(plugins.perfectionist)),
    ...includeEnabled(config.node, toOption(plugins.node)),
    ...includeEnabled(config.next, toOption(plugins.next, false)),
    ...includeEnabled(config.react, toOption(plugins.react)),
    ...includeEnabled(config.unicorn, toOption(plugins.unicorn)),
    ...includeEnabled(config.test, toOption(plugins.test)),
    // Stylistic
    ...includeEnabled(config.stylistic, stylisticOptions),

    // other languages
    ...includeEnabled(config.jsonc, toOption(plugins.jsonc)),
    ...includeEnabled(config.jsdoc, toOption(plugins.jsdoc)),
    ...includeEnabled(config.markdown, toOption(plugins.markdown)),
    ...includeEnabled(config.yml, toOption(plugins.yml)),
    ...(rules ? [{ rules }] : []),
  );
}
