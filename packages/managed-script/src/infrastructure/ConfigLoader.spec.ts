import { mkdir, rm, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';

import { ConfigLoader } from './ConfigLoader.js';

describe('ConfigLoader', () => {
  const TEST_PATH = '.cache/managed-script-config';
  const EXTENDS_TEST_PATH = '.cache/managed-script-config-extends';

  beforeEach(async () => {
    await rm(TEST_PATH, { force: true, recursive: true });
    await mkdir(TEST_PATH, { recursive: true });
    await rm(EXTENDS_TEST_PATH, { force: true, recursive: true });
    await mkdir(EXTENDS_TEST_PATH, { recursive: true });
  });

  describe(ConfigLoader.load, () => {
    it('loads config from managed-script.config.json', async () => {
      const configPath = nodePath.join(TEST_PATH, 'managed-script.config.json');
      await writeFile(configPath, JSON.stringify({ scripts: { build: 'from-file' } }, null, 2));

      const loaded = await ConfigLoader.load({ cwd: TEST_PATH });

      expect(loaded.config.scripts).toEqual({ build: 'from-file' });
      expect(loaded.configFile).toContain('managed-script.config.json');
      expect(loaded.layers).not.toHaveLength(0);
    });

    it('loads config from package.json "managed-script" field', async () => {
      const packagePath = nodePath.join(TEST_PATH, 'package.json');
      await writeFile(
        packagePath,
        JSON.stringify({ 'managed-script': { scripts: { build: 'from-package-json' } }, 'name': 'fixture' }, null, 2),
      );

      const loaded = await ConfigLoader.load({ cwd: TEST_PATH });

      expect(loaded.config.scripts).toEqual({ build: 'from-package-json' });
    });

    it('returns layer origins for relative and package extends', async () => {
      const sharedPath = nodePath.join(EXTENDS_TEST_PATH, 'shared');
      const packagePath = nodePath.join(EXTENDS_TEST_PATH, 'node_modules', 'fixture-config-pkg');
      await mkdir(sharedPath, { recursive: true });
      await mkdir(packagePath, { recursive: true });
      await writeFile(
        nodePath.join(EXTENDS_TEST_PATH, 'managed-script.config.json'),
        JSON.stringify({ extends: ['./shared', 'fixture-config-pkg'], scripts: { root: 'root' } }, null, 2),
      );
      await writeFile(
        nodePath.join(sharedPath, 'managed-script.config.json'),
        JSON.stringify({ scripts: { relative: 'relative' } }, null, 2),
      );
      await writeFile(
        nodePath.join(packagePath, 'managed-script.config.json'),
        JSON.stringify({ scripts: { package: 'package' } }, null, 2),
      );
      await writeFile(
        nodePath.join(packagePath, 'package.json'),
        JSON.stringify({ main: 'managed-script.config.json', name: 'fixture-config-pkg' }, null, 2),
      );

      const loaded = await ConfigLoader.load({ cwd: EXTENDS_TEST_PATH });

      expect(loaded.config.scripts).toMatchObject({ package: 'package', relative: 'relative', root: 'root' });
      expect(loaded.layers.some((layer) => layer.cwd === nodePath.resolve(sharedPath))).toBe(true);
      expect(loaded.layers.some((layer) => layer.cwd === nodePath.resolve(packagePath))).toBe(true);
    });
  });
});
