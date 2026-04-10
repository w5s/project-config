import { describe, expect, it } from 'vitest';
import nodePath from 'node:path';
import { existsSync } from 'node:fs';
import { RuntimeContext } from '@w5s/configurator/runtime';
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

  it('should skip create in dryRun mode', async () => {
    const path = nodePath.join(testPath, `${String(_)}-dry-run-create`);

    await RuntimeContext.run(
      {
        ...RuntimeContext.default,
        isDebug: false,
        isDryRun: true,
      },
      async () => {
        await subject({
          path,
          state: 'present',
        });
      },
    );

    expect(existsSync(path)).toEqual(false);
  });

  it('should skip delete in dryRun mode', async () => {
    const path = nodePath.join(testPath, `${String(_)}-dry-run-delete`);
    directorySync({
      path,
      state: 'present',
    });

    await RuntimeContext.run(
      {
        ...RuntimeContext.default,
        isDebug: false,
        isDryRun: true,
      },
      async () => {
        await subject({
          path,
          state: 'absent',
        });
      },
    );

    expect(existsSync(path)).toEqual(true);
  });
});
