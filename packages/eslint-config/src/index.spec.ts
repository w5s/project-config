import { describe, expect, it } from 'vitest';

import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    expect(Module).toMatchObject({
      defineConfig: expect.any(Function),
      e18e: expect.any(Function),
      es: expect.any(Function),
      ignores: expect.any(Function),
      imports: expect.any(Function),
      jsdoc: expect.any(Function),
      jsonc: expect.any(Function),
      jsx: expect.any(Function),
      markdown: expect.any(Function),
      meta: expect.any(Object),
      next: expect.any(Function),
      node: expect.any(Function),
      perfectionist: expect.any(Function),
      react: expect.any(Function),
      restrictedGlobals: expect.any(Array),
      restrictedImportsPaths: expect.any(Array),
      stylistic: expect.any(Function),
      StylisticConfig: expect.any(Object),
      test: expect.any(Function),
      ts: expect.any(Function),
      unicorn: expect.any(Function),
      unusedImports: expect.any(Function),
      yml: expect.any(Function),
    });
  });
});
