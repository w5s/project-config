import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(new Set(Object.keys(Module))).toEqual(
      new Set([
        // Public API
        'eslintIgnores',
        'default',
        'meta',
      ]),
    );
  });
});
