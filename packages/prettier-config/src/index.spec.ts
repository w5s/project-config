import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    const { meta, ...rest } = Module;
    expect(rest).toMatchSnapshot();
    expect(meta).toEqual({
      buildNumber: expect.any(Number),
      name: expect.any(String),
      version: expect.any(String),
    });
  });
});
