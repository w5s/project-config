import { describe, expect, it } from 'vitest';

import { defaultContext } from './defaultContext.js';

describe(defaultContext, () => {
  it('prefers the explicit context cwd', () => {
    expect(defaultContext({ cli: { cwd: '/from-option' }, cwd: '/from-context', env: { MANAGED_SCRIPT_CWD: '/from-env' } }).cwd).toBe(
      '/from-context',
    );
  });

  it('prefers the CLI option over MANAGED_SCRIPT_CWD', () => {
    expect(defaultContext({
      cli: { cwd: '/from-option' },
      // cwd: undefined,
      env: { MANAGED_SCRIPT_CWD: '/from-env' },
    }).cwd).toBe(
      '/from-option',
    );
  });

  it('falls back to MANAGED_SCRIPT_CWD', () => {
    expect(defaultContext({
      cli: { cwd: undefined },
      // cwd: undefined,
      env: { MANAGED_SCRIPT_CWD: '/from-env' },
    }).cwd).toBe('/from-env');
  });

  it('falls back to process.cwd()', () => {
    expect(defaultContext({
      cli: { cwd: undefined },
      // cwd: undefined,
      env: {},
    }).cwd).toBe(process.cwd());
  });
});
