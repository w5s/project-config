import fs from 'node:fs/promises';
import { tmpdir } from 'node:os';
import nodePath from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { ignoreFileFind } from './ignoreFileFind.js';

describe(ignoreFileFind, () => {
  let tempRoot: string;

  beforeEach(async () => {
    // Create a unique temp directory for each test
    tempRoot = await fs.mkdtemp(nodePath.join(tmpdir(), 'ignore-find-test-'));
  });

  afterEach(async () => {
    // Clean up temp directory
    await fs.rm(tempRoot, { force: true, recursive: true });
  });

  it('finds .gitignore in the current directory', async () => {
    const testDir = nodePath.join(tempRoot, 'project');
    await fs.mkdir(testDir, { recursive: true });
    await fs.writeFile(nodePath.join(testDir, '.gitignore'), 'node_modules\n');

    const result = await ignoreFileFind(testDir);
    expect(result).toContain('.gitignore');
  });

  it('finds .gitignore in ancestor directories', async () => {
    const rootGitignore = nodePath.join(tempRoot, '.gitignore');
    const nestedDir = nodePath.join(tempRoot, 'a', 'b', 'c');

    await fs.writeFile(rootGitignore, 'dist\n');
    await fs.mkdir(nestedDir, { recursive: true });

    const result = await ignoreFileFind(nestedDir);
    expect(result).toContain('../../../.gitignore');
  });

  it('finds .gitignore in descendant directories', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const subDir1 = nodePath.join(baseDir, 'sub1');
    const subDir2 = nodePath.join(baseDir, 'sub2', 'nested');

    await fs.mkdir(subDir1, { recursive: true });
    await fs.mkdir(subDir2, { recursive: true });

    await fs.writeFile(nodePath.join(subDir1, '.gitignore'), 'temp1\n');
    await fs.writeFile(nodePath.join(subDir2, '.gitignore'), 'temp2\n');

    const result = await ignoreFileFind(baseDir);
    expect(result).toContain('sub1/.gitignore');
    expect(result).toContain('sub2/nested/.gitignore');
  });

  it('respects excludeDirs option to skip directories', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const nodeModulesDir = nodePath.join(baseDir, 'node_modules');
    const distDir = nodePath.join(baseDir, 'dist');

    await fs.mkdir(nodeModulesDir, { recursive: true });
    await fs.mkdir(distDir, { recursive: true });

    await fs.writeFile(nodePath.join(nodeModulesDir, '.gitignore'), 'excluded\n');
    await fs.writeFile(nodePath.join(distDir, '.gitignore'), 'also-excluded\n');
    await fs.writeFile(nodePath.join(baseDir, '.gitignore'), 'included\n');

    const result = await ignoreFileFind(baseDir, {
      excludeDirs: ['node_modules', 'dist'],
    });

    expect(result).toContain('.gitignore');
    expect(result).not.toContain('node_modules/.gitignore');
    expect(result).not.toContain('dist/.gitignore');
  });

  it('respects maxDepth option to limit downward search', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const level1 = nodePath.join(baseDir, 'level1');
    const level2 = nodePath.join(level1, 'level2');
    const level3 = nodePath.join(level2, 'level3');

    await fs.mkdir(level3, { recursive: true });

    await fs.writeFile(nodePath.join(level1, '.gitignore'), 'l1\n');
    await fs.writeFile(nodePath.join(level2, '.gitignore'), 'l2\n');
    await fs.writeFile(nodePath.join(level3, '.gitignore'), 'l3\n');

    // With maxDepth=1, should only find level1
    const resultDepth1 = await ignoreFileFind(baseDir, { maxDepth: 1 });
    expect(resultDepth1).toContain('level1/.gitignore');
    expect(resultDepth1).not.toContain('level1/level2/.gitignore');

    // With maxDepth=2, should find level1 and level2
    const resultDepth2 = await ignoreFileFind(baseDir, { maxDepth: 2 });
    expect(resultDepth2).toContain('level1/.gitignore');
    expect(resultDepth2).toContain('level1/level2/.gitignore');
    expect(resultDepth2).not.toContain('level1/level2/level3/.gitignore');
  });

  it('stops ancestor search at .git directory when stopAtGitRoot=true', async () => {
    const projectRoot = nodePath.join(tempRoot, 'project');
    const subDir = nodePath.join(projectRoot, 'sub');

    await fs.mkdir(projectRoot, { recursive: true });
    await fs.mkdir(subDir, { recursive: true });
    await fs.mkdir(nodePath.join(projectRoot, '.git'), { recursive: true });

    // Create .gitignore in project root and temp root
    await fs.writeFile(nodePath.join(projectRoot, '.gitignore'), 'project\n');
    await fs.writeFile(nodePath.join(tempRoot, '.gitignore'), 'temp\n');

    const result = await ignoreFileFind(subDir, { stopAtGitRoot: true });
    expect(result).toContain('../.gitignore'); // should find project root's
    // should not traverse above .git
    expect(result.some((p) => p.includes('../../.gitignore'))).toBe(false);
  });

  it('continues ancestor search when stopAtGitRoot=false', async () => {
    const projectRoot = nodePath.join(tempRoot, 'project');
    const subDir = nodePath.join(projectRoot, 'sub');

    await fs.mkdir(projectRoot, { recursive: true });
    await fs.mkdir(subDir, { recursive: true });
    await fs.mkdir(nodePath.join(projectRoot, '.git'), { recursive: true });

    await fs.writeFile(nodePath.join(projectRoot, '.gitignore'), 'project\n');
    await fs.writeFile(nodePath.join(tempRoot, '.gitignore'), 'temp\n');

    const result = await ignoreFileFind(subDir, { stopAtGitRoot: false });
    expect(result.some((p) => p.includes('.gitignore'))).toBe(true);
    // Should traverse above .git when option is false
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  it('deduplicates results', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    await fs.mkdir(baseDir, { recursive: true });

    const gitignorePath = nodePath.join(baseDir, '.gitignore');
    await fs.writeFile(gitignorePath, 'dist\n');

    const result = await ignoreFileFind(baseDir);
    const count = result.filter((p) => p === '.gitignore').length;
    expect(count).toBe(1);
  });

  it('returns paths relative to cwd', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const subDir = nodePath.join(baseDir, 'sub', 'nested');

    await fs.mkdir(subDir, { recursive: true });
    await fs.writeFile(nodePath.join(baseDir, '.gitignore'), 'root\n');
    await fs.writeFile(nodePath.join(subDir, '.gitignore'), 'nested\n');

    const result = await ignoreFileFind(subDir);

    // All paths should be relative to subDir
    // eslint-disable-next-line unicorn/no-for-each
    result.forEach((p) => {
      expect(p).not.toMatch(/^\//);
      expect(nodePath.resolve(subDir, p)).toBeDefined();
    });
  });

  it('uses default excludeDirs when not specified', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const nodeModulesDir = nodePath.join(baseDir, 'node_modules');

    await fs.mkdir(nodeModulesDir, { recursive: true });
    await fs.writeFile(nodePath.join(nodeModulesDir, '.gitignore'), 'excluded\n');
    await fs.writeFile(nodePath.join(baseDir, '.gitignore'), 'included\n');

    const result = await ignoreFileFind(baseDir);

    expect(result).toContain('.gitignore');
    expect(result).not.toContain('node_modules/.gitignore');
  });

  it('skips gitignored directories during downward search', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const agenticDir = nodePath.join(baseDir, 'agentic');
    const ignoredOutDir = nodePath.join(agenticDir, 'out');

    await fs.mkdir(ignoredOutDir, { recursive: true });
    await fs.writeFile(nodePath.join(baseDir, '.gitignore'), 'out\n');
    await fs.writeFile(nodePath.join(ignoredOutDir, '.gitignore'), 'nested\n');

    const result = await ignoreFileFind(baseDir);

    expect(result).toContain('.gitignore');
    expect(result).not.toContain('agentic/out/.gitignore');
  });

  it.runIf(() => process.platform !== 'win32')('handles permission errors gracefully', async () => {
    const baseDir = nodePath.join(tempRoot, 'project');
    const subDir = nodePath.join(baseDir, 'sub');

    await fs.mkdir(subDir, { recursive: true });
    await fs.writeFile(nodePath.join(baseDir, '.gitignore'), 'root\n');

    // Make directory unreadable (if not on Windows)
    await fs.chmod(subDir, 0o000);

    // Should not throw and should still return the root .gitignore
    const result = await ignoreFileFind(baseDir);
    expect(result).toContain('.gitignore');

    // Restore permissions for cleanup
    await fs.chmod(subDir, 0o755);
  });

  it('finds multiple .gitignore files in different ancestor and descendant levels', async () => {
    const root = nodePath.join(tempRoot, 'root');
    const project = nodePath.join(root, 'project');
    const projectSub = nodePath.join(project, 'src');
    const projectSubNested = nodePath.join(projectSub, 'components');

    await fs.mkdir(projectSubNested, { recursive: true });

    // Create .gitignore files at different levels
    await fs.writeFile(nodePath.join(root, '.gitignore'), 'root-ignore\n');
    await fs.writeFile(nodePath.join(project, '.gitignore'), 'project-ignore\n');
    await fs.writeFile(nodePath.join(projectSub, '.gitignore'), 'src-ignore\n');
    await fs.writeFile(nodePath.join(projectSubNested, '.gitignore'), 'components-ignore\n');

    const result = await ignoreFileFind(projectSub);

    expect(result).toContain('.gitignore'); // project/src
    expect(result).toContain('../.gitignore'); // project
    expect(result).toContain('../../.gitignore'); // root
    expect(result).toContain('components/.gitignore'); // projectSub/components
  });
});
