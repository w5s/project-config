/** @type {'error'} */
const error = 'error';

/** @type {'warn'} */
const warn = 'warn';

/** @type {'off'} */
const off = 'off';

/**
 * @typedef {import("eslint").ESLint.ConfigData} ESLintConfig
 */

/**
 * @type {<T>(value: T[]|T|undefined) => T[]}
 */
function toArray(value) {
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

/**
 * @type {<T>(left: T[]|T|undefined, right:T[]|T|undefined) => T[]}
 */
function concatArray(left, right) {
  return toArray(left).concat(toArray(right));
}

/** @type {(...configs: ESLintConfig[]) => ESLintConfig} */
function concatESConfig(...configs) {
  return configs.reduce(
    (/** @type {ESLintConfig} */ returnValue, /** @type {ESLintConfig} */ config) =>
      Object.assign({}, returnValue, config, {
        env: Object.assign({}, returnValue.env, config.env),
        extends: concatArray(returnValue.extends, config.extends),
        overrides: concatArray(returnValue.overrides, config.overrides),
        plugins: concatArray(returnValue.plugins, config.plugins),
        rules: Object.assign({}, returnValue.rules, config.rules),
        settings: Object.assign({}, returnValue.settings, config.settings),
      }),
    {
      env: {},
      extends: [],
      overrides: [],
      plugins: [],
      rules: {},
      settings: {},
    }
  );
}

module.exports = {
  concatESConfig,
  error,
  fixme: (
    /** @type {import("eslint").Linter.RuleLevel|[import("eslint").Linter.RuleLevel, ..._1: any[]]|undefined} */ _status
  ) => off,
  off,
  warn,
};
