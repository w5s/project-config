import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log_info', () => {
  it('writes a package-prefixed info message to stdout', () => {
    const result = sourceEnvAndRunSync('log_info "commitlint disabled"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe(
      'Info: [@w5s/lefthook-config] commitlint disabled\n',
    );
    expect(result.stderr).toBe('');
  });

  it('is silent when LEFTHOOK_LOG_LEVEL is above info', () => {
    const result = sourceEnvAndRunSync('log_info "commitlint disabled"', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'error',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('');
    expect(result.stderr).toBe('');
  });
});
