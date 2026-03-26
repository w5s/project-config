/* eslint-disable unicorn/no-array-sort */
import { describe, it, expect } from 'vitest';
import * as Module from './runtime.js';

describe('runtime', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(
      [
        // Public API
        'definePreset',
        'RuntimeContext',
        'useRuntimeContext',
      ].sort(),
    );
  });
});
