import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(new Set(Object.keys(Module))).toEqual(
      new Set([
        'ESLintConfig',
        'interopDefault',
        'meta',
        // Public API
        'Project',
        'ProjectScript',
      ]),
    );
  });
});
