import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('log_level', () => {
  it.each([
    ['debug', '0'],
    ['DEBUG', '0'],
    ['info', '1'],
    ['warn', '2'],
    ['WARN', '2'],
    ['warning', '2'],
    ['error', '3'],
    ['unknown', '-1'],
  ])('log_level_rank %s returns %s', (level, expectedRank) => {
    const result = sourceEnvAndRunSync(`log_level_rank "${level}"`, {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe(expectedRank);
  });

  it.each([
    ['debug', 'debug', 0],
    ['debug', 'info', 1],
    ['debug', 'warn', 1],
    ['debug', 'error', 1],
    ['info', 'debug', 0],
    ['info', 'info', 0],
    ['info', 'warn', 1],
    ['info', 'error', 1],
    ['warn', 'debug', 0],
    ['warn', 'info', 0],
    ['warn', 'warn', 0],
    ['warn', 'error', 1],
    ['error', 'debug', 0],
    ['error', 'info', 0],
    ['error', 'warn', 0],
    ['error', 'error', 0],
  ])(
    'log_enabled %s with LEFTHOOK_LOG_LEVEL=%s exits with status %i',
    (messageLevel, configuredLevel, expectedStatus) => {
      const result = sourceEnvAndRunSync(`log_enabled "${messageLevel}"`, {
        env: {
          ...restrictedPathEnv,
          LEFTHOOK_LOG_LEVEL: configuredLevel,
        },
      });

      expect(result.status).toBe(expectedStatus);
    },
  );

  it('defaults LEFTHOOK_LOG_LEVEL to info when unset', () => {
    const result = sourceEnvAndRunSync('log_enabled info', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
  });

  it('treats unknown LEFTHOOK_LOG_LEVEL as info', () => {
    const infoResult = sourceEnvAndRunSync('log_enabled info', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'verbose',
      },
    });
    const debugResult = sourceEnvAndRunSync('log_enabled debug', {
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'verbose',
      },
    });

    expect(infoResult.status).toBe(0);
    expect(debugResult.status).toBe(1);
  });
});
