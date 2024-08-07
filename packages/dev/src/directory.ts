import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { access, constants, mkdir, rm } from 'node:fs/promises';

async function exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export interface DirectoryOptions {
  /**
   * Directory path
   */
  readonly path: string;
  /**
   * Directory target state
   */
  readonly state: 'present' | 'absent';
}

/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directory({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
export async function directory(options: DirectoryOptions): Promise<void> {
  const { path, state } = options;
  const isPresent = await exists(path);
  if (state === 'present') {
    if (!isPresent) {
      await mkdir(path, { recursive: true });
    }
  } else if (isPresent) {
    await rm(path, { recursive: true });
  }
}

/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directorySync({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
export function directorySync(options: DirectoryOptions): void {
  const { path, state } = options;
  const isPresent = existsSync(path);
  if (state === 'present') {
    if (!isPresent) {
      mkdirSync(path, { recursive: true });
    }
  } else if (isPresent) {
    rmSync(path, { recursive: true });
  }
}
