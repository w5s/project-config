import { mkdir, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { describe, expect, it } from 'vitest';

import { isConfigPresent, isConfigPresentSync } from './isConfigPresent.js';
import { getTestPath } from './testing/index.js';

const testPath = getTestPath('isConfigPresent-');

/* cspell:ignore dotrc dotrc-ext config-ext unlisted-ext package-json-app-key package-json-custom-key package-json-falsy-key package-json-invalid sync-empty sync-dotrc sync-package-json-app-key */

async function withFixture(name: string, files: Record<string, string>) {
  const cwd = nodePath.join(testPath, name);
  await mkdir(cwd, { recursive: true });
  await Promise.all(
    Object.entries(files).map(([fileName, content]) => writeFile(nodePath.join(cwd, fileName), content)),
  );

  return cwd;
}

describe(isConfigPresent, () => {
  it('should return false when no config file nor package.json key exists', async () => {
    const cwd = await withFixture('empty', {});

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(false);
  });

  it('should return true when a `.{app}rc` file exists', async () => {
    const cwd = await withFixture('dotrc', { '.eslintrc': '' });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(true);
  });

  it('should return true when a `.{app}rc.{ext}` file exists', async () => {
    const cwd = await withFixture('dotrc-ext', { '.eslintrc.yaml': '' });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(true);
  });

  it('should return true when a `{app}.config.{ext}` file exists', async () => {
    const cwd = await withFixture('config-ext', { 'eslint.config.js': '' });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(true);
  });

  it('should ignore extensions that are not in the provided list', async () => {
    const cwd = await withFixture('unlisted-ext', { 'eslint.config.js': '' });

    await expect(isConfigPresent({ app: 'eslint', cwd, extensions: ['yaml'] })).resolves.toBe(false);
  });

  it('should return true when package.json has a truthy value for the app key', async () => {
    const cwd = await withFixture('package-json-app-key', {
      'package.json': JSON.stringify({ eslint: {} }),
    });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(true);
  });

  it('should return true when package.json has a truthy value for a custom packageConfig key', async () => {
    const cwd = await withFixture('package-json-custom-key', {
      'package.json': JSON.stringify({ eslintConfig: {} }),
    });

    await expect(isConfigPresent({ app: 'eslint', cwd, packageConfig: 'eslintConfig' })).resolves.toBe(true);
  });

  it('should return false when package.json key is null or false', async () => {
    const cwd = await withFixture('package-json-falsy-key', {
      'package.json': JSON.stringify({ eslint: false }),
    });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(false);
  });

  it('should return false when package.json is not valid JSON', async () => {
    const cwd = await withFixture('package-json-invalid', { 'package.json': 'not json' });

    await expect(isConfigPresent({ app: 'eslint', cwd })).resolves.toBe(false);
  });
});

describe(isConfigPresentSync, () => {
  it('should return false when no config file nor package.json key exists', async () => {
    const cwd = await withFixture('sync-empty', {});

    expect(isConfigPresentSync({ app: 'eslint', cwd })).toBe(false);
  });

  it('should return true when a `.{app}rc` file exists', async () => {
    const cwd = await withFixture('sync-dotrc', { '.eslintrc': '' });

    expect(isConfigPresentSync({ app: 'eslint', cwd })).toBe(true);
  });

  it('should return true when package.json has a truthy value for the app key', async () => {
    const cwd = await withFixture('sync-package-json-app-key', {
      'package.json': JSON.stringify({ eslint: {} }),
    });

    expect(isConfigPresentSync({ app: 'eslint', cwd })).toBe(true);
  });
});
