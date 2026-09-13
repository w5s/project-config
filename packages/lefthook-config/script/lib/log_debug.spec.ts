import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log_debug', () => {
  it('writes a package-prefixed debug message to stderr when level is debug', () => {
    const result = sourceEnvAndRunSync('log_debug "resolved config path"', {
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

  it('is silent when LEFTHOOK_LOG_LEVEL is above debug', () => {
    const result = sourceEnvAndRunSync('log_debug "resolved config path"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'info',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout).toBe('');
  });
});
