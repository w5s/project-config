import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(new Set(Object.keys(Module))).toEqual(
      new Set([
        // Public API
        'Project',
        'ProjectScript',
        'ESLintConfig',
        'interopDefault',
        'meta',
      ]),
    );
  });
});
