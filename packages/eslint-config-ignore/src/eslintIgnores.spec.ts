import fs from 'node:fs/promises';
import { tmpdir } from 'node:os';
import nodePath from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { eslintIgnores } from './eslintIgnores.js';

describe('eslintIgnores', () => {
  let testDir: string;
  let cwdSpy: ReturnType<typeof vi.spyOn>;

  const writeGitignore = async (prefix: string, content: string) => {
    const targetDir = nodePath.join(testDir, prefix);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(nodePath.join(targetDir, '.gitignore'), content, 'utf8');
  };

  beforeEach(async () => {
    testDir = await fs.mkdtemp(nodePath.join(tmpdir(), 'eslint-ignore-'));
    cwdSpy = vi.spyOn(process, 'cwd').mockReturnValue(testDir);
  });

  afterEach(() => {
    cwdSpy.mockRestore();
  });

  it('returns the default ignore list and merges gitignore patterns', async () => {
    await writeGitignore('', 'dist\n.env\n');
    await writeGitignore('android', 'android-build\n');
    await writeGitignore('ios', 'ios-build\n');

    const result = await eslintIgnores();

    expect(result.name).toBe('w5s/eslint-ignore');
    expect(result.ignores).toContain('**/package-lock.json');
    expect(result.ignores).toContain('**/dist');
    expect(result.ignores).toContain('**/.env');
    expect(result.ignores).toContain('android/**/android-build');
    expect(result.ignores).toContain('ios/**/ios-build');
  });

  it('when recommended is false, only gitignore patterns are merged', async () => {
    await writeGitignore('', 'dist\n.env\n');
    await writeGitignore('android', 'android-build\n');
    await writeGitignore('ios', 'ios-build\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).not.toContain('**/package-lock.json');
    expect(result.ignores).toContain('**/dist');
    expect(result.ignores).toContain('**/.env');
    expect(result.ignores).toContain('android/**/android-build');
    expect(result.ignores).toContain('ios/**/ios-build');
  });

  it('allows overriding the configuration name', async () => {
    const result = await eslintIgnores({ name: 'custom-name' });

    expect(result.name).toBe('custom-name');
  });

  it('allows adding ignores with a fixed array', async () => {
    const result = await eslintIgnores({ ignores: ['custom-ignore/**', 'other-file.txt'], recommended: false });

    expect(result.ignores).toContain('custom-ignore/**');
    expect(result.ignores).toContain('other-file.txt');
  });

  it('allows customizing ignores with a callback', async () => {
    await writeGitignore('', 'root-ignore\n');

    const result = await eslintIgnores({
      ignores: (mergedIgnores) => [
        'callback-ignore/**',
        ...(mergedIgnores.includes('**/root-ignore') ? ['**/root-ignore'] : []),
      ],
      recommended: false,
    });

    expect(result.ignores).toEqual(['callback-ignore/**', '**/root-ignore']);
  });

  it('respects options.cwd when provided', async () => {
    // create a separate directory with its own .gitignore
    await writeGitignore('external', 'external-ignore\n');

    const result = await eslintIgnores({ cwd: nodePath.join(testDir, 'external'), recommended: false });

    expect(result.ignores).toContain('**/external-ignore');
  });

  it('when recommended is true, default ignores are included along with gitignore patterns', async () => {
    await writeGitignore('', 'root-ignore\n');

    const result = await eslintIgnores({ recommended: true });

    expect(result.ignores).toContain('**/root-ignore');
    expect(result.ignores).toContain('**/package-lock.json');
    expect(result.name).toBe('w5s/eslint-ignore');
  });

  it('resolves root .gitignore patterns with a leading slash', async () => {
    await writeGitignore('', '/root-ignore\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('root-ignore');
    expect(result.ignores).not.toContain('**/root-ignore');
  });

  it('resolves nested .gitignore patterns relative to the ignore file directory', async () => {
    await writeGitignore('android', '/android-build\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('android/android-build');
  });

  it('converts unanchored out to a recursive minimatch glob', async () => {
    await writeGitignore('', 'out\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('**/out');
    expect(result.ignores).not.toContain('out');
  });

  it('converts nested unanchored rules to scoped recursive globs', async () => {
    await writeGitignore('android', 'build\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('android/**/build');
  });

  it('converts anchored dist at the root to a root-only glob', async () => {
    await writeGitignore('', '/dist\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('dist');
    expect(result.ignores).not.toContain('**/dist');
  });

  it('preserves negation patterns from gitignore', async () => {
    await writeGitignore('', '!packages/foo/dist/\n');

    const result = await eslintIgnores({ recommended: false });

    expect(result.ignores).toContain('!packages/foo/dist/');
  });

  it('recommended base still supports appending ignores with an array', async () => {
    const result = await eslintIgnores({ ignores: ['only-me/**'], recommended: true });

    expect(result.ignores).toContain('only-me/**');
  });

  it('supports full ignore list replacement with a callback', async () => {
    const result = await eslintIgnores({
      ignores: () => ['only-me/**'],
      recommended: true,
    });

    expect(result.ignores).toEqual(['only-me/**']);
  });
});
