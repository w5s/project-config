import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

import { skillsAgentList } from './skillsAgentList.js';

const cwd = path.join(path.sep, 'project');
const existing = (...directories: Array<string>) => {
  const paths = new Set(directories.map((directory) => path.join(cwd, directory)));
  return async (candidate: string) => paths.has(candidate);
};

describe(skillsAgentList, () => {
  it('returns an empty list when no skills folder exists', async () => {
    await expect(skillsAgentList(cwd, existing())).resolves.toEqual([]);
  });

  it('returns "claude-code" when .claude/skills exists', async () => {
    await expect(skillsAgentList(cwd, existing('.claude/skills'))).resolves.toEqual(['claude-code']);
  });

  it('ignores an agent root folder without skills folder', async () => {
    await expect(skillsAgentList(cwd, existing('.agents', '.claude'))).resolves.toEqual([]);
  });

  it('checks each skills folder inside the given directory', async () => {
    const exists = vi.fn(existing('.claude/skills'));

    await skillsAgentList(cwd, exists);

    expect(exists).toHaveBeenCalledWith(path.join(cwd, '.claude', 'skills'));
  });

  it('checks the real file system by default', async () => {
    await expect(skillsAgentList(path.join(path.sep, 'does', 'not', 'exist'))).resolves.toEqual([]);
  });
});
