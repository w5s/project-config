import { beforeAll, describe, expect, it } from 'vitest';
import { mkdir, rm, readFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { file } from './file.js';

describe('file', () => {
  const TEST_PATH = '.cache/test-file';

  beforeAll(async () => {
    try {
      await rm(TEST_PATH, { recursive: true });
    } catch {
      /* empty */
    }
    await mkdir(TEST_PATH, { recursive: true });
  });

  it('should create file if present', async () => {
    const path = nodePath.join(TEST_PATH, 'create');
    await file({
      path,
      state: 'present',
      update: () => 'foo',
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
  });

  it('should not throw error if absent', async () => {
    const path = nodePath.join(TEST_PATH, 'delete-absent');
    expect(async () => {
      await file({
        path,
        state: 'absent',
      });
    }).not.toThrow();
  });
});
