import { describe, expect, it } from 'vitest';

import { sourceEnvAndRunSync } from './testing.js';

describe('is_falsy', () => {
  it.each([
    ['', 0],
    ['0', 0],
    ['false', 0],
    ['FALSE', 0],
    ['no', 0],
    ['off', 0],
    ['n', 0],
    ['disabled', 0],
    ['1', 1],
    ['true', 1],
    ['yes', 1],
    ['on', 1],
  ])('treats %j as exit status %i', (value, expectedStatus) => {
    const result = sourceEnvAndRunSync(`is_falsy "${value}"`);

    expect(result.status).toBe(expectedStatus);
  });
});
