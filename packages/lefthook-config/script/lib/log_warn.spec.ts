import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log_warn', () => {
  it('writes a package-prefixed warning to stderr', () => {
    const result = sourceEnvAndRunSync('log_warn "no configuration found"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe(
      'Warning: [@w5s/lefthook-config] no configuration found\n',
    );
    expect(result.stdout).toBe('');
  });

  it('is silent when LEFTHOOK_LOG_LEVEL is above warn', () => {
    const result = sourceEnvAndRunSync('log_warn "no configuration found"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'error',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout).toBe('');
  });
});
