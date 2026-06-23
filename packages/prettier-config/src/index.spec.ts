import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    const { meta, ...rest } = Module;
    expect(rest).toMatchSnapshot();
    expect(meta).toEqual({
      name: expect.any(String),
      version: expect.any(String),
      buildNumber: expect.any(Number),
    });
  });
});
