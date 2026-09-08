import { describe, expect, it } from 'vitest';

import { $ } from './zx.js';

describe('$', () => {
  it('exports a callable zx preset', () => {
    expect(typeof $).toBe('function');
  });
});
