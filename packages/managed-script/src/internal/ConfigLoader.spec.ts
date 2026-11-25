import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';

import { runScript } from '../ManagedScript/runScript.js';
import { ConfigLoader } from './ConfigLoader.js';

describe('ConfigLoader', () => {
  const TEST_PATH = '.cache/managed-script-config';
  const RUNNER_TEST_PATH = '.cache/managed-script-config-runner';
  const EXTENDS_TEST_PATH = '.cache/managed-script-config-extends';

  beforeEach(async () => {
    await rm(TEST_PATH, { force: true, recursive: true });
    await mkdir(TEST_PATH, { recursive: true });
    await rm(RUNNER_TEST_PATH, { force: true, recursive: true });
    await mkdir(RUNNER_TEST_PATH, { recursive: true });
    await rm(EXTENDS_TEST_PATH, { force: true, recursive: true });
    await mkdir(EXTENDS_TEST_PATH, { recursive: true });
    await writeFile(nodePath.join(TEST_PATH, 'package.json'), JSON.stringify({ name: 'fixture' }, null, 2));
    await writeFile(nodePath.join(RUNNER_TEST_PATH, 'package.json'), JSON.stringify({ name: 'fixture-runner' }, null, 2));
    await writeFile(nodePath.join(EXTENDS_TEST_PATH, 'package.json'), JSON.stringify({ name: 'fixture-extends' }, null, 2));
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

    it('preserves a runner script from managed-script.config.json', async () => {
      const configPath = nodePath.join(RUNNER_TEST_PATH, 'managed-script.config.json');
      await writeFile(
        configPath,
        JSON.stringify({ scripts: { build: { args: ['script.js', '--fix'], runner: 'node' } } }, null, 2),
      );

      const loaded = await ConfigLoader.load({ cwd: RUNNER_TEST_PATH });

      expect(loaded.config.scripts).toEqual({
        build: { args: ['script.js', '--fix'], runner: 'node' },
      });
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

    it('finds an ancestor package configuration past packages without the field', async () => {
      const packageDir = nodePath.join(TEST_PATH, 'packages', 'child', 'src');
      await mkdir(packageDir, { recursive: true });
      await writeFile(
        nodePath.join(TEST_PATH, 'package.json'),
        JSON.stringify({ 'managed-script': { scripts: { build: 'from-root' } } }),
      );
      await writeFile(nodePath.join(TEST_PATH, 'packages', 'child', 'package.json'), JSON.stringify({ name: 'child' }));

      const loaded = await ConfigLoader.load({ cwd: packageDir });

      expect(loaded.config.scripts).toEqual({ build: 'from-root' });
      expect(loaded.configFile).toBe(nodePath.resolve(TEST_PATH, 'package.json'));
      expect(loaded.layers.some((layer) => layer.configFile === nodePath.resolve(TEST_PATH, 'package.json'))).toBe(true);
    });

    it('resolves ancestor extends from the config directory and executes in the child directory', async () => {
      const childDir = nodePath.resolve(TEST_PATH, 'packages', 'child');
      const sharedDir = nodePath.resolve(TEST_PATH, 'shared');
      await mkdir(childDir, { recursive: true });
      await mkdir(sharedDir, { recursive: true });
      await writeFile(nodePath.join(TEST_PATH, 'package.json'), JSON.stringify({ 'managed-script': { extends: ['./shared'] } }));
      await writeFile(nodePath.join(childDir, 'package.json'), JSON.stringify({ name: 'child' }));
      await writeFile(
        nodePath.join(sharedDir, 'managed-script.config.json'),
        JSON.stringify({
          scripts: {
            build: {
              args: ['-e', 'require("node:fs/promises").writeFile("result.txt", process.cwd() + "\\n" + process.env.MANAGED_SCRIPT_CONFIG_FILE)'],
              runner: process.execPath,
            },
          },
        }),
      );

      await runScript({ context: { cwd: childDir }, parameters: { scriptName: 'build' } });

      expect(await readFile(nodePath.join(childDir, 'result.txt'), 'utf8')).toBe(
        `${childDir}\n${nodePath.join(sharedDir, 'managed-script.config.json')}`,
      );
    });

    it('prefers the nearest config file over an ancestor package configuration', async () => {
      const childDir = nodePath.join(TEST_PATH, 'packages', 'child');
      await mkdir(childDir, { recursive: true });
      await writeFile(
        nodePath.join(TEST_PATH, 'package.json'),
        JSON.stringify({ 'managed-script': { scripts: { build: 'from-root' } } }),
      );
      await writeFile(nodePath.join(childDir, 'managed-script.config.json'), JSON.stringify({ scripts: { build: 'from-child' } }));

      const loaded = await ConfigLoader.load({ cwd: childDir });

      expect(loaded.config.scripts).toEqual({ build: 'from-child' });
      expect(loaded.configFile).toBe(nodePath.resolve(childDir, 'managed-script.config.json'));
      expect(loaded.layers.some((layer) => layer.configFile === loaded.configFile)).toBe(true);
    });

    it('continues to the ancestor when the local configuration is empty', async () => {
      const childDir = nodePath.join(TEST_PATH, 'child');
      await mkdir(childDir, { recursive: true });
      await writeFile(
        nodePath.join(TEST_PATH, 'package.json'),
        JSON.stringify({ 'managed-script': { scripts: { build: 'from-root' } } }),
      );
      await writeFile(nodePath.join(childDir, 'package.json'), JSON.stringify({ 'managed-script': {} }));

      const loaded = await ConfigLoader.load({ cwd: childDir });

      expect(loaded.config.scripts).toEqual({ build: 'from-root' });
      expect(loaded.configFile).toBe(nodePath.resolve(TEST_PATH, 'package.json'));
    });

    it('finds an ancestor rc file and preserves its origin', async () => {
      const childDir = nodePath.join(TEST_PATH, 'child');
      await mkdir(childDir, { recursive: true });
      await writeFile(nodePath.join(TEST_PATH, '.managed-scriptrc'), 'scripts.build=from-rc\n');

      const loaded = await ConfigLoader.load({ cwd: childDir });

      expect(loaded.config.scripts).toEqual({ build: 'from-rc' });
      expect(loaded.configFile).toBe(nodePath.resolve(TEST_PATH, '.managed-scriptrc'));
      expect(loaded.layers.some((layer) => layer.configFile === loaded.configFile)).toBe(true);
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
