import { beforeAll, describe, it, expect } from 'vitest';
import { mkdir, readFile, rm } from 'node:fs/promises';
import nodePath from 'node:path';
import { json } from './json.js';

describe('json', () => {
  const TEST_PATH = '.cache/test-json';

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
    await json({
      path,
      state: 'present',
      update: () => ['foo'],
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('["foo"]');
  });
  it('should map content', async () => {
    const path = nodePath.join(TEST_PATH, 'create-already-exist');
    await json({
      path,
      state: 'present',
      update: () => ['foo'],
    });
    await json<string[]>({
      path,
      state: 'present',
      update: (_ = []) => [..._, 'bar'],
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('["foo","bar"]');
  });
});
