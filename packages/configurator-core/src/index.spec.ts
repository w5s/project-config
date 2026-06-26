import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(new Set(Object.keys(Module))).toEqual(
      new Set([
        // Public API
        'directory',
        'directorySync',
        'block',
        'blockSync',
        'file',
        'fileSync',
        'ignoreFile',
        'ignoreFileSync',
        'json',
        'jsonSync',
        'meta',
        'yarnConfig',
        'yarnConfigSync',
        'yarnVersion',
        'yarnVersionSync',
      ]),
    );
  });
});
