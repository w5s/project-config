import nodePath from 'node:path';
import fs from 'node:fs/promises';

const GITIGNORE_FILE = '.gitignore';

export interface IgnoreFileFindOptions {
  /** Directory names to skip when searching downward from `rootDir`. */
  excludeDirs?: string[];
  /** Maximum recursion depth when searching downward. Defaults to 8. */
  maxDepth?: number;
  /** When true (default), stop ancestor traversal when a `.git` directory is found. */
  stopAtGitRoot?: boolean;
}

/**
 * Find `.gitignore` files relevant to `rootDir`.
 *
 * Behavior:
 * - Searches downwards from `rootDir` (BFS) for `.gitignore` files, skipping `excludeDirs`.
 * - Walks ancestors from `rootDir` up to the filesystem root (and stops at a `.git` folder when `stopAtGitRoot` is true).
 * - Returns relative paths to `rootDir`.
 *
 * @param rootDir
 * @param options
 */
export async function ignoreFileFind(
  rootDir: string,
  options?: IgnoreFileFindOptions,
): Promise<Array<string>> {
  const excludeDirs = new Set(options?.excludeDirs ?? ['node_modules', '.git', 'dist', 'build', 'out']);
  const maxDepth = options?.maxDepth ?? 8;
  const stopAtGitRoot = options?.stopAtGitRoot ?? true;

  const absoluteRootDir = nodePath.resolve(rootDir);
  const found = new Set<string>();

  // Downward search (BFS) with exclusions and maxDepth for performance
  const queue: Array<{ dir: string; depth: number }> = [{ dir: absoluteRootDir, depth: 0 }];
  let current = queue.shift();
  while (current) {
    const { dir, depth } = current;

    if (depth <= maxDepth) {
      let entries;
      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
        for (const ent of entries) {
          if (ent.isFile() && ent.name === GITIGNORE_FILE) {
            found.add(nodePath.join(dir, ent.name));
          } else if (ent.isDirectory() && !excludeDirs.has(ent.name)) {
            const subdir = nodePath.join(dir, ent.name);
            queue.push({ dir: subdir, depth: depth + 1 });
          }
        }
      } catch {
        // ignore unreadable directories
      }
    }

    current = queue.shift();
  }

  // Ancestor search: walk up looking for .gitignore; stop at .git when requested
  let dir = absoluteRootDir;
  while (true) {
    try {
      const gi = nodePath.join(dir, GITIGNORE_FILE);
      const stat = await fs.stat(gi).catch(() => null);
      if (stat && stat.isFile()) found.add(gi);

      if (stopAtGitRoot) {
        const gitDir = nodePath.join(dir, '.git');
        const gitStat = await fs.stat(gitDir).catch(() => null);
        if (gitStat && gitStat.isDirectory()) break;
      }
    } catch {
      // ignore errors in ancestor checks
    }

    const parent = nodePath.dirname(dir);
    if (parent === dir) break; // reached filesystem root
    dir = parent;
  }

  return [...found].map((p) => nodePath.relative(rootDir, p));
}
