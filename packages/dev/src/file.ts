import { access, chmod, readFile, rm, writeFile } from 'node:fs/promises';
import { accessSync, chmodSync, constants, readFileSync, rmSync, writeFileSync } from 'node:fs';

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

export interface FilePermissionSet {
  /**
   * Read permission
   */
  readonly read?: boolean;

  /**
   * Write permission
   */
  readonly write?: boolean;

  /**
   * Execute permission
   */
  readonly execute?: boolean;
}

export interface FileMode {
  /**
   * Owner permissions
   */
  readonly owner?: FilePermissionSet;

  /**
   * Group permissions
   */
  readonly group?: FilePermissionSet;

  /**
   * Other permissions
   */
  readonly other?: FilePermissionSet;
}

function toModeFlag(permissionSet: FilePermissionSet | undefined, read: number, write: number, execute: number): number {
  return (
    (permissionSet?.read === true ? read : 0)
    | (permissionSet?.write === true ? write : 0)
    | (permissionSet?.execute === true ? execute : 0)
  );
}

function toMode(mode: FileMode | undefined): number | undefined {
  return mode == null
    ? mode
    : (
        toModeFlag(mode.owner, 0o400, 0o200, 0o100)
        | toModeFlag(mode.group, 0o040, 0o020, 0o010)
        | toModeFlag(mode.other, 0o004, 0o002, 0o001)
      );
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
 * })
 * ```
 *
 * @param options
 */
export async function file(options: FileOptions): Promise<void> {
  const { path, state, update, encoding = 'utf8', mode } = options;
  if (state === 'present') {
    const isPresent = await exists(path);
    const previousContent = isPresent ? await readFile(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = toMode(mode);
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
 * })
 * ```
 *
 * @param options
 */
export function fileSync(options: FileOptions): void {
  const { path, state, update, encoding = 'utf8', mode } = options;
  if (state === 'present') {
    const isPresent = existsSync(path);
    const previousContent = isPresent ? readFileSync(path, encoding) : '';
    const newContent = update == null ? (isPresent ? undefined : '') : update(previousContent);
    const newMode = toMode(mode);
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
