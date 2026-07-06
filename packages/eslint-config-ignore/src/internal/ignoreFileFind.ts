/* eslint-disable unicorn/prefer-await */
import fs from 'node:fs/promises';
import nodePath from 'node:path';

import { ignoreFileParse } from './ignoreFileParse.js';
import { ignoreRuleResolve } from './ignoreRuleResolve.js';

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

  // --- Helpers (internal, not exported) ---------------------------------
  const normalize = (p: string) => p.replaceAll('\\', '/');

  function lastMatchWins(patterns: string[], candidateRel: string): null | string {
    const normCandidate = normalize(candidateRel);
    let lastMatch: null | string = null;
    for (const p of patterns) {
      const neg = p.startsWith('!');
      const pat = neg ? p.slice(1) : p;
      const patNorm = normalize(pat);
      if (!patNorm) continue;

      if (normCandidate === patNorm || normCandidate.startsWith(patNorm + '/')) {
        lastMatch = p;
      }
    }
    return lastMatch;
  }

  function isIgnored(patterns: string[], candidateRel: string): boolean {
    const m = lastMatchWins(patterns, candidateRel);
    if (!m) return false;
    return !m.startsWith('!');
  }

  async function collectAncestorGitignores(startDir: string): Promise<string[]> {
    const files: string[] = [];
    let dir = startDir;
    while (true) {
      const gi = nodePath.join(dir, GITIGNORE_FILE);
      try {
        const stat = await fs.stat(gi).catch(() => null);
        if (stat && stat.isFile()) files.push(gi);
      } catch {
        // ignore
      }

      if (stopAtGitRoot) {
        try {
          const gitStat = await fs.stat(nodePath.join(dir, '.git')).catch(() => null);
          if (gitStat && gitStat.isDirectory()) break;
        } catch {
          // ignore
        }
      }

      const parent = nodePath.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    // eslint-disable-next-line unicorn/no-array-reverse
    return files.reverse();
  }

  async function parseAndResolve(giPath: string): Promise<string[]> {
    try {
      const content = String(await fs.readFile(giPath, 'utf8'));
      const parsed = ignoreFileParse(content);
      const prefixRel = nodePath.relative(rootDir, nodePath.dirname(giPath));
      return parsed.map((p) => ignoreRuleResolve(prefixRel, p));
    } catch {
      return [];
    }
  }

  // --- Build initial patterns from ancestor .gitignore files -------------
  const ancestorFiles = await collectAncestorGitignores(absoluteRootDir);
  const initialPatterns: string[] = [];
  for (const gi of ancestorFiles) {
    const parsed = await parseAndResolve(gi);
    if (parsed.length > 0) initialPatterns.push(...parsed);
    found.add(gi);
  }

  // --- BFS downward carrying accumulated patterns -----------------------
  const queue: Array<{ depth: number; dir: string; patterns: string[] }> = [
    { depth: 0, dir: absoluteRootDir, patterns: [...initialPatterns] },
  ];

  while (queue.length > 0) {
    // eslint-disable-next-line ts/no-non-null-assertion
    const { depth, dir: currentDir, patterns } = queue.shift()!;
    if (depth > maxDepth) continue;

    let entries;
    try {
      entries = await fs.readdir(currentDir, { withFileTypes: true });
    } catch {
      continue; // unreadable
    }

    // If local .gitignore exists, parse and extend patterns

    const local = entries.find((e) => e.isFile() && e.name === GITIGNORE_FILE);
    const combinedPatterns = local ? [...patterns, ...(await parseAndResolve(nodePath.join(currentDir, GITIGNORE_FILE)))] : patterns;
    if (local) found.add(nodePath.join(currentDir, GITIGNORE_FILE));

    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      if (excludeDirs.has(ent.name)) continue;
      const subdir = nodePath.join(currentDir, ent.name);
      const rel = nodePath.relative(rootDir, subdir);
      if (isIgnored(combinedPatterns, rel)) continue;
      queue.push({ depth: depth + 1, dir: subdir, patterns: combinedPatterns });
    }
  }

  return [...found].map((p) => nodePath.relative(rootDir, p));
}
