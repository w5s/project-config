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
    require.resolve('./dist/rules/ignore.js'),
    require.resolve('./dist/es.js'),
    ...includeIf(tryResolve('typescript'), () => require.resolve('./dist/ts.js')),
    require.resolve('./dist/json.js'),
    require.resolve('./dist/yml.js'),
    require.resolve('./dist/jest.js'),
  ],
  root: true,
};
