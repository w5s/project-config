import nodePath from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { ignoreFile, ignoreFileSync } from './ignoreFile.js';
import { getTestPath } from './testing/index.js';

describe(ignoreFile, () => {
  const testPath = getTestPath('ignore-file-');

  it('should call update with undefined when file is absent', async () => {
    const path = nodePath.join(testPath, 'create-from-undefined');

    await ignoreFile({
      path,
      state: 'present',
      update: (content) => {
        expect(content).toBeUndefined();

        return ['node_modules', '.DS_Store'];
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('node_modules\n.DS_Store');
  });

  it('should preserve existing CRLF line endings when updating', async () => {
    const path = nodePath.join(testPath, 'preserve-crlf');
    await writeFile(path, 'dist\r\ncoverage', 'utf8');

    await ignoreFile({
      path,
      state: 'present',
      update: (content) => [...(content ?? []), '.cache'],
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('dist\r\ncoverage\r\n.cache');
  });
});

describe(ignoreFileSync, () => {
  const testPath = getTestPath('ignore-file-sync-');

  it('should support sync line updates', async () => {
    const path = nodePath.join(testPath, 'sync-update');

    ignoreFileSync({
      path,
      state: 'present',
      update: (content) => [...(content ?? []), 'tmp'],
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('tmp');
  });
});
