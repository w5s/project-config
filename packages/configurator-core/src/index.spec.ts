import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(new Set(Object.keys(Module))).toEqual(
      new Set([
        'block',
        'blockSync',
        // Public API
        'directory',
        'directorySync',
        'file',
        'fileSync',
        'ignoreFile',
        'ignoreFileSync',
        'json',
        'jsonSync',
        'meta',
        'yaml',
        'yamlSync',
        'yarnConfig',
        'yarnConfigSync',
        'yarnVersion',
        'yarnVersionSync',
      ]),
    );
  });
});
