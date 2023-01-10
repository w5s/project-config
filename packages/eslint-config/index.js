// http://eslint.org/docs/user-guide/configuring
/**
 * @param {string} name
 */
function tryResolve(name) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
}

/**
 * @template T
 * @param {boolean} condition
 * @param {T} value
 */
function includeIf(condition, value) {
  return condition ? [value] : [];
}

module.exports = {
  extends: [
    require.resolve('./ignore.js'),
    require.resolve('./es.js'),
    ...includeIf(tryResolve('typescript'), require.resolve('./ts.js')),
    require.resolve('./json.js'),
    require.resolve('./yml.js'),
    require.resolve('./jest.js'),
    ...includeIf(tryResolve('react'), require.resolve('./react.js')),
  ],
  root: true,
};
