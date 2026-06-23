import { describe, expect, it } from 'vitest';
import * as Module from './index.js';

describe('conventional-changelog', () => {
  it('has meta', () => {
    expect(Module.meta).toEqual({
      name: expect.any(String),
      version: expect.any(String),
      buildNumber: expect.any(Number),
    });
  });
  it('should export data', async () => {
    await expect(Module.default()).resolves.toMatchSnapshot();
  });
});
