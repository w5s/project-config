import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    expect(Module).toMatchObject({
      defaultConfig: expect.any(Object),
      defineConfig: expect.any(Function),
      defineConfigWith: expect.any(Function),
    });
  });
});
