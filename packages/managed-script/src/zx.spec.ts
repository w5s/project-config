import { describe, expect, it } from 'vitest';

import { $, isCI } from './zx.js';

describe('$', () => {
  it('exports a callable zx preset', () => {
    expect(typeof $).toBe('function');
  });
});
it('has isCI property', () => {
  expect(typeof isCI).toBe('function');
});
