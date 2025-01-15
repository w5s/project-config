/* eslint-env node */

export default [
  await ((await import('../../dist/index')).default()),
  {
    root: true,
  }
];
