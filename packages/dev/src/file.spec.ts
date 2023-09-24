import { beforeAll, describe, expect, it } from 'vitest';
import { mkdir, rmdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { file } from './file.js';

describe('file', () => {
  const TEST_PATH = '.cache/test-file';

  beforeAll(async () => {
    try {
      await rmdir(TEST_PATH, { recursive: true });
    } catch {
      /* empty */
    }
    await mkdir(TEST_PATH, { recursive: true });
  });

  it('should create file if present', async () => {
    const path = join(TEST_PATH, 'create');
    await file({
      path,
      state: 'present',
      update: () => 'foo',
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
  });
});
