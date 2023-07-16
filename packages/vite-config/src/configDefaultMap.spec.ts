import { describe, it, expect } from 'vitest';
import { configDefaultMap } from './configDefaultMap.js';

describe('configDefaultMap', () => {
  it('should be an object', () => {
    expect(configDefaultMap).toMatchObject({
      application: expect.any(Object),
      library: expect.any(Object),
    });
  });
});
