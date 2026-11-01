import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { PackageScriptOverride } from './PackageScriptOverride.js';

describe('PackageScriptOverride', () => {
  let cwd: string;

  beforeEach(async () => {
    cwd = await fs.mkdtemp(path.join(os.tmpdir(), 'managed-script-override-'));
  });
  afterEach(async () => {
    await fs.rm(cwd, { force: true, recursive: true });
  });

  it('returns the override name when defined', async () => {
    await fs.writeFile(path.join(cwd, 'package.json'), JSON.stringify({ scripts: { 'build': 'managed-script', 'build!': 'echo hi' } }));
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBe('build!');
  });

  it('returns undefined when not defined', async () => {
    await fs.writeFile(path.join(cwd, 'package.json'), JSON.stringify({ scripts: { build: 'managed-script' } }));
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBeUndefined();
  });

  it('returns undefined when the override is not a string', async () => {
    await fs.writeFile(path.join(cwd, 'package.json'), JSON.stringify({ scripts: { 'build!': 1 } }));
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBeUndefined();
  });

  it('returns undefined without scripts', async () => {
    await fs.writeFile(path.join(cwd, 'package.json'), '{}');
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBeUndefined();
  });

  it('returns undefined when package.json is missing', async () => {
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBeUndefined();
  });

  it('returns undefined when package.json is invalid', async () => {
    await fs.writeFile(path.join(cwd, 'package.json'), '{ nope');
    await expect(PackageScriptOverride.find({ cwd, name: 'build' })).resolves.toBeUndefined();
  });
});
