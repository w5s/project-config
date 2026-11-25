import path from 'node:path';

/** Skills that vendor the CLI, by skill directory name. */
export const VENDORING_SKILLS = ['using-git-worktrees'];

/**
 * @param packageDir
 * @param skill skill directory name
 * @returns absolute path of the vendored CLI binary of the skill
 */
export function vendoredCliPath(packageDir: string, skill: string): string {
  return path.join(packageDir, 'skills', skill, 'scripts', 'git-worktree-manager');
}
