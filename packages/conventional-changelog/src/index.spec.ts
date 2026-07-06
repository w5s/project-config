import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('conventional-changelog', () => {
  it('has meta', () => {
    expect(Module.meta).toEqual({
      buildNumber: expect.any(Number),
      name: expect.any(String),
      version: expect.any(String),
    });
  });
  it('should export data', async () => {
    await expect(Module.default()).resolves.toMatchSnapshot();
  });
});
