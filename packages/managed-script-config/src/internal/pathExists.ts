import { access } from 'node:fs/promises';

/**
 * Tells asynchronously if a file or a directory exists.
 *
 * @param target path to check
 * @returns `true` if `target` exists and is accessible, `false` otherwise
 * @example
 * ```ts
 * await pathExists('.agents/skills'); // true
 * await pathExists('missing'); // false
 * ```
 */
export async function pathExists(target: string): Promise<boolean> {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}
