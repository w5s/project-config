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
  return toArray(left).concat(toArray(right));
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
      }
    );
  }
}
