/**
 * @typedef {string|boolean|number|null|Array<unknown>|Record<string, unknown>} JsonValue
 */

/**
 * @param {import('mrm-core').Json} jsonFile
 * @param {undefined | string | string[]} path
 */
function getValue(jsonFile, path) {
  if (path == null) {
    return jsonFile.get();
  }

  return jsonFile.get(path);
}

/**
 * @param {import('mrm-core').Json} jsonFile
 * @param {undefined | string | string[]} path
 * @param {unknown} pathValue
 */
function setValue(jsonFile, path, pathValue) {
  if (path == null) {
    jsonFile.set(pathValue);
  } else {
    jsonFile.set(path, pathValue);
  }
}

/**
 * Set state of a json value
 *
 * @template {undefined|JsonValue} T
 * @param {import('mrm-core').Json} jsonFile
 * @param {{
 *   path: undefined | string | string[],
 *   state: 'present'|'absent',
 *   update?: T | ((previousValue: T) => T)
 *   default?: T | (() => T)
 * }} options
 */
function value(jsonFile, { state, path, default: defaultValue, update: nextValue }) {
  if (state === 'present') {
    let currentValue = getValue(jsonFile, path);

    if (currentValue === undefined) {
      currentValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      if (currentValue !== undefined) {
        setValue(jsonFile, path, currentValue);
      }
    }

    if (nextValue != null) {
      const resolvedValue = typeof nextValue === 'function' ? nextValue(getValue(jsonFile, path)) : nextValue;
      if (resolvedValue != null) {
        setValue(jsonFile, path, resolvedValue);
      }
    }
  } else if (path) {
    jsonFile.unset(path);
  }
}

module.exports = {
  value,
};
