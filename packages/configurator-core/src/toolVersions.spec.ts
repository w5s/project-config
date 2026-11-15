import { readFile, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { describe, expect, it } from 'vitest';

import { getTestPath } from './testing/index.js';
import { toolVersions, toolVersionsSync } from './toolVersions.js';

describe(toolVersions, () => {
  const testPath = getTestPath('tool-versions-');

  it('should parse existing tool versions into a record', async () => {
    const path = nodePath.join(testPath, 'parse');
    await writeFile(path, 'nodejs 20.1.0\npython 3.12.1', 'utf8');

    await toolVersions({
      path,
      state: 'present',
      update: (content) => {
        expect(content).toEqual({ nodejs: '20.1.0', python: '3.12.1' });
        return content;
      },
    });
  });

  it('should pass an empty record when file is absent', async () => {
    const path = nodePath.join(testPath, 'absent');

    await toolVersions({
      path,
      state: 'present',
      update: (content) => {
        expect(content).toEqual({});
        return { golang: '1.22.0' };
      },
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('golang 1.22.0');
  });

  it('should normalize whitespace between tool and version', async () => {
    const path = nodePath.join(testPath, 'whitespace');
    await writeFile(path, 'nodejs\t20.1.0\npython    3.12.1', 'utf8');

    await toolVersions({
      path,
      state: 'present',
      update: (content) => content,
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('nodejs 20.1.0\npython 3.12.1');
  });

  it('should keep tools without version with an empty value', async () => {
    const path = nodePath.join(testPath, 'no-version');
    await writeFile(path, 'nodejs', 'utf8');

    await toolVersions({
      path,
      state: 'present',
      update: (content) => content,
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('nodejs ');
  });

  it('should not write file when update returns undefined', async () => {
    const path = nodePath.join(testPath, 'undefined-result');

    await toolVersions({
      path,
      state: 'present',
      update: () => undefined,
    });

    await expect(readFile(path, 'utf8')).rejects.toThrow();
  });
});

describe(toolVersionsSync, () => {
  const testPath = getTestPath('tool-versions-sync-');

  it('should update tool versions synchronously', async () => {
    // readFile is async so the assertion stays consistent with the other specs
    const path = nodePath.join(testPath, 'update');
    await writeFile(path, 'nodejs 18.0.0', 'utf8');

    toolVersionsSync({
      path,
      state: 'present',
      update: (content) => ({ ...content, nodejs: '20.1.0', python: '3.12.1' }),
    });

    await expect(readFile(path, 'utf8')).resolves.toEqual('nodejs 20.1.0\npython 3.12.1');
  });
});
