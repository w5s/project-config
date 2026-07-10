import fs from 'node:fs/promises';
import { tmpdir } from 'node:os';
import nodePath from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { gitModulesIgnore, gitModulesParse } from './gitModulesIgnore.js';

describe(gitModulesParse, () => {
  it('returns an empty array for empty content', () => {
    expect(gitModulesParse('')).toEqual([]);
  });

  it('parses a single submodule path', () => {
    const content = '[submodule "foo"]\n\tpath = packages/foo\n\turl = https://example.com/foo.git\n';
    expect(gitModulesParse(content)).toEqual(['packages/foo']);
  });

  it('parses multiple submodule paths', () => {
    const content = [
      '[submodule "foo"]',
      '\tpath = packages/foo',
      '\turl = https://example.com/foo.git',
      '[submodule "bar"]',
      '\tpath = packages/bar',
      '\turl = https://example.com/bar.git',
    ].join('\n');
    expect(gitModulesParse(content)).toEqual(['packages/foo', 'packages/bar']);
  });

  it('trims surrounding whitespace from paths', () => {
    const content = '[submodule "foo"]\n\tpath =   packages/foo   \n';
    expect(gitModulesParse(content)).toEqual(['packages/foo']);
  });

  it('ignores lines that are not path entries', () => {
    const content = '[submodule "foo"]\n\turl = https://example.com/foo.git\n';
    expect(gitModulesParse(content)).toEqual([]);
  });
});

describe(gitModulesIgnore, () => {
  let testDir: string;

  const writeGitmodules = async (content: string) => {
    await fs.writeFile(nodePath.join(testDir, '.gitmodules'), content, 'utf8');
  };

  beforeEach(async () => {
    testDir = await fs.mkdtemp(nodePath.join(tmpdir(), 'git-modules-test-'));
  });

  afterEach(async () => {
    await fs.rm(testDir, { force: true, recursive: true });
  });

  it('returns an empty array when .gitmodules does not exist', async () => {
    expect(await gitModulesIgnore(testDir)).toEqual([]);
  });

  it('returns glob patterns for each submodule path', async () => {
    await writeGitmodules('[submodule "foo"]\n\tpath = packages/foo\n\turl = https://example.com/foo.git\n');
    expect(await gitModulesIgnore(testDir)).toContain('packages/foo/**');
  });

  it('returns globs for multiple submodules', async () => {
    const content = [
      '[submodule "foo"]',
      '\tpath = packages/foo',
      '\turl = https://example.com/foo.git',
      '[submodule "bar"]',
      '\tpath = packages/bar',
      '\turl = https://example.com/bar.git',
    ].join('\n');
    await writeGitmodules(content);
    const result = await gitModulesIgnore(testDir);
    expect(result).toContain('packages/foo/**');
    expect(result).toContain('packages/bar/**');
  });
});
