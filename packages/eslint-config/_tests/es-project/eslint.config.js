/* eslint-env node */

export default [
  ...(await ((await import('../../dist/index')).default())),
  (await import('../testRules')).rules,
  {
    root: true,
  }
];