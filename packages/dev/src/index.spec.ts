/* eslint-disable unicorn/no-array-sort */
import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort((a, b) => a.localeCompare(b))).toEqual(
      [
        // Public API
        'Project',
        'ProjectScript',
        'ESLintConfig',
        'interopDefault',
        'meta',
      ].sort((a, b) => a.localeCompare(b)),
    );
  });
});
