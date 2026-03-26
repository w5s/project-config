import { beforeAll, describe, expect, it } from 'vitest';
import { chmod, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { file, fileSync } from './file.js';

async function readMode(path: string) {
  const fileStat = await stat(path);

  return fileStat.mode & 0o777;
}

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

  it('should create file with mode if present', async () => {
    const path = nodePath.join(TEST_PATH, 'create-with-mode');
    await file({
      path,
      state: 'present',
      update: () => 'foo',
      mode: {
        owner: { read: true, write: true },
        group: { read: true },
        other: { read: true },
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o644);
  });

  it('should update mode without changing content', async () => {
    const path = nodePath.join(TEST_PATH, 'update-mode-only');
    await writeFile(path, 'foo');
    await chmod(path, 0o600);

    await file({
      path,
      state: 'present',
      mode: {
        owner: { read: true, write: true },
        group: { read: true },
        other: { read: true },
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o644);
  });

  it('should apply mode when update is omitted and file already exists', async () => {
    const path = nodePath.join(TEST_PATH, 'mode-existing-file');
    await writeFile(path, 'foo');
    await chmod(path, 0o644);

    await file({
      path,
      state: 'present',
      mode: {
        owner: { read: true, write: true, execute: true },
        group: { read: true, execute: true },
        other: { read: true, execute: true },
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o755);
  });

  it('should leave mode unchanged when mode is omitted', async () => {
    const path = nodePath.join(TEST_PATH, 'mode-unchanged');
    await writeFile(path, 'foo');
    await chmod(path, 0o640);

    await file({
      path,
      state: 'present',
      update: (content) => content,
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o640);
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

  it('should ignore mode when file is absent', async () => {
    const path = nodePath.join(TEST_PATH, 'delete-with-mode');
    await writeFile(path, 'foo');

    await file({
      path,
      state: 'absent',
      mode: {
        owner: { read: true, write: true, execute: true },
      },
    });

    await expect(stat(path)).rejects.toThrow();
  });

  it('should support mode in fileSync', async () => {
    const path = nodePath.join(TEST_PATH, 'sync-mode');
    fileSync({
      path,
      state: 'present',
      update: () => 'foo',
      mode: {
        owner: { read: true, write: true },
        group: { read: true },
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o640);
  });
});
