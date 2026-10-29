import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('isCI', () => {
  it.each([
    ['is true when CI is true', 'true', undefined, true],
    ['is true when CI is 1', '1', undefined, true],
    ['is true when CI is t', 't', undefined, true],
    ['is true when CI is yes', 'yes', undefined, true],
    ['is true when CI is on', 'on', undefined, true],
    ['is false when CI is false', 'false', undefined, false],
    ['is false when CI is 0', '0', undefined, false],
    ['is false when CI is f', 'f', undefined, false],
    ['is false when CI is no', 'no', undefined, false],
    ['is false when CI is off', 'off', undefined, false],
    ['is true when CONTINUOUS_INTEGRATION is true', undefined, 'true', true],
    ['is false when CONTINUOUS_INTEGRATION is false', undefined, 'false', false],
    ['is false when CONTINUOUS_INTEGRATION is no', undefined, 'no', false],
    ['is true when either variable is enabled', 'false', '1', true],
    ['is false when CI is empty', '', undefined, false],
    ['is false when neither variable is set', undefined, undefined, false],
  ])('%s', async (_name, ci, continuousIntegration, expected) => {
    vi.stubEnv('CI', ci);
    vi.stubEnv('CONTINUOUS_INTEGRATION', continuousIntegration);
    vi.resetModules();

    const { isCI } = await import('./isCI.js');

    expect(isCI()).toBe(expected);
  });

  it.each([
    ['CI', 'maybe', undefined],
    ['CONTINUOUS_INTEGRATION', undefined, 'maybe'],
  ])('throws when %s is not a valid boolean', async (_name, ci, continuousIntegration) => {
    vi.stubEnv('CI', ci);
    vi.stubEnv('CONTINUOUS_INTEGRATION', continuousIntegration);
    vi.resetModules();

    const { isCI } = await import('./isCI.js');

    expect(() => isCI()).toThrow(/Invalid bool input/);
  });
});
