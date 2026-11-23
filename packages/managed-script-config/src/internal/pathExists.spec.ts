import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { pathExists } from './pathExists.js';

describe(pathExists, () => {
  it('returns true for an existing file', async () => {
    await expect(pathExists(import.meta.filename)).resolves.toBe(true);
  });

  it('returns true for an existing directory', async () => {
    await expect(pathExists(import.meta.dirname)).resolves.toBe(true);
  });

  it('returns false for a missing path', async () => {
    await expect(pathExists(path.join(import.meta.dirname, 'does-not-exist'))).resolves.toBe(false);
  });
});
