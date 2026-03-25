/* eslint-disable unicorn/no-array-sort */
import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(
      [
        // Public API
        'directory',
        'directorySync',
        'block',
        'blockSync',
        'file',
        'fileSync',
        'json',
        'jsonSync',
        'meta',
        'yarnConfig',
        'yarnConfigSync',
        'yarnVersion',
        'yarnVersionSync',
      ].sort(),
    );
  });
});
