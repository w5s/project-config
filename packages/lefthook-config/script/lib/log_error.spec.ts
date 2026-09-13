import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log_error', () => {
  it('writes a package-prefixed error to stderr', () => {
    const result = sourceEnvAndRunSync('log_error "something went wrong"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe(
      'Error: [@w5s/lefthook-config] something went wrong\n',
    );
    expect(result.stdout).toBe('');
  });

  it('always emits when LEFTHOOK_LOG_LEVEL is error', () => {
    const result = sourceEnvAndRunSync('log_error "something went wrong"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'error',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe(
      'Error: [@w5s/lefthook-config] something went wrong\n',
    );
  });
});
