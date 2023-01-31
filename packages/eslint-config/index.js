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
 * @param {() => T} getValue
 */
function includeIf(condition, getValue) {
  return condition ? [getValue()] : [];
}

module.exports = {
  extends: [
    require.resolve('./ignore.js'),
    require.resolve('./es.js'),
    ...includeIf(tryResolve('typescript'), () => require.resolve('./ts.js')),
    require.resolve('./json.js'),
    require.resolve('./yml.js'),
    require.resolve('./jest.js'),
  ],
  root: true,
};
