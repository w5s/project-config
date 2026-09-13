import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('die', () => {
  it('writes to stderr and exits with status 1 by default', () => {
    const result = sourceEnvAndRunSync('die "something went wrong"', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      'Error: [@w5s/lefthook-config] something went wrong',
    );
    expect(result.stdout).toBe('');
  });

  it('exits with a custom status', () => {
    const result = sourceEnvAndRunSync('die "bad config" 2', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(2);
    expect(result.stderr).toContain(
      'Error: [@w5s/lefthook-config] bad config',
    );
  });

  it('fails when message is missing', () => {
    const result = sourceEnvAndRunSync('die', { env: restrictedPathEnv });

    expect(result.status).not.toBe(0);
  });
});
