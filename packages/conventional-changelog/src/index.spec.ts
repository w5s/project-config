import { describe, expect, it } from 'vitest';
import config from './index.js';

describe('conventional-changelog', () => {
  it('should export data', () => {
    expect(config).toEqual({
      parserOpts: expect.objectContaining({
        headerPattern: expect.any(RegExp),
      }),
    });
  });
});
