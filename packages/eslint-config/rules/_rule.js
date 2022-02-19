/** @type {'error'} */
const error = 'error';

/** @type {'warn'} */
const warn = 'warn';

/** @type {'off'} */
const off = 'off';

/**
 * @typedef {{
 *  env?: Record<string, boolean>,
 *  extends?: string[]|string,
 *  plugins?: string[]|string,
 *  rules?: Record<string, unknown>,
 *  settings?: Record<string, unknown>,
 * }} ESLintConfigInit
 */
/**
 * @typedef {{
 *  env: Record<string, boolean>,
 *  extends: string[],
 *  plugins: string[],
 *  rules: Record<string, unknown>,
 *  settings: Record<string, unknown>,
 * }} ESLintConfig
 */

/**
 * @template T
 * @type {(value: T[]|T|undefined) => T[]} */
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
 * @template T
 * @type {(left: T[]|T|undefined, right:T[]|T|undefined) => T[]}
 */
function concatArray(left, right) {
  return toArray(left).concat(toArray(right));
}

/** @type {(...configs: ESLintConfigInit[]) => ESLintConfig} */
function concatESConfig(...configs) {
  return configs.reduce(
    (/** @type {ESLintConfig} */ returnValue, /** @type {ESLintConfigInit} */ config) =>
      Object.assign({}, returnValue, config, {
        env: Object.assign({}, returnValue.env, config.env),
        extends: concatArray(returnValue.extends, config.extends),
        plugins: concatArray(returnValue.plugins, config.plugins),
        rules: Object.assign({}, returnValue.rules, config.rules),
        settings: Object.assign({}, returnValue.settings, config.settings),
      }),
    {
      env: {},
      extends: [],
      plugins: [],
      rules: {},
      settings: {},
    }
  );
}

module.exports = {
  concatESConfig,
  error,
  // eslint-disable-next-line no-unused-vars
  fixme: (/** @type {'off'|'warn'|'error'|undefined} */ _status) => off,
  off,
  warn,
};
