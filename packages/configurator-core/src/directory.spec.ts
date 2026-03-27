import { describe, expect, it } from 'vitest';
import nodePath from 'node:path';
import { existsSync } from 'node:fs';
import { directory, directorySync } from './directory.js';
import { getTestPath } from './testing/index.js';

describe.each([
  ['directory', directory],
  ['directorySync', directorySync],
] as const)('%s', (_, subject) => {
  const testPath = getTestPath('directory-');

  it('should create directory if present', async () => {
    const path = nodePath.join(testPath, 'create');
    await subject({
      path,
      state: 'present',
    });
    expect(existsSync(path)).toEqual(true);
  });

  it('should not throw error if absent', async () => {
    const path = nodePath.join(testPath, 'delete-absent');
    expect(async () => {
      await subject({
        path,
        state: 'absent',
      });
    }).not.toThrow();
  });
});
