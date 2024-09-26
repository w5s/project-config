import { readFile, rm, writeFile, access } from 'node:fs/promises';
import { accessSync, constants, readFileSync, rmSync, writeFileSync } from 'node:fs';

async function exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function existsSync(path: string) {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

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
   * @param content
   */
  readonly update?: ((content: string) => string | undefined) | undefined;
  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;
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
 * })
 * ```
 *
 * @param options
 */
export async function file(options: FileOptions): Promise<void> {
  const { path, state, update, encoding = 'utf8' } = options;
  if (state === 'present') {
    const isPresent = await exists(path);
    const previousContent = isPresent ? await readFile(path, encoding) : '';
    const newContent = update == null ? '' : update(previousContent);
    if (newContent != null) {
      await writeFile(path, newContent, encoding);
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
 * })
 * ```
 *
 * @param options
 */
export function fileSync(options: FileOptions): void {
  const { path, state, update, encoding = 'utf8' } = options;
  if (state === 'present') {
    const isPresent = existsSync(path);
    const previousContent = isPresent ? readFileSync(path, encoding) : '';
    const newContent = update == null ? '' : update(previousContent);
    if (newContent != null) {
      writeFileSync(path, newContent, encoding);
    }
  } else {
    rmSync(path, { force: true });
  }
}
