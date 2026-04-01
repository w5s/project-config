import { describe, it, expect } from 'vitest';
import { readFile, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { RuntimeContext } from '@w5s/configurator/runtime';
import { json } from './json.js';
import { getTestPath } from './testing/index.js';

describe(json, () => {
  const testPath = getTestPath('json-');

  it('should create file if present', async () => {
    const path = nodePath.join(testPath, 'create');
    await json({
      path,
      state: 'present',
      update: () => ['foo'],
    });
    await expect(readFile(path, 'utf8')).resolves.toEqual('["foo"]');
  });
  it('should map content', async () => {
    const path = nodePath.join(testPath, 'create-already-exist');
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

  it('should skip mutations in dryRun mode', async () => {
    const path = nodePath.join(testPath, 'dry-run');
    await writeFile(path, '["foo"]');

    await RuntimeContext.run(
      {
        ...RuntimeContext.default,
        isDebug: false,
        isDryRun: true,
      },
      async () => {
        await json<string[]>({
          path,
          state: 'present',
          update: (content = []) => [...content, 'bar'],
        });
      },
    );

    await expect(readFile(path, 'utf8')).resolves.toEqual('["foo"]');
  });
});
