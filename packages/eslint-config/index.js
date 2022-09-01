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
    require.resolve('./ignore'),
    require.resolve('./es'),
    require.resolve('./json'),
    require.resolve('./yml'),
    ...includeIf(tryResolve('react'), require.resolve('./react')),
  ],
  overrides: [
    ...includeIf(tryResolve('typescript'), {
      extends: [require.resolve('./ts')],
      files: ['*.+(ts|tsx)'],
    }),
    {
      extends: [require.resolve('./jest')],
      files: [
        '**/__mocks__/**/*.+(ts|tsx|js|jsx)',
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
      ],
      settings: {
        jest: {
          version: 'latest',
        },
      },
    },
  ],
  root: true,
};
