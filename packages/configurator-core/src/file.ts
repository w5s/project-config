import { chmod, readFile, rm, writeFile } from 'node:fs/promises';
import { chmodSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { useRuntimeContext } from './context.js';
import { __exists } from './__exists.js';
import { __existsSync } from './__existsSync.js';
import type { FileMode } from './FileMode.js';
import { __toMode } from './__toMode.js';

export interface FileOptions {
  /**
   * File path
   */
  readonly path: string;

  /**
   * File target state
   */
  readonly state: 'present' | 'absent';

  /**
   * File content mapping function
   *
   */
  readonly update?: ((content: string) => string | undefined) | undefined;

  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;

  /**
   * File permissions
   */
  readonly mode?: FileMode;
}

/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * await file({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
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
export async function file(options: FileOptions): Promise<void> {
  const { path, state, update, encoding = 'utf8', mode } = options;
  const { isDryRun } = useRuntimeContext();
  if (state === 'present') {
    const isPresent = await __exists(path);
    const previousContent = isPresent ? await readFile(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = __toMode(mode);
    if (!isDryRun && newContent != null) {
      await writeFile(path, newContent, { encoding, mode: newMode });
    }
    if (!isDryRun && newMode != null && (isPresent || newContent != null)) {
      await chmod(path, newMode);
    }
  } else {
    if (!isDryRun) {
      await rm(path, { force: true });
    }
  }
}

/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * fileSync({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
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
export function fileSync(options: FileOptions): void {
  const { path, state, update, encoding = 'utf8', mode } = options;
  const { isDryRun } = useRuntimeContext();
  if (state === 'present') {
    const isPresent = __existsSync(path);
    const previousContent = isPresent ? readFileSync(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = __toMode(mode);
    if (!isDryRun && newContent != null) {
      writeFileSync(path, newContent, { encoding, mode: newMode });
    }
    if (!isDryRun && newMode != null && (isPresent || newContent != null)) {
      chmodSync(path, newMode);
    }
  } else {
    if (!isDryRun) {
      rmSync(path, { force: true });
    }
  }
}
