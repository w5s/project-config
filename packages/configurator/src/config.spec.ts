/* eslint-disable unicorn/no-array-sort */
import { describe, it, expect } from 'vitest';
import * as Module from './config.js';

describe('runtime', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(
      [
        // Public API
        'defineConfig',
      ].sort(),
    );
  });
});
