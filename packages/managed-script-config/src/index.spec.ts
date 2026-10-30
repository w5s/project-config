import path from 'node:path';
import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    const { meta } = Module;
    expect(meta).toEqual({
      buildNumber: expect.any(Number),
      name: expect.any(String),
      version: expect.any(String),
    });
    expect(new Set(Object.keys(Module))).toEqual(new Set(['default', 'meta']));
  });
  it('should export direct node runners', () => {
    expect(Module.default).toMatchObject({
      scripts: {
        'prepare:gitmodules': {
          args: [expect.stringContaining(path.join('script', 'prepare', 'gitmodules.js'))],
          runner: 'node',
        },
        'prepare:lefthook': {
          args: [expect.stringContaining(path.join('script', 'prepare', 'lefthook.js'))],
          runner: 'node',
        },
        'rescue': {
          args: [expect.stringContaining(path.join('script', 'rescue.js'))],
          runner: 'node',
        },
      },
    });
  });
});
