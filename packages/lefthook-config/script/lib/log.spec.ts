import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log', () => {
  it('writes a package-prefixed debug message to stdout when level is debug', () => {
    const result = sourceEnvAndRunSync('log debug "resolved config path"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'debug',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe(
      'Debug: [@w5s/lefthook-config] resolved config path\n',
    );
    expect(result.stderr).toBe('');
  });

  it('is silent for debug when LEFTHOOK_LOG_LEVEL is above debug', () => {
    const result = sourceEnvAndRunSync('log debug "resolved config path"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'info',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout).toBe('');
  });

  it('writes a package-prefixed info message to stdout', () => {
    const result = sourceEnvAndRunSync('log info "commitlint disabled"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe(
      'Info: [@w5s/lefthook-config] commitlint disabled\n',
    );
    expect(result.stderr).toBe('');
  });

  it('writes a package-prefixed warning to stderr', () => {
    const result = sourceEnvAndRunSync('log warn "no configuration found"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe(
      'Warning: [@w5s/lefthook-config] no configuration found\n',
    );
    expect(result.stdout).toBe('');
  });

  it('is silent for warn when LEFTHOOK_LOG_LEVEL is above warn', () => {
    const result = sourceEnvAndRunSync('log warn "no configuration found"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'error',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout).toBe('');
  });

  it('writes a package-prefixed error to stderr', () => {
    const result = sourceEnvAndRunSync('log error "something went wrong"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe(
      'Error: [@w5s/lefthook-config] something went wrong\n',
    );
    expect(result.stdout).toBe('');
  });
});
