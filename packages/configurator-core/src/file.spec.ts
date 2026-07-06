import { chmod, readFile, stat, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { describe, expect, it } from 'vitest';

import { file, fileSync } from './file.js';
import { getTestPath } from './testing/index.js';

async function readMode(path: string) {
  const fileStat = await stat(path);

  return fileStat.mode & 0o777;
}

describe(file, () => {
  const testPath = getTestPath('file-');

  it('should create file if present', async () => {
    const path = nodePath.join(testPath, 'create');
    await file({
      path,
      state: 'present',
      update: () => 'foo',
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
  });

  it('should create file with mode if present', async () => {
    const path = nodePath.join(testPath, 'create-with-mode');
    await file({
      mode: {
        group: { read: true },
        other: { read: true },
        owner: { read: true, write: true },
      },
      path,
      state: 'present',
      update: () => 'foo',
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o644);
  });

  it('should update mode without changing content', async () => {
    const path = nodePath.join(testPath, 'update-mode-only');
    await writeFile(path, 'foo');
    await chmod(path, 0o600);

    await file({
      mode: {
        group: { read: true },
        other: { read: true },
        owner: { read: true, write: true },
      },
      path,
      state: 'present',
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o644);
  });

  it('should apply mode when update is omitted and file already exists', async () => {
    const path = nodePath.join(testPath, 'mode-existing-file');
    await writeFile(path, 'foo');
    await chmod(path, 0o644);

    await file({
      mode: {
        group: { execute: true, read: true },
        other: { execute: true, read: true },
        owner: { execute: true, read: true, write: true },
      },
      path,
      state: 'present',
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o755);
  });

  it('should leave mode unchanged when mode is omitted', async () => {
    const path = nodePath.join(testPath, 'mode-unchanged');
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
    const path = nodePath.join(testPath, 'delete-absent');
    await expect(file({
      path,
      state: 'absent',
    })).resolves.toBeUndefined();
  });

  it('should ignore mode when file is absent', async () => {
    const path = nodePath.join(testPath, 'delete-with-mode');
    await writeFile(path, 'foo');

    await file({
      mode: {
        owner: { execute: true, read: true, write: true },
      },
      path,
      state: 'absent',
    });

    await expect(stat(path)).rejects.toThrow();
  });

  it('should support mode in fileSync', async () => {
    const path = nodePath.join(testPath, 'sync-mode');
    fileSync({
      mode: {
        group: { read: true },
        owner: { read: true, write: true },
      },
      path,
      state: 'present',
      update: () => 'foo',
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('foo');
    await expect(readMode(path)).resolves.toEqual(0o640);
  });
});
