import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    expect(Module).toMatchObject({
      defaultConfig: expect.any(Object),
      hooks: expect.objectContaining({
        updateConfig: expect.any(Function),
      }),
      meta: expect.objectContaining({
        name: expect.any(String),
        version: expect.any(String),
      }),
      PnpmUserConfig: expect.objectContaining({
        merge: expect.any(Function),
      }),
    });
  });
});
