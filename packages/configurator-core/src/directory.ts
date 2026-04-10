import { chmodSync, mkdirSync, rmSync } from 'node:fs';
import { chmod, mkdir, rm } from 'node:fs/promises';
import { useRuntimeContext } from './context.js';
import { __exists } from './__exists.js';
import type { FileMode } from './FileMode.js';
import { __toMode } from './__toMode.js';
import { __existsSync } from './__existsSync.js';

export interface DirectoryOptions {
  /**
   * Directory path
   */
  readonly path: string;

  /**
   * Directory target state
   */
  readonly state: 'present' | 'absent';

  /**
   * File permissions
   */
  readonly mode?: FileMode;
}

/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directory({
 *   path: 'foo/bar',
 *   state: 'present',
 *   mode: {
 *     owner: { read: true, write: true, execute: true },
 *     group: { read: true, write: true, execute: true },
 *     other: { read: true, write: true, execute: true },
 *   },
 * })
 * ```
 *
 * @param options
 */
export async function directory(options: DirectoryOptions): Promise<void> {
  const { path, state, mode } = options;
  const isPresent = await __exists(path);
  const { isDryRun } = useRuntimeContext();
  if (state === 'present') {
    const newMode = __toMode(mode);
    if (!isDryRun && !isPresent) {
      await mkdir(path, { recursive: true, mode: newMode });
    }
    if (!isDryRun && newMode != null && isPresent) {
      await chmod(path, newMode);
    }
  } else if (!isDryRun && isPresent) {
    await rm(path, { recursive: true });
  }
}

/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * directorySync({
 *   path: 'foo/bar',
 *   state: 'present',
 *   mode: {
 *     owner: { read: true, write: true, execute: true },
 *     group: { read: true, write: true, execute: true },
 *     other: { read: true, write: true, execute: true },
 *   },
 * })
 * ```
 *
 * @param options
 */
export function directorySync(options: DirectoryOptions): void {
  const { path, state, mode } = options;
  const isPresent = __existsSync(path);
  const { isDryRun } = useRuntimeContext();
  if (state === 'present') {
    const newMode = __toMode(mode);
    if (!isDryRun && !isPresent) {
      mkdirSync(path, { recursive: true, mode: newMode });
    }
    if (!isDryRun && newMode != null && isPresent) {
      chmodSync(path, newMode);
    }
  } else if (!isDryRun && isPresent) {
    rmSync(path, { recursive: true });
  }
}
