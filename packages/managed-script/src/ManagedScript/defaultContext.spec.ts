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

  it('defaults dryRun to false', () => {
    expect(defaultContext({ cli: {}, env: {} }).dryRun).toBe(false);
  });

  it('prefers the explicit context dryRun over the CLI option', () => {
    expect(defaultContext({ cli: { dryRun: false }, dryRun: true, env: {} }).dryRun).toBe(true);
  });

  it('falls back to the CLI option dryRun', () => {
    expect(defaultContext({ cli: { dryRun: true }, env: {} }).dryRun).toBe(true);
  });

  it('defaults logLevel to info', () => {
    expect(defaultContext({ cli: {}, env: {} }).logLevel).toBe('info');
  });

  it('prefers the explicit context logLevel over the CLI option and env var', () => {
    expect(defaultContext({
      cli: { logLevel: 'warn' },
      env: { MANAGED_SCRIPT_LOGLEVEL: 'error' },
      logLevel: 'debug',
    }).logLevel).toBe('debug');
  });

  it('prefers the CLI option logLevel over MANAGED_SCRIPT_LOGLEVEL', () => {
    expect(defaultContext({
      cli: { logLevel: 'warn' },
      env: { MANAGED_SCRIPT_LOGLEVEL: 'error' },
    }).logLevel).toBe('warn');
  });

  it('falls back to MANAGED_SCRIPT_LOGLEVEL', () => {
    expect(defaultContext({ cli: {}, env: { MANAGED_SCRIPT_LOGLEVEL: 'debug' } }).logLevel).toBe('debug');
  });

  it('ignores an unrecognized MANAGED_SCRIPT_LOGLEVEL and defaults to info', () => {
    expect(defaultContext({ cli: {}, env: { MANAGED_SCRIPT_LOGLEVEL: 'invalid' } }).logLevel).toBe('info');
  });

  it('defaults stderr to process.stderr', () => {
    expect(defaultContext({ cli: {}, env: {} }).stderr).toBe(process.stderr);
  });
});
