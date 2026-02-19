import type { ESLint } from 'eslint';

function toArray<T>(value: T[] | T | undefined): T[] {
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

function concatArray<T>(left: T[] | T | undefined, right: T[] | T | undefined): T[] {
  return [...toArray(left), ...toArray(right)];
}

export namespace ESLintConfig {
  /**
   *
   * @param configs
   */
  export function concat(...configs: ESLint.ConfigData[]): ESLint.ConfigData {
    return configs.reduce(
      (returnValue, config) => ({
        ...returnValue,
        ...config,
        env: { ...returnValue.env, ...config.env },
        extends: concatArray(returnValue.extends, config.extends),
        globals: { ...returnValue.globals, ...config.globals },
        overrides: concatArray(returnValue.overrides, config.overrides),
        parserOptions: { ...returnValue.parserOptions, ...config.parserOptions },
        plugins: concatArray(returnValue.plugins, config.plugins),
        rules: { ...returnValue.rules, ...config.rules },
        settings: { ...returnValue.settings, ...config.settings },
      }),
      {
        env: {},
        extends: [],
        globals: {},
        overrides: [],
        parserOptions: {},
        plugins: [],
        rules: {},
        settings: {},
      },
    );
  }

  /**
   * Always return 'off'. `_status` is the previous rule value.
   *
   * @param _status
   */
  export function fixme(_status: string | number | [string | number, ...any[]] | undefined) {
    return 'off' as const;
  }

  /**
   * Renames rules in the given object according to the given map.
   *
   * Given a map `{ 'old-prefix': 'new-prefix' }`, and a rule object
   * `{ 'old-prefix/rule-name': 'error' }`, this function will return
   * `{ 'new-prefix/rule-name': 'error' }`.
   *
   * @param rules The object containing the rules to rename.
   * @param map The object containing the rename map.
   */
  export function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any> {
    return Object.fromEntries(
      Object.entries(rules).map(([key, value]) => {
        for (const [from, to] of Object.entries(map)) {
          if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
          else if (from === '' && !key.includes('/') && to !== '') return [to + key, value];
        }
        return [key, value];
      }),
    );
  }
}
