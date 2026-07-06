import { chmodSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { chmod, readFile, rm, writeFile } from 'node:fs/promises';

import type { FileMode } from './FileMode.js';

import { __exists } from './__exists.js';
import { __existsSync } from './__existsSync.js';
import { __toMode } from './__toMode.js';

export interface FileOptions {
  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;

  /**
   * File permissions
   */
  readonly mode?: FileMode;

  /**
   * File path
   */
  readonly path: string;

  /**
   * File target state
   */
  readonly state: 'absent' | 'present';

  /**
   * File content mapping function
   *
   */
  readonly update?: ((content: string) => string | undefined) | undefined;
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
  const { encoding = 'utf8', mode, path, state, update } = options;
  if (state === 'present') {
    const isPresent = await __exists(path);
    const previousContent = isPresent ? await readFile(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = __toMode(mode);
    if (newContent != null) {
      await writeFile(path, newContent, { encoding, mode: newMode });
    }
    if (newMode != null && (isPresent || newContent != null)) {
      await chmod(path, newMode);
    }
  } else {
    await rm(path, { force: true });
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
  const { encoding = 'utf8', mode, path, state, update } = options;
  if (state === 'present') {
    const isPresent = __existsSync(path);
    const previousContent = isPresent ? readFileSync(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = __toMode(mode);
    if (newContent != null) {
      writeFileSync(path, newContent, { encoding, mode: newMode });
    }
    if (newMode != null && (isPresent || newContent != null)) {
      chmodSync(path, newMode);
    }
  } else {
    rmSync(path, { force: true });
  }
}
