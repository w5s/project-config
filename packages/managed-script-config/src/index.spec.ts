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
  it('should export configuration scripts', () => {
    expect(Module.default).toMatchObject({
      scripts: {
        rescue: expect.any(String),
      },
    });
  });
});
