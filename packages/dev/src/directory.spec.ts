import { beforeAll, describe, expect, it } from 'vitest';
import { mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { directory, directorySync } from './directory.js';

describe.each([
  ['directory', directory],
  ['directorySync', directorySync],
] as const)('%s', (_, subject) => {
  const TEST_PATH = '.cache/test-directory';

  beforeAll(async () => {
    try {
      await rm(TEST_PATH, { recursive: true });
    } catch {
      /* empty */
    }
    await mkdir(TEST_PATH, { recursive: true });
  });

  it('should create directory if present', async () => {
    const path = join(TEST_PATH, 'create');
    await subject({
      path,
      state: 'present',
    });
    expect(existsSync(path)).toEqual(true);
  });

  it('should not throw error if absent', async () => {
    const path = join(TEST_PATH, 'delete-absent');
    expect(async () => {
      await subject({
        path,
        state: 'absent',
      });
    }).not.toThrow();
  });
});
